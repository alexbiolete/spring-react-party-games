package com.mps.team3.party.games.service;

import com.mps.team3.party.games.dao.Game;
import com.mps.team3.party.games.repository.GameRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class GameService {
    @Autowired
    GameRepository gameRepository;

    public List<Game> findAll() {
        return gameRepository.findAll();
    }

    public Game getById(int id) {
        return gameRepository.findById(id).get();
    }

    public Game save(Game game){
        return gameRepository.save(game);
    }

    public Game delete(int gameId){
        Game game = getById(gameId);
        gameRepository.delete(game);
        return game;
    }
}
