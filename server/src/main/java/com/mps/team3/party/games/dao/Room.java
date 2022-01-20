package com.mps.team3.party.games.dao;

import lombok.Data;

import javax.persistence.*;

@Entity
@Table(name="room")
@Data
public class Room {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    int id;
    @Column(name="name")
    String name;
    @Column(name="game_id")
    int gameId;
    @Column(name="type")
    String type;
    @Column(name="admin_id")
    int adminId;
    @Column(name="admin_name")
    String adminName;
    @Column(name="nr_users")
    int nr_users;
    @Column(name="max_users")
    int max_users;
    @Column(name="state")
    String state;
}
