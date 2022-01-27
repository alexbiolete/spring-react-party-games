package com.mps.team3.party.games.repository;

import com.mps.team3.party.games.dao.Chat;
import com.mps.team3.party.games.dao.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ChatRepository extends JpaRepository<Chat, Integer> {
    @Query(value = "SELECT * FROM chat c WHERE c.room_id = ?1", nativeQuery = true)
    public List<Chat> findAllByRoomId(int roomId);
}
