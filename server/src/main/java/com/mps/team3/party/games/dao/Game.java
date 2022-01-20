package com.mps.team3.party.games.dao;

import lombok.Data;

import javax.persistence.*;

@Entity
@Table(name="game")
@Data
public class Game {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    int id;
    @Column(name="name")
    String name;
}
