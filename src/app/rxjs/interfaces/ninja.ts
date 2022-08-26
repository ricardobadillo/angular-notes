export interface Ninja {
    id:         string;
    name:       string;
    type:       Type;
    village:    string;
    techniques: string;
    phrase:     string;
}

export interface NinjaDTO extends Partial<Ninja> { }

export enum Type {
    Antagonista = "Antagonista",
    Protagonista = "Protagonista",
    Secundario = "Secundario",
}
