package com.backend.webExplora.exceptions;

public class CredencialesIncorrectasException extends RuntimeException {
    public CredencialesIncorrectasException(String mensaje) {
        super(mensaje);
    }
}
