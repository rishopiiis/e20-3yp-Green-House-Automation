package com.Green_Tech.Green_Tech.Entity;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.authority.SimpleGrantedAuthority;

import java.util.Collections;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

import static com.Green_Tech.Green_Tech.Entity.Permission.*;

@Getter
@RequiredArgsConstructor
public enum Role {
    USER(Collections.emptySet()),
    ADMIN(
            Set.of(
                    ADMIN_CREATE,
                    ADMIN_READ,
                    ADMIN_UPDATE,
                    ADMIN_DELETE
            )
    );

    private final Set<Permission> permissionSet;

    public List<SimpleGrantedAuthority> getAuthorities() {
        var authorities = getPermissionSet()
                .stream()
                .map(permission -> new SimpleGrantedAuthority(permission.name()))
                .collect(Collectors.toList());

        authorities.add(new SimpleGrantedAuthority("ROLE_" + this.name()));
        return authorities;
    }
}
