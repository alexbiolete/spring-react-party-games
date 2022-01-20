package com.mps.team3.party.games.controller;

import com.mps.team3.party.games.dao.Game;
import com.mps.team3.party.games.dao.User;
import com.mps.team3.party.games.service.GameService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("/game")
public class GameController {
    @Autowired
    GameService gameService;

    @GetMapping("/all")
    public ResponseEntity findAll() {
        return ResponseEntity.status(HttpStatus.OK).body(gameService.findAll());
    }

    @GetMapping
    public ResponseEntity getById(@RequestParam(name = "gameId") int gameId) {
        return ResponseEntity.status(HttpStatus.OK).body(gameService.getById(gameId));
    }

    @PostMapping
    public ResponseEntity createGame(@RequestBody Game game) {
        return ResponseEntity.status(HttpStatus.CREATED).body(gameService.save(game));
    }

    @DeleteMapping
    public ResponseEntity deleteGame(@RequestParam(name = "gameId") int gameId) {
        return ResponseEntity.status(HttpStatus.OK).body(gameService.delete(gameId));
    }
}
