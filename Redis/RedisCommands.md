# Redis CLI Commands

1. SET key value
   ```
   SET name Shubham
   ```
2. EXISTS key
   ```
   EXISTS name
   ```
3. KEYS \* - To get all the keys
   ```
   KEYS *
   ```
4. FLUSHALL - to flush all the keys
   ```
   FLUSHALL
   ```
5. DEl key - to delete a key
   ```
   DEL name
   ```
6. EXPIRE key seconds - (-1) when no expiry is set or (-2) when the key is expired
   ```
   EXPIRE name 10
   ```
7. TTL key - Time To Live
   ```
   TTL name
   ```
8. SETEX key seconds value - Set a key: value with an expiry
   ```
   SETEX name 10 Shubham
   ```

## Arrays

9. LPUSH key element - to push an element at the start of the array
   ```
   LPUSH array 1
   ```
10. RPUSH key element - to push an element at the end of the array
    ```
    RPUSH array 2
    ```
11. LRANGE key start stop - to iterate the array
    ```
    LRANGE array 0 -1
    ```
12. LPOP key - remove an element from the left side
    ```
    LPOP array
    ```
13. RPOP key - remove an element from the right side
    ```
    RPOP array
    ```

## Sets

14. SADD key member
    ```
    SADD hobbies "Computer Gaming"
    ```

## Objects

15. HSET key field value - Set an Object (Hash)
    ```
    HSET persom name Shubham
    ```
16. HGET key field - Get the value of the field in the object
    ```
    HGET person name
    ```
17. HGETALL key - get all the key:values from the object
    ```
    HGETALL person
    ```
18. HDEL key field - delete a field from the object
    ```
    HDEL person name
    ```
19. HEXISTS key field - check where the field exists in the object
    ```
    HEXISTS person name
    ```

## PUB/SUB in Redis

20. Subscribe to a channel

    ```
    SUBSCRIBE channelName
    ```

21. Publish a message to a channel

    ```
    PUBLISH channelName message
    ```

22. Subscribe to all the channels matching a specific pattern

    ```
    PSUBSCRIBE channelPattern (d*)
    ```

23. Unsubscribe a channel
    ```
    UNSUBSCRIBE channelName
    ```
24. Unsubscribe all the channels with matching a specific pattern
    ```
    PUNSUBSCRIBE channelPattern
    ```

## Redis Streams

25. Create a Stream
    ```
    XADD mystream
    ```
