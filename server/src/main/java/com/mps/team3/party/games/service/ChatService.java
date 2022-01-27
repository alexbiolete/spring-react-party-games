package com.mps.team3.party.games.service;

import com.mps.team3.party.games.dao.Chat;
import com.mps.team3.party.games.dao.User;
import com.mps.team3.party.games.repository.ChatRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ChatService {
    @Autowired
    ChatRepository chatRepository;

    public List<Chat> findAll() {
        return chatRepository.findAll();
    }

    public List<Chat> findAllByRoomId(int roomId) {
        return chatRepository.findAllByRoomId(roomId);
    }

    public Chat getById(int id) {
        return chatRepository.findById(id).get();
    }

    public Chat save(Chat chat){
        return chatRepository.save(chat);
    }

    public Chat delete(int chatId){
        Chat chat = getById(chatId);
        chatRepository.delete(chat);
        return chat;
    }
}
