package com.mps.team3.party.games.controller;

import com.mps.team3.party.games.dao.Chat;
import com.mps.team3.party.games.dao.User;
import com.mps.team3.party.games.service.ChatService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("/chat")
public class ChatController {
    @Autowired
    ChatService chatService;

    @GetMapping("/all")
    public ResponseEntity findAll() {
        return ResponseEntity.status(HttpStatus.OK).body(chatService.findAll());
    }

    @GetMapping("/all/room")
    public ResponseEntity findAllByRoomId(@RequestParam(name = "roomId") int roomId) {
        return ResponseEntity.status(HttpStatus.OK).body(chatService.findAllByRoomId(roomId));
    }

    @GetMapping
    public ResponseEntity getById(@RequestParam(name = "chatId") int chatId) {
        return ResponseEntity.status(HttpStatus.OK).body(chatService.getById(chatId));
    }

    @PostMapping
    public ResponseEntity createChat(@RequestBody Chat chat) {
        return ResponseEntity.status(HttpStatus.CREATED).body(chatService.save(chat));
    }

    @DeleteMapping
    public ResponseEntity deleteChat(@RequestParam(name = "chatId") int chatId) {
        return ResponseEntity.status(HttpStatus.OK).body(chatService.delete(chatId));
    }
}
