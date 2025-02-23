package com.Green_Tech.Green_Tech.Entity;


public enum Permission {

    ADMIN_READ("admin:read"),
    ADMIN_UPDATE("admin:update"),
    ADMIN_CREATE("admin:create"),
    ADMIN_DELETE("admin:delete");

    private final String permission;

    public String getPermissionSet() {
        return permission;
    }

    Permission(String permission) {
        this.permission = permission;
    }

}