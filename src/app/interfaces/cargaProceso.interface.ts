export interface Proceso {
  ok?: boolean;
  proceso?: Proceso[];
}

export interface Proceso {
  areas?: Area[];
  equipoprincipal?: Equipoprincipal;
  equipobackup?: Equipobackup;
  licenciaEquiposHematologicos?: LicenciaEquiposHematologico[];
  id?: number;
  institucion?: string;
  codigo?: string;
  linkproceso?: string;
  tiempoconsumo?: string;
  determinacion?: string;
  presupuesto?: string;
  entregacarpeta?: string;
  terceraopcion?: string;
  sistema?: string;
  observacion?: string;
  ESTADO?: number;
  usuarioId?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface Area {
  areas?: string;
}

export interface Equipobackup {
  bkquimica?: string;
  valbkquimica?: string;
  bkinmunologia?: string;
  valbkinmunologia?: string;
  bkhematologia?: string;
  valbkhematologia?: string;
  bkcoagulacion?: string;
  valbkcoagulacion?: string;
  bkuipoquimica?: string;
  valbkorquimica?: string;
  bkgasometria?: string;
  valbkgasometria?: number;
  bkelectrolitros?: string;
  valbkelectrolitros?: number;
  bkuroanalisis?: string;
  valbkuroanalisis?: number;
  bkmicrobiologia?: string;
  valbkmicrobiologia?: number;
}

export interface Equipoprincipal {
  eqquimica?: string;
  valquimica?: number;
  eqinmunologia?: string;
  valinmunologia?: number;
  eqhematologia?: string;
  valhematologia?: number;
  eqcoagulacion?: string;
  valcoagulacion?: number;
  eqgasometria?: string;
  valgasometria?: number;
  eqelectrolitros?: string;
  valelectrolitros?: number;
  equroanalisis?: string;
  valuroanalisis?: number;
  eqmicrobiologia?: string;
  valmicrobiologia?: number;
  eqpoc?: string;
  valpoc?: number;
}

export interface LicenciaEquiposHematologico {
  valorinput?: string;
}
