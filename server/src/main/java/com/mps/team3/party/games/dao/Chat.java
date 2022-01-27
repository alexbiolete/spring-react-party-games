package com.mps.team3.party.games.dao;

import lombok.Data;

import javax.persistence.*;

@Entity
@Table(name="chat")
@Data
public class Chat {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    int id;
    @Column(name="room_id")
    int room_id;
    @Column(name="user_id")
    int user_id;
    @Column(name="username")
    String username;
    @Column(name="message")
    String message;
}
