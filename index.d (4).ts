openapi: 3.1.0
info:
  title: Api
  version: 0.1.0
  description: Music Streaming Platform API
servers:
  - url: /api
    description: Base API path
tags:
  - name: health
    description: Health operations
  - name: mixtapes
    description: Mixtape/album operations
  - name: songs
    description: Song operations
  - name: comments
    description: Comment operations
  - name: plays
    description: Play tracking operations
  - name: analytics
    description: Analytics and trending operations
  - name: admin
    description: Admin authentication and management
  - name: upload
    description: File upload operations

paths:
  /healthz:
    get:
      operationId: healthCheck
      tags: [health]
      summary: Health check
      responses:
        "200":
          description: Healthy
          content:
            application/json:
              schema:
                $ref: "#/components/schemas/HealthStatus"

  /mixtapes:
    get:
      operationId: listMixtapes
      tags: [mixtapes]
      summary: List all mixtapes
      responses:
        "200":
          description: List of mixtapes
          content:
            application/json:
              schema:
                type: array
                items:
                  $ref: "#/components/schemas/Mixtape"
    post:
      operationId: createMixtape
      tags: [mixtapes]
      summary: Create a new mixtape (admin only)
      requestBody:
        required: true
        content:
          application/json:
            schema:
              $ref: "#/components/schemas/CreateMixtapeBody"
      responses:
        "201":
          description: Created mixtape
          content:
            application/json:
              schema:
                $ref: "#/components/schemas/Mixtape"
        "400":
          description: Invalid input
          content:
            application/json:
              schema:
                $ref: "#/components/schemas/ErrorResponse"
        "401":
          description: Unauthorized
          content:
            application/json:
              schema:
                $ref: "#/components/schemas/ErrorResponse"

  /mixtapes/{id}:
    get:
      operationId: getMixtape
      tags: [mixtapes]
      summary: Get a mixtape with its tracklist
      parameters:
        - name: id
          in: path
          required: true
          schema:
            type: integer
      responses:
        "200":
          description: Mixtape with songs
          content:
            application/json:
              schema:
                $ref: "#/components/schemas/MixtapeWithSongs"
        "404":
          description: Not found
          content:
            application/json:
              schema:
                $ref: "#/components/schemas/ErrorResponse"
    patch:
      operationId: updateMixtape
      tags: [mixtapes]
      summary: Update a mixtape (admin only)
      parameters:
        - name: id
          in: path
          required: true
          schema:
            type: integer
      requestBody:
        required: true
        content:
          application/json:
            schema:
              $ref: "#/components/schemas/UpdateMixtapeBody"
      responses:
        "200":
          description: Updated mixtape
          content:
            application/json:
              schema:
                $ref: "#/components/schemas/Mixtape"
        "401":
          description: Unauthorized
          content:
            application/json:
              schema:
                $ref: "#/components/schemas/ErrorResponse"
        "404":
          description: Not found
          content:
            application/json:
              schema:
                $ref: "#/components/schemas/ErrorResponse"
    delete:
      operationId: deleteMixtape
      tags: [mixtapes]
      summary: Delete a mixtape (admin only)
      parameters:
        - name: id
          in: path
          required: true
          schema:
            type: integer
      responses:
        "204":
          description: Deleted
        "401":
          description: Unauthorized
          content:
            application/json:
              schema:
                $ref: "#/components/schemas/ErrorResponse"
        "404":
          description: Not found
          content:
            application/json:
              schema:
                $ref: "#/components/schemas/ErrorResponse"

  /songs:
    get:
      operationId: listSongs
      tags: [songs]
      summary: List songs with optional filters
      parameters:
        - name: mixtapeId
          in: query
          required: false
          schema:
            type: ["integer", "null"]
        - name: search
          in: query
          required: false
          schema:
            type: ["string", "null"]
      responses:
        "200":
          description: List of songs
          content:
            application/json:
              schema:
                type: array
                items:
                  $ref: "#/components/schemas/Song"

  /songs/{id}:
    get:
      operationId: getSong
      tags: [songs]
      summary: Get a single song
      parameters:
        - name: id
          in: path
          required: true
          schema:
            type: integer
      responses:
        "200":
          description: Song detail
          content:
            application/json:
              schema:
                $ref: "#/components/schemas/SongDetail"
        "404":
          description: Not found
          content:
            application/json:
              schema:
                $ref: "#/components/schemas/ErrorResponse"
    patch:
      operationId: updateSong
      tags: [songs]
      summary: Update song metadata (admin only)
      parameters:
        - name: id
          in: path
          required: true
          schema:
            type: integer
      requestBody:
        required: true
        content:
          application/json:
            schema:
              $ref: "#/components/schemas/UpdateSongBody"
      responses:
        "200":
          description: Updated song
          content:
            application/json:
              schema:
                $ref: "#/components/schemas/Song"
        "401":
          description: Unauthorized
          content:
            application/json:
              schema:
                $ref: "#/components/schemas/ErrorResponse"
        "404":
          description: Not found
          content:
            application/json:
              schema:
                $ref: "#/components/schemas/ErrorResponse"
    delete:
      operationId: deleteSong
      tags: [songs]
      summary: Delete a song (admin only)
      parameters:
        - name: id
          in: path
          required: true
          schema:
            type: integer
      responses:
        "204":
          description: Deleted
        "401":
          description: Unauthorized
          content:
            application/json:
              schema:
                $ref: "#/components/schemas/ErrorResponse"
        "404":
          description: Not found
          content:
            application/json:
              schema:
                $ref: "#/components/schemas/ErrorResponse"

  /songs/{id}/play:
    post:
      operationId: recordPlay
      tags: [plays]
      summary: Record a play for a song
      parameters:
        - name: id
          in: path
          required: true
          schema:
            type: integer
      requestBody:
        required: true
        content:
          application/json:
            schema:
              $ref: "#/components/schemas/RecordPlayBody"
      responses:
        "200":
          description: Play recorded
          content:
            application/json:
              schema:
                $ref: "#/components/schemas/PlayResult"
        "429":
          description: Rate limited
          content:
            application/json:
              schema:
                $ref: "#/components/schemas/ErrorResponse"

  /songs/{id}/comments:
    get:
      operationId: getComments
      tags: [comments]
      summary: Get comments for a song
      parameters:
        - name: id
          in: path
          required: true
          schema:
            type: integer
      responses:
        "200":
          description: List of comments
          content:
            application/json:
              schema:
                type: array
                items:
                  $ref: "#/components/schemas/Comment"
    post:
      operationId: createComment
      tags: [comments]
      summary: Post a comment on a song
      parameters:
        - name: id
          in: path
          required: true
          schema:
            type: integer
      requestBody:
        required: true
        content:
          application/json:
            schema:
              $ref: "#/components/schemas/CreateCommentBody"
      responses:
        "201":
          description: Comment created
          content:
            application/json:
              schema:
                $ref: "#/components/schemas/Comment"
        "400":
          description: Invalid input / profanity detected
          content:
            application/json:
              schema:
                $ref: "#/components/schemas/ErrorResponse"
        "429":
          description: Rate limited
          content:
            application/json:
              schema:
                $ref: "#/components/schemas/ErrorResponse"

  /comments/{id}:
    delete:
      operationId: deleteComment
      tags: [comments]
      summary: Delete a comment (admin only)
      parameters:
        - name: id
          in: path
          required: true
          schema:
            type: integer
      responses:
        "204":
          description: Deleted
        "401":
          description: Unauthorized
          content:
            application/json:
              schema:
                $ref: "#/components/schemas/ErrorResponse"
        "404":
          description: Not found
          content:
            application/json:
              schema:
                $ref: "#/components/schemas/ErrorResponse"

  /analytics/trending:
    get:
      operationId: getTrending
      tags: [analytics]
      summary: Get top 10 trending songs this week
      responses:
        "200":
          description: Trending songs
          content:
            application/json:
              schema:
                type: array
                items:
                  $ref: "#/components/schemas/TrendingSong"

  /analytics/overview:
    get:
      operationId: getAnalyticsOverview
      tags: [analytics]
      summary: Get overall analytics (admin only)
      responses:
        "200":
          description: Analytics overview
          content:
            application/json:
              schema:
                $ref: "#/components/schemas/AnalyticsOverview"
        "401":
          description: Unauthorized
          content:
            application/json:
              schema:
                $ref: "#/components/schemas/ErrorResponse"

  /analytics/top-songs:
    get:
      operationId: getTopSongs
      tags: [analytics]
      summary: Get all-time top played songs
      responses:
        "200":
          description: Top songs
          content:
            application/json:
              schema:
                type: array
                items:
                  $ref: "#/components/schemas/TrendingSong"

  /admin/login:
    post:
      operationId: adminLogin
      tags: [admin]
      summary: Admin login
      requestBody:
        required: true
        content:
          application/json:
            schema:
              $ref: "#/components/schemas/AdminLoginBody"
      responses:
        "200":
          description: Login success
          content:
            application/json:
              schema:
                $ref: "#/components/schemas/AdminLoginResponse"
        "401":
          description: Invalid credentials
          content:
            application/json:
              schema:
                $ref: "#/components/schemas/ErrorResponse"

  /admin/logout:
    post:
      operationId: adminLogout
      tags: [admin]
      summary: Admin logout
      responses:
        "200":
          description: Logged out
          content:
            application/json:
              schema:
                $ref: "#/components/schemas/SuccessResponse"

  /admin/me:
    get:
      operationId: getAdminMe
      tags: [admin]
      summary: Get current admin session
      responses:
        "200":
          description: Admin session info
          content:
            application/json:
              schema:
                $ref: "#/components/schemas/AdminSession"
        "401":
          description: Not authenticated
          content:
            application/json:
              schema:
                $ref: "#/components/schemas/ErrorResponse"

  /admin/comments:
    get:
      operationId: listAllComments
      tags: [admin]
      summary: List all comments for moderation (admin only)
      responses:
        "200":
          description: All comments
          content:
            application/json:
              schema:
                type: array
                items:
                  $ref: "#/components/schemas/CommentWithSong"
        "401":
          description: Unauthorized
          content:
            application/json:
              schema:
                $ref: "#/components/schemas/ErrorResponse"

  /upload/song:
    post:
      operationId: uploadSong
      tags: [upload]
      summary: Upload a new song with audio file (admin only)
      requestBody:
        required: true
        content:
          multipart/form-data:
            schema:
              $ref: "#/components/schemas/UploadSongBody"
      responses:
        "201":
          description: Song uploaded
          content:
            application/json:
              schema:
                $ref: "#/components/schemas/Song"
        "400":
          description: Invalid file
          content:
            application/json:
              schema:
                $ref: "#/components/schemas/ErrorResponse"
        "401":
          description: Unauthorized
          content:
            application/json:
              schema:
                $ref: "#/components/schemas/ErrorResponse"

  /upload/cover:
    post:
      operationId: uploadCover
      tags: [upload]
      summary: Upload a cover image for a mixtape (admin only)
      requestBody:
        required: true
        content:
          multipart/form-data:
            schema:
              $ref: "#/components/schemas/UploadCoverBody"
      responses:
        "200":
          description: Cover uploaded
          content:
            application/json:
              schema:
                $ref: "#/components/schemas/UploadResult"
        "400":
          description: Invalid file
          content:
            application/json:
              schema:
                $ref: "#/components/schemas/ErrorResponse"
        "401":
          description: Unauthorized
          content:
            application/json:
              schema:
                $ref: "#/components/schemas/ErrorResponse"

components:
  schemas:
    HealthStatus:
      type: object
      properties:
        status:
          type: string
      required:
        - status

    ErrorResponse:
      type: object
      properties:
        error:
          type: string
      required:
        - error

    SuccessResponse:
      type: object
      properties:
        success:
          type: boolean
      required:
        - success

    Mixtape:
      type: object
      properties:
        id:
          type: integer
        title:
          type: string
        artist:
          type: string
        genre:
          type: string
        coverUrl:
          type: ["string", "null"]
        description:
          type: ["string", "null"]
        releaseYear:
          type: ["integer", "null"]
        songCount:
          type: integer
        totalPlays:
          type: integer
        createdAt:
          type: string
          format: date-time
      required:
        - id
        - title
        - artist
        - genre
        - coverUrl
        - description
        - releaseYear
        - songCount
        - totalPlays
        - createdAt

    MixtapeWithSongs:
      type: object
      properties:
        id:
          type: integer
        title:
          type: string
        artist:
          type: string
        genre:
          type: string
        coverUrl:
          type: ["string", "null"]
        description:
          type: ["string", "null"]
        releaseYear:
          type: ["integer", "null"]
        songCount:
          type: integer
        totalPlays:
          type: integer
        createdAt:
          type: string
          format: date-time
        songs:
          type: array
          items:
            $ref: "#/components/schemas/Song"
      required:
        - id
        - title
        - artist
        - genre
        - coverUrl
        - description
        - releaseYear
        - songCount
        - totalPlays
        - createdAt
        - songs

    CreateMixtapeBody:
      type: object
      properties:
        title:
          type: string
        artist:
          type: string
        genre:
          type: string
        coverUrl:
          type: ["string", "null"]
        description:
          type: ["string", "null"]
        releaseYear:
          type: ["integer", "null"]
      required:
        - title
        - artist
        - genre

    UpdateMixtapeBody:
      type: object
      properties:
        title:
          type: ["string", "null"]
        artist:
          type: ["string", "null"]
        genre:
          type: ["string", "null"]
        coverUrl:
          type: ["string", "null"]
        description:
          type: ["string", "null"]
        releaseYear:
          type: ["integer", "null"]

    Song:
      type: object
      properties:
        id:
          type: integer
        title:
          type: string
        artist:
          type: string
        genre:
          type: string
        audioUrl:
          type: string
        duration:
          type: ["integer", "null"]
        mixtapeId:
          type: ["integer", "null"]
        mixtapeTitle:
          type: ["string", "null"]
        trackNumber:
          type: ["integer", "null"]
        totalPlays:
          type: integer
        createdAt:
          type: string
          format: date-time
      required:
        - id
        - title
        - artist
        - genre
        - audioUrl
        - duration
        - mixtapeId
        - mixtapeTitle
        - trackNumber
        - totalPlays
        - createdAt

    SongDetail:
      type: object
      properties:
        id:
          type: integer
        title:
          type: string
        artist:
          type: string
        genre:
          type: string
        audioUrl:
          type: string
        duration:
          type: ["integer", "null"]
        mixtapeId:
          type: ["integer", "null"]
        mixtapeTitle:
          type: ["string", "null"]
        mixtapeCoverUrl:
          type: ["string", "null"]
        trackNumber:
          type: ["integer", "null"]
        totalPlays:
          type: integer
        createdAt:
          type: string
          format: date-time
        comments:
          type: array
          items:
            $ref: "#/components/schemas/Comment"
      required:
        - id
        - title
        - artist
        - genre
        - audioUrl
        - duration
        - mixtapeId
        - mixtapeTitle
        - mixtapeCoverUrl
        - trackNumber
        - totalPlays
        - createdAt
        - comments

    UpdateSongBody:
      type: object
      properties:
        title:
          type: ["string", "null"]
        genre:
          type: ["string", "null"]
        mixtapeId:
          type: ["integer", "null"]
        trackNumber:
          type: ["integer", "null"]

    Comment:
      type: object
      properties:
        id:
          type: integer
        songId:
          type: integer
        name:
          type: string
        text:
          type: string
        createdAt:
          type: string
          format: date-time
      required:
        - id
        - songId
        - name
        - text
        - createdAt

    CommentWithSong:
      type: object
      properties:
        id:
          type: integer
        songId:
          type: integer
        songTitle:
          type: string
        name:
          type: string
        text:
          type: string
        createdAt:
          type: string
          format: date-time
      required:
        - id
        - songId
        - songTitle
        - name
        - text
        - createdAt

    CreateCommentBody:
      type: object
      properties:
        name:
          type: string
        text:
          type: string
        captchaToken:
          type: string
      required:
        - text
        - captchaToken

    RecordPlayBody:
      type: object
      properties:
        sessionId:
          type: string
        durationListened:
          type: integer
        totalDuration:
          type: integer
      required:
        - sessionId
        - durationListened
        - totalDuration

    PlayResult:
      type: object
      properties:
        counted:
          type: boolean
        totalPlays:
          type: integer
      required:
        - counted
        - totalPlays

    TrendingSong:
      type: object
      properties:
        id:
          type: integer
        title:
          type: string
        artist:
          type: string
        genre:
          type: string
        audioUrl:
          type: string
        duration:
          type: ["integer", "null"]
        mixtapeId:
          type: ["integer", "null"]
        mixtapeTitle:
          type: ["string", "null"]
        mixtapeCoverUrl:
          type: ["string", "null"]
        totalPlays:
          type: integer
        weekPlays:
          type: integer
        createdAt:
          type: string
          format: date-time
      required:
        - id
        - title
        - artist
        - genre
        - audioUrl
        - duration
        - mixtapeId
        - mixtapeTitle
        - mixtapeCoverUrl
        - totalPlays
        - weekPlays
        - createdAt

    AnalyticsOverview:
      type: object
      properties:
        totalPlaysAllTime:
          type: integer
        totalPlaysThisWeek:
          type: integer
        totalSongs:
          type: integer
        totalMixtapes:
          type: integer
        totalComments:
          type: integer
        topSongs:
          type: array
          items:
            $ref: "#/components/schemas/TrendingSong"
        trendingThisWeek:
          type: array
          items:
            $ref: "#/components/schemas/TrendingSong"
      required:
        - totalPlaysAllTime
        - totalPlaysThisWeek
        - totalSongs
        - totalMixtapes
        - totalComments
        - topSongs
        - trendingThisWeek

    AdminLoginBody:
      type: object
      properties:
        username:
          type: string
        password:
          type: string
      required:
        - username
        - password

    AdminLoginResponse:
      type: object
      properties:
        success:
          type: boolean
        username:
          type: string
      required:
        - success
        - username

    AdminSession:
      type: object
      properties:
        authenticated:
          type: boolean
        username:
          type: ["string", "null"]
      required:
        - authenticated
        - username

    UploadSongBody:
      type: object
      properties:
        audio:
          type: string
          format: binary
        title:
          type: string
        artist:
          type: string
        genre:
          type: string
        mixtapeId:
          type: ["string", "null"]
        trackNumber:
          type: ["string", "null"]
      required:
        - audio
        - title
        - artist
        - genre

    UploadCoverBody:
      type: object
      properties:
        cover:
          type: string
          format: binary
        mixtapeId:
          type: string
      required:
        - cover
        - mixtapeId

    UploadResult:
      type: object
      properties:
        url:
          type: string
      required:
        - url
