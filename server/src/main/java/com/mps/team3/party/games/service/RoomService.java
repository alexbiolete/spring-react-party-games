package com.mps.team3.party.games.service;

import com.mps.team3.party.games.dao.Room;
import com.mps.team3.party.games.repository.RoomRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RoomService {
    @Autowired
    RoomRepository roomRepository;

    public List<Room> findAll() {
        return roomRepository.findAll();
    }

    public Room getById(int id) {
        return roomRepository.findById(id).get();
    }

    public Room save(Room room){
        return roomRepository.save(room);
    }

    public Room delete(int roomId){
        Room room = getById(roomId);
        roomRepository.delete(room);
        return room;
    }

    public void incrementSeed(int roomId) {
        roomRepository.incrementSeed(roomId);
    }
}
