package com.mps.team3.party.games.dao;

import lombok.Data;

import javax.persistence.*;

@Entity
@Table(name="user")
@Data
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    int id;
    @Column(name="username")
    String username;
    @Column(name="password")
    String password;
    @Column(name="mail")
    String mail;
    @Column(name="type")
    String type;
}
