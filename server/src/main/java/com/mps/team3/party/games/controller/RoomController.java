package com.mps.team3.party.games.controller;

import com.mps.team3.party.games.dao.Room;
import com.mps.team3.party.games.dao.User;
import com.mps.team3.party.games.service.RoomService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("/room")
public class RoomController {
    @Autowired
    RoomService roomService;

    @GetMapping("/all")
    public ResponseEntity findAll() {
        return ResponseEntity.status(HttpStatus.OK).body(roomService.findAll());
    }

    @GetMapping
    public ResponseEntity getById(@RequestParam(name = "roomId") int roomId) {
        return ResponseEntity.status(HttpStatus.OK).body(roomService.getById(roomId));
    }

    @PostMapping("/seed")
    public ResponseEntity incrementSeed(@RequestParam(name = "roomId") int roomId) {
        roomService.incrementSeed(roomId);
        return ResponseEntity.status(HttpStatus.OK).body(roomService.getById(roomId));
    }

    @PostMapping
    public ResponseEntity createRoom(@RequestBody Room room) {
        return ResponseEntity.status(HttpStatus.CREATED).body(roomService.save(room));
    }

    @DeleteMapping
    public ResponseEntity deleteRoom(@RequestParam(name = "roomId") int roomId) {
        return ResponseEntity.status(HttpStatus.OK).body(roomService.delete(roomId));
    }
}
