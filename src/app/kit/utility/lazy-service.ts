import { inject, Injector, Type } from '@angular/core';
import { defer, Observable } from 'rxjs';

export function lazyLoadService<T>(loader: () => Promise<T>): Promise<T> {
  const injector = inject(Injector);

  return loader().then((serviceClass) => {
    const service = injector.get(serviceClass);
    return service;
  });
}

export function lazyService<T>(loader: () => Promise<Type<T>>): Observable<T> {
  const injector = inject(Injector);

  return defer(async () => {
    return loader().then((service) => injector.get(service));
  });
}
