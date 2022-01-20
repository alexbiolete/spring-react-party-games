package com.mps.team3.party.games.service;

import com.mps.team3.party.games.dao.Connection;
import com.mps.team3.party.games.dao.User;
import com.mps.team3.party.games.repository.ConnectionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ConnectionService {
    @Autowired
    ConnectionRepository connectionRepository;

    public List<Connection> findAll() {
        return connectionRepository.findAll();
    }

    public Connection getById(int id) {
        return connectionRepository.findById(id).get();
    }

    public Connection save(Connection connection){
        return connectionRepository.save(connection);
    }

    public Connection delete(int connectionId){
        Connection connection = getById(connectionId);
        connectionRepository.delete(connection);
        return connection;
    }
}
