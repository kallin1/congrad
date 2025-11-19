package com.example.congrad.controller;

import com.example.congrad.entity.Post;
import com.example.congrad.service.PostService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/posts")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class PostController {
    private final PostService postService;

    @PostMapping
    public Post createPost(@RequestBody Post post) {
        return postService.create(post);
    }

    @GetMapping
    public List<Post> getAllPosts() {
        return postService.listAll();
    }
}
