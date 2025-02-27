package com.Green_Tech.Green_Tech.Entity;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

public enum Permission {

    ADMIN_READ("admin:read"),
    ADMIN_UPDATE("admin:update"),
    ADMIN_CREATE("admin:create"),
    ADMIN_DELETE("admin:delete");

    public String getPermission() {
        return permission;
    }

    Permission(String permission) {
        this.permission = permission;
    }

    private final String permission;
}