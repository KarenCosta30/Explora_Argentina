package com.backend.webExplora.dto.entrada;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter  
public class AsignarCategoriaProducto {
    
    private Long productoId;
    private Long categoriaId;
}
