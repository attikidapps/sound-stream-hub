import type { QueryKey, UseMutationOptions, UseMutationResult, UseQueryOptions, UseQueryResult } from "@tanstack/react-query";
import type { AdminLoginBody, AdminLoginResponse, AdminSession, AnalyticsOverview, Comment, CommentWithSong, CreateCommentBody, CreateMixtapeBody, ErrorResponse, HealthStatus, ListSongsParams, Mixtape, MixtapeWithSongs, PlayResult, RecordPlayBody, Song, SongDetail, SuccessResponse, TrendingSong, UpdateMixtapeBody, UpdateSongBody, UploadCoverBody, UploadResult, UploadSongBody } from "./api.schemas";
import { customFetch } from "../custom-fetch";
import type { ErrorType, BodyType } from "../custom-fetch";
type AwaitedInput<T> = PromiseLike<T> | T;
type Awaited<O> = O extends AwaitedInput<infer T> ? T : never;
type SecondParameter<T extends (...args: never) => unknown> = Parameters<T>[1];
/**
 * @summary Health check
 */
export declare const getHealthCheckUrl: () => string;
export declare const healthCheck: (options?: RequestInit) => Promise<HealthStatus>;
export declare const getHealthCheckQueryKey: () => readonly ["/api/healthz"];
export declare const getHealthCheckQueryOptions: <TData = Awaited<ReturnType<typeof healthCheck>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof healthCheck>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof healthCheck>>, TError, TData> & {
    queryKey: QueryKey;
};
export type HealthCheckQueryResult = NonNullable<Awaited<ReturnType<typeof healthCheck>>>;
export type HealthCheckQueryError = ErrorType<unknown>;
/**
 * @summary Health check
 */
export declare function useHealthCheck<TData = Awaited<ReturnType<typeof healthCheck>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof healthCheck>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary List all mixtapes
 */
export declare const getListMixtapesUrl: () => string;
export declare const listMixtapes: (options?: RequestInit) => Promise<Mixtape[]>;
export declare const getListMixtapesQueryKey: () => readonly ["/api/mixtapes"];
export declare const getListMixtapesQueryOptions: <TData = Awaited<ReturnType<typeof listMixtapes>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listMixtapes>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof listMixtapes>>, TError, TData> & {
    queryKey: QueryKey;
};
export type ListMixtapesQueryResult = NonNullable<Awaited<ReturnType<typeof listMixtapes>>>;
export type ListMixtapesQueryError = ErrorType<unknown>;
/**
 * @summary List all mixtapes
 */
export declare function useListMixtapes<TData = Awaited<ReturnType<typeof listMixtapes>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listMixtapes>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Create a new mixtape (admin only)
 */
export declare const getCreateMixtapeUrl: () => string;
export declare const createMixtape: (createMixtapeBody: CreateMixtapeBody, options?: RequestInit) => Promise<Mixtape>;
export declare const getCreateMixtapeMutationOptions: <TError = ErrorType<ErrorResponse>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createMixtape>>, TError, {
        data: BodyType<CreateMixtapeBody>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof createMixtape>>, TError, {
    data: BodyType<CreateMixtapeBody>;
}, TContext>;
export type CreateMixtapeMutationResult = NonNullable<Awaited<ReturnType<typeof createMixtape>>>;
export type CreateMixtapeMutationBody = BodyType<CreateMixtapeBody>;
export type CreateMixtapeMutationError = ErrorType<ErrorResponse>;
/**
 * @summary Create a new mixtape (admin only)
 */
export declare const useCreateMixtape: <TError = ErrorType<ErrorResponse>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createMixtape>>, TError, {
        data: BodyType<CreateMixtapeBody>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof createMixtape>>, TError, {
    data: BodyType<CreateMixtapeBody>;
}, TContext>;
/**
 * @summary Get a mixtape with its tracklist
 */
export declare const getGetMixtapeUrl: (id: number) => string;
export declare const getMixtape: (id: number, options?: RequestInit) => Promise<MixtapeWithSongs>;
export declare const getGetMixtapeQueryKey: (id: number) => readonly [`/api/mixtapes/${number}`];
export declare const getGetMixtapeQueryOptions: <TData = Awaited<ReturnType<typeof getMixtape>>, TError = ErrorType<ErrorResponse>>(id: number, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getMixtape>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getMixtape>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetMixtapeQueryResult = NonNullable<Awaited<ReturnType<typeof getMixtape>>>;
export type GetMixtapeQueryError = ErrorType<ErrorResponse>;
/**
 * @summary Get a mixtape with its tracklist
 */
export declare function useGetMixtape<TData = Awaited<ReturnType<typeof getMixtape>>, TError = ErrorType<ErrorResponse>>(id: number, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getMixtape>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Update a mixtape (admin only)
 */
export declare const getUpdateMixtapeUrl: (id: number) => string;
export declare const updateMixtape: (id: number, updateMixtapeBody: UpdateMixtapeBody, options?: RequestInit) => Promise<Mixtape>;
export declare const getUpdateMixtapeMutationOptions: <TError = ErrorType<ErrorResponse>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateMixtape>>, TError, {
        id: number;
        data: BodyType<UpdateMixtapeBody>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof updateMixtape>>, TError, {
    id: number;
    data: BodyType<UpdateMixtapeBody>;
}, TContext>;
export type UpdateMixtapeMutationResult = NonNullable<Awaited<ReturnType<typeof updateMixtape>>>;
export type UpdateMixtapeMutationBody = BodyType<UpdateMixtapeBody>;
export type UpdateMixtapeMutationError = ErrorType<ErrorResponse>;
/**
 * @summary Update a mixtape (admin only)
 */
export declare const useUpdateMixtape: <TError = ErrorType<ErrorResponse>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateMixtape>>, TError, {
        id: number;
        data: BodyType<UpdateMixtapeBody>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof updateMixtape>>, TError, {
    id: number;
    data: BodyType<UpdateMixtapeBody>;
}, TContext>;
/**
 * @summary Delete a mixtape (admin only)
 */
export declare const getDeleteMixtapeUrl: (id: number) => string;
export declare const deleteMixtape: (id: number, options?: RequestInit) => Promise<void>;
export declare const getDeleteMixtapeMutationOptions: <TError = ErrorType<ErrorResponse>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof deleteMixtape>>, TError, {
        id: number;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof deleteMixtape>>, TError, {
    id: number;
}, TContext>;
export type DeleteMixtapeMutationResult = NonNullable<Awaited<ReturnType<typeof deleteMixtape>>>;
export type DeleteMixtapeMutationError = ErrorType<ErrorResponse>;
/**
 * @summary Delete a mixtape (admin only)
 */
export declare const useDeleteMixtape: <TError = ErrorType<ErrorResponse>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof deleteMixtape>>, TError, {
        id: number;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof deleteMixtape>>, TError, {
    id: number;
}, TContext>;
/**
 * @summary List songs with optional filters
 */
export declare const getListSongsUrl: (params?: ListSongsParams) => string;
export declare const listSongs: (params?: ListSongsParams, options?: RequestInit) => Promise<Song[]>;
export declare const getListSongsQueryKey: (params?: ListSongsParams) => readonly ["/api/songs", ...ListSongsParams[]];
export declare const getListSongsQueryOptions: <TData = Awaited<ReturnType<typeof listSongs>>, TError = ErrorType<unknown>>(params?: ListSongsParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listSongs>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof listSongs>>, TError, TData> & {
    queryKey: QueryKey;
};
export type ListSongsQueryResult = NonNullable<Awaited<ReturnType<typeof listSongs>>>;
export type ListSongsQueryError = ErrorType<unknown>;
/**
 * @summary List songs with optional filters
 */
export declare function useListSongs<TData = Awaited<ReturnType<typeof listSongs>>, TError = ErrorType<unknown>>(params?: ListSongsParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listSongs>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Get a single song
 */
export declare const getGetSongUrl: (id: number) => string;
export declare const getSong: (id: number, options?: RequestInit) => Promise<SongDetail>;
export declare const getGetSongQueryKey: (id: number) => readonly [`/api/songs/${number}`];
export declare const getGetSongQueryOptions: <TData = Awaited<ReturnType<typeof getSong>>, TError = ErrorType<ErrorResponse>>(id: number, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getSong>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getSong>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetSongQueryResult = NonNullable<Awaited<ReturnType<typeof getSong>>>;
export type GetSongQueryError = ErrorType<ErrorResponse>;
/**
 * @summary Get a single song
 */
export declare function useGetSong<TData = Awaited<ReturnType<typeof getSong>>, TError = ErrorType<ErrorResponse>>(id: number, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getSong>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Update song metadata (admin only)
 */
export declare const getUpdateSongUrl: (id: number) => string;
export declare const updateSong: (id: number, updateSongBody: UpdateSongBody, options?: RequestInit) => Promise<Song>;
export declare const getUpdateSongMutationOptions: <TError = ErrorType<ErrorResponse>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateSong>>, TError, {
        id: number;
        data: BodyType<UpdateSongBody>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof updateSong>>, TError, {
    id: number;
    data: BodyType<UpdateSongBody>;
}, TContext>;
export type UpdateSongMutationResult = NonNullable<Awaited<ReturnType<typeof updateSong>>>;
export type UpdateSongMutationBody = BodyType<UpdateSongBody>;
export type UpdateSongMutationError = ErrorType<ErrorResponse>;
/**
 * @summary Update song metadata (admin only)
 */
export declare const useUpdateSong: <TError = ErrorType<ErrorResponse>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateSong>>, TError, {
        id: number;
        data: BodyType<UpdateSongBody>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof updateSong>>, TError, {
    id: number;
    data: BodyType<UpdateSongBody>;
}, TContext>;
/**
 * @summary Delete a song (admin only)
 */
export declare const getDeleteSongUrl: (id: number) => string;
export declare const deleteSong: (id: number, options?: RequestInit) => Promise<void>;
export declare const getDeleteSongMutationOptions: <TError = ErrorType<ErrorResponse>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof deleteSong>>, TError, {
        id: number;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof deleteSong>>, TError, {
    id: number;
}, TContext>;
export type DeleteSongMutationResult = NonNullable<Awaited<ReturnType<typeof deleteSong>>>;
export type DeleteSongMutationError = ErrorType<ErrorResponse>;
/**
 * @summary Delete a song (admin only)
 */
export declare const useDeleteSong: <TError = ErrorType<ErrorResponse>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof deleteSong>>, TError, {
        id: number;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof deleteSong>>, TError, {
    id: number;
}, TContext>;
/**
 * @summary Record a play for a song
 */
export declare const getRecordPlayUrl: (id: number) => string;
export declare const recordPlay: (id: number, recordPlayBody: RecordPlayBody, options?: RequestInit) => Promise<PlayResult>;
export declare const getRecordPlayMutationOptions: <TError = ErrorType<ErrorResponse>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof recordPlay>>, TError, {
        id: number;
        data: BodyType<RecordPlayBody>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof recordPlay>>, TError, {
    id: number;
    data: BodyType<RecordPlayBody>;
}, TContext>;
export type RecordPlayMutationResult = NonNullable<Awaited<ReturnType<typeof recordPlay>>>;
export type RecordPlayMutationBody = BodyType<RecordPlayBody>;
export type RecordPlayMutationError = ErrorType<ErrorResponse>;
/**
 * @summary Record a play for a song
 */
export declare const useRecordPlay: <TError = ErrorType<ErrorResponse>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof recordPlay>>, TError, {
        id: number;
        data: BodyType<RecordPlayBody>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof recordPlay>>, TError, {
    id: number;
    data: BodyType<RecordPlayBody>;
}, TContext>;
/**
 * @summary Get comments for a song
 */
export declare const getGetCommentsUrl: (id: number) => string;
export declare const getComments: (id: number, options?: RequestInit) => Promise<Comment[]>;
export declare const getGetCommentsQueryKey: (id: number) => readonly [`/api/songs/${number}/comments`];
export declare const getGetCommentsQueryOptions: <TData = Awaited<ReturnType<typeof getComments>>, TError = ErrorType<unknown>>(id: number, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getComments>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getComments>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetCommentsQueryResult = NonNullable<Awaited<ReturnType<typeof getComments>>>;
export type GetCommentsQueryError = ErrorType<unknown>;
/**
 * @summary Get comments for a song
 */
export declare function useGetComments<TData = Awaited<ReturnType<typeof getComments>>, TError = ErrorType<unknown>>(id: number, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getComments>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Post a comment on a song
 */
export declare const getCreateCommentUrl: (id: number) => string;
export declare const createComment: (id: number, createCommentBody: CreateCommentBody, options?: RequestInit) => Promise<Comment>;
export declare const getCreateCommentMutationOptions: <TError = ErrorType<ErrorResponse>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createComment>>, TError, {
        id: number;
        data: BodyType<CreateCommentBody>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof createComment>>, TError, {
    id: number;
    data: BodyType<CreateCommentBody>;
}, TContext>;
export type CreateCommentMutationResult = NonNullable<Awaited<ReturnType<typeof createComment>>>;
export type CreateCommentMutationBody = BodyType<CreateCommentBody>;
export type CreateCommentMutationError = ErrorType<ErrorResponse>;
/**
 * @summary Post a comment on a song
 */
export declare const useCreateComment: <TError = ErrorType<ErrorResponse>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createComment>>, TError, {
        id: number;
        data: BodyType<CreateCommentBody>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof createComment>>, TError, {
    id: number;
    data: BodyType<CreateCommentBody>;
}, TContext>;
/**
 * @summary Delete a comment (admin only)
 */
export declare const getDeleteCommentUrl: (id: number) => string;
export declare const deleteComment: (id: number, options?: RequestInit) => Promise<void>;
export declare const getDeleteCommentMutationOptions: <TError = ErrorType<ErrorResponse>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof deleteComment>>, TError, {
        id: number;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof deleteComment>>, TError, {
    id: number;
}, TContext>;
export type DeleteCommentMutationResult = NonNullable<Awaited<ReturnType<typeof deleteComment>>>;
export type DeleteCommentMutationError = ErrorType<ErrorResponse>;
/**
 * @summary Delete a comment (admin only)
 */
export declare const useDeleteComment: <TError = ErrorType<ErrorResponse>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof deleteComment>>, TError, {
        id: number;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof deleteComment>>, TError, {
    id: number;
}, TContext>;
/**
 * @summary Get top 10 trending songs this week
 */
export declare const getGetTrendingUrl: () => string;
export declare const getTrending: (options?: RequestInit) => Promise<TrendingSong[]>;
export declare const getGetTrendingQueryKey: () => readonly ["/api/analytics/trending"];
export declare const getGetTrendingQueryOptions: <TData = Awaited<ReturnType<typeof getTrending>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getTrending>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getTrending>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetTrendingQueryResult = NonNullable<Awaited<ReturnType<typeof getTrending>>>;
export type GetTrendingQueryError = ErrorType<unknown>;
/**
 * @summary Get top 10 trending songs this week
 */
export declare function useGetTrending<TData = Awaited<ReturnType<typeof getTrending>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getTrending>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Get overall analytics (admin only)
 */
export declare const getGetAnalyticsOverviewUrl: () => string;
export declare const getAnalyticsOverview: (options?: RequestInit) => Promise<AnalyticsOverview>;
export declare const getGetAnalyticsOverviewQueryKey: () => readonly ["/api/analytics/overview"];
export declare const getGetAnalyticsOverviewQueryOptions: <TData = Awaited<ReturnType<typeof getAnalyticsOverview>>, TError = ErrorType<ErrorResponse>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getAnalyticsOverview>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getAnalyticsOverview>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetAnalyticsOverviewQueryResult = NonNullable<Awaited<ReturnType<typeof getAnalyticsOverview>>>;
export type GetAnalyticsOverviewQueryError = ErrorType<ErrorResponse>;
/**
 * @summary Get overall analytics (admin only)
 */
export declare function useGetAnalyticsOverview<TData = Awaited<ReturnType<typeof getAnalyticsOverview>>, TError = ErrorType<ErrorResponse>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getAnalyticsOverview>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Get all-time top played songs
 */
export declare const getGetTopSongsUrl: () => string;
export declare const getTopSongs: (options?: RequestInit) => Promise<TrendingSong[]>;
export declare const getGetTopSongsQueryKey: () => readonly ["/api/analytics/top-songs"];
export declare const getGetTopSongsQueryOptions: <TData = Awaited<ReturnType<typeof getTopSongs>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getTopSongs>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getTopSongs>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetTopSongsQueryResult = NonNullable<Awaited<ReturnType<typeof getTopSongs>>>;
export type GetTopSongsQueryError = ErrorType<unknown>;
/**
 * @summary Get all-time top played songs
 */
export declare function useGetTopSongs<TData = Awaited<ReturnType<typeof getTopSongs>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getTopSongs>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Admin login
 */
export declare const getAdminLoginUrl: () => string;
export declare const adminLogin: (adminLoginBody: AdminLoginBody, options?: RequestInit) => Promise<AdminLoginResponse>;
export declare const getAdminLoginMutationOptions: <TError = ErrorType<ErrorResponse>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof adminLogin>>, TError, {
        data: BodyType<AdminLoginBody>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof adminLogin>>, TError, {
    data: BodyType<AdminLoginBody>;
}, TContext>;
export type AdminLoginMutationResult = NonNullable<Awaited<ReturnType<typeof adminLogin>>>;
export type AdminLoginMutationBody = BodyType<AdminLoginBody>;
export type AdminLoginMutationError = ErrorType<ErrorResponse>;
/**
 * @summary Admin login
 */
export declare const useAdminLogin: <TError = ErrorType<ErrorResponse>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof adminLogin>>, TError, {
        data: BodyType<AdminLoginBody>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof adminLogin>>, TError, {
    data: BodyType<AdminLoginBody>;
}, TContext>;
/**
 * @summary Admin logout
 */
export declare const getAdminLogoutUrl: () => string;
export declare const adminLogout: (options?: RequestInit) => Promise<SuccessResponse>;
export declare const getAdminLogoutMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof adminLogout>>, TError, void, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof adminLogout>>, TError, void, TContext>;
export type AdminLogoutMutationResult = NonNullable<Awaited<ReturnType<typeof adminLogout>>>;
export type AdminLogoutMutationError = ErrorType<unknown>;
/**
 * @summary Admin logout
 */
export declare const useAdminLogout: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof adminLogout>>, TError, void, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof adminLogout>>, TError, void, TContext>;
/**
 * @summary Get current admin session
 */
export declare const getGetAdminMeUrl: () => string;
export declare const getAdminMe: (options?: RequestInit) => Promise<AdminSession>;
export declare const getGetAdminMeQueryKey: () => readonly ["/api/admin/me"];
export declare const getGetAdminMeQueryOptions: <TData = Awaited<ReturnType<typeof getAdminMe>>, TError = ErrorType<ErrorResponse>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getAdminMe>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getAdminMe>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetAdminMeQueryResult = NonNullable<Awaited<ReturnType<typeof getAdminMe>>>;
export type GetAdminMeQueryError = ErrorType<ErrorResponse>;
/**
 * @summary Get current admin session
 */
export declare function useGetAdminMe<TData = Awaited<ReturnType<typeof getAdminMe>>, TError = ErrorType<ErrorResponse>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getAdminMe>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary List all comments for moderation (admin only)
 */
export declare const getListAllCommentsUrl: () => string;
export declare const listAllComments: (options?: RequestInit) => Promise<CommentWithSong[]>;
export declare const getListAllCommentsQueryKey: () => readonly ["/api/admin/comments"];
export declare const getListAllCommentsQueryOptions: <TData = Awaited<ReturnType<typeof listAllComments>>, TError = ErrorType<ErrorResponse>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listAllComments>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof listAllComments>>, TError, TData> & {
    queryKey: QueryKey;
};
export type ListAllCommentsQueryResult = NonNullable<Awaited<ReturnType<typeof listAllComments>>>;
export type ListAllCommentsQueryError = ErrorType<ErrorResponse>;
/**
 * @summary List all comments for moderation (admin only)
 */
export declare function useListAllComments<TData = Awaited<ReturnType<typeof listAllComments>>, TError = ErrorType<ErrorResponse>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listAllComments>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Upload a new song with audio file (admin only)
 */
export declare const getUploadSongUrl: () => string;
export declare const uploadSong: (uploadSongBody: UploadSongBody, options?: RequestInit) => Promise<Song>;
export declare const getUploadSongMutationOptions: <TError = ErrorType<ErrorResponse>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof uploadSong>>, TError, {
        data: BodyType<UploadSongBody>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof uploadSong>>, TError, {
    data: BodyType<UploadSongBody>;
}, TContext>;
export type UploadSongMutationResult = NonNullable<Awaited<ReturnType<typeof uploadSong>>>;
export type UploadSongMutationBody = BodyType<UploadSongBody>;
export type UploadSongMutationError = ErrorType<ErrorResponse>;
/**
 * @summary Upload a new song with audio file (admin only)
 */
export declare const useUploadSong: <TError = ErrorType<ErrorResponse>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof uploadSong>>, TError, {
        data: BodyType<UploadSongBody>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof uploadSong>>, TError, {
    data: BodyType<UploadSongBody>;
}, TContext>;
/**
 * @summary Upload a cover image for a mixtape (admin only)
 */
export declare const getUploadCoverUrl: () => string;
export declare const uploadCover: (uploadCoverBody: UploadCoverBody, options?: RequestInit) => Promise<UploadResult>;
export declare const getUploadCoverMutationOptions: <TError = ErrorType<ErrorResponse>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof uploadCover>>, TError, {
        data: BodyType<UploadCoverBody>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof uploadCover>>, TError, {
    data: BodyType<UploadCoverBody>;
}, TContext>;
export type UploadCoverMutationResult = NonNullable<Awaited<ReturnType<typeof uploadCover>>>;
export type UploadCoverMutationBody = BodyType<UploadCoverBody>;
export type UploadCoverMutationError = ErrorType<ErrorResponse>;
/**
 * @summary Upload a cover image for a mixtape (admin only)
 */
export declare const useUploadCover: <TError = ErrorType<ErrorResponse>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof uploadCover>>, TError, {
        data: BodyType<UploadCoverBody>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof uploadCover>>, TError, {
    data: BodyType<UploadCoverBody>;
}, TContext>;
export {};
//# sourceMappingURL=api.d.ts.map