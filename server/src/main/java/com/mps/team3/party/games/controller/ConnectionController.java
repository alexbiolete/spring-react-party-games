package com.mps.team3.party.games.controller;

import com.mps.team3.party.games.dao.Connection;
import com.mps.team3.party.games.dao.User;
import com.mps.team3.party.games.service.ConnectionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("/connection")
public class ConnectionController {
    @Autowired
    ConnectionService connectionService;

    @GetMapping("/all")
    public ResponseEntity findAll() {
        return ResponseEntity.status(HttpStatus.OK).body(connectionService.findAll());
    }

    @GetMapping
    public ResponseEntity getById(@RequestParam(name = "connectionId") int connectionId) {
        return ResponseEntity.status(HttpStatus.OK).body(connectionService.getById(connectionId));
    }

    @PostMapping
    public ResponseEntity createConnection(@RequestBody Connection connection) {
        return ResponseEntity.status(HttpStatus.CREATED).body(connectionService.save(connection));
    }

    @DeleteMapping
    public ResponseEntity deleteConnection(@RequestParam(name = "connectionId") int connectionId) {
        return ResponseEntity.status(HttpStatus.OK).body(connectionService.delete(connectionId));
    }
}
