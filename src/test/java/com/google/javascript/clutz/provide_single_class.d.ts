declare namespace ಠ_ಠ.clutz.foo.bar {
  class Baz extends Baz_Instance {
    static FUNCTION_PROP_ ( ...a : any [] ) : any ;
    static staticMethod (a : string ) : number ;
  }
  class Baz_Instance {
    private noStructuralTyping_: any;
    field : string ;
    avalue : number ;
    equals (b : ಠ_ಠ.clutz.foo.bar.Baz.NestedClass ) : boolean ;
    method (a : string ) : number ;
  }
}
declare namespace ಠ_ಠ.clutz.foo.bar.Baz {
  class NestedClass extends NestedClass_Instance {
  }
  class NestedClass_Instance {
    private noStructuralTyping_: any;
  }
  type NestedEnum = number ;
  var NestedEnum : {
    A : NestedEnum ,
    B : NestedEnum ,
  };
}
declare namespace goog {
  function require(name: 'foo.bar.Baz'): typeof ಠ_ಠ.clutz.foo.bar.Baz;
}
declare module 'goog:foo.bar.Baz' {
  import alias = ಠ_ಠ.clutz.foo.bar.Baz;
  export default alias;
}
