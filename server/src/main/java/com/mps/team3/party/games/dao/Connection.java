package com.mps.team3.party.games.dao;

import lombok.Data;

import javax.persistence.*;

@Entity
@Table(name="connection")
@Data
public class Connection {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    int id;
    @Column(name="room_id")
    int roomId;
    @Column(name="user_id")
    int userId;
    @Column(name="role")
    String role;
    @Column(name="score")
    int score;
}
