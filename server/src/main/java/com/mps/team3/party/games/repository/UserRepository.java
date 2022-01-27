package com.mps.team3.party.games.repository;

import com.mps.team3.party.games.dao.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {
    @Query(value = "Select * FROM user u WHERE u.username = ?1 AND u.password = ?2", nativeQuery = true)
    public User findByUsernameAndPassword(String username, String password);

    @Query(value = "SELECT * FROM user u WHERE u.id IN (SELECT user_id FROM connection WHERE room_id = ?1);", nativeQuery = true)
    public List<User> findAllByRoomId(int roomId);
}
