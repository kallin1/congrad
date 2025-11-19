package com.example.congrad.service;

import com.example.congrad.entity.Post;
import com.example.congrad.repository.PostRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
@RequiredArgsConstructor
public class PostService {
    private final PostRepository postRepository;

    public Post create(Post post) {
        return postRepository.save(post);
    }

    public List<Post> listAll() {
        return postRepository.findAll();
    }
}
