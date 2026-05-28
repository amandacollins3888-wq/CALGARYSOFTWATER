import type { QueryKey, UseMutationOptions, UseMutationResult, UseQueryOptions, UseQueryResult } from '@tanstack/react-query';
import type { BlogPost, ContactInput, ContactSubmission, Faq, HealthStatus, ListFaqsParams, ListProductsParams, Product, QuoteInput, QuoteSubmission, SiteStats, Testimonial } from './api.schemas';
import { customFetch } from '../custom-fetch';
import type { ErrorType, BodyType } from '../custom-fetch';
type AwaitedInput<T> = PromiseLike<T> | T;
type Awaited<O> = O extends AwaitedInput<infer T> ? T : never;
type SecondParameter<T extends (...args: never) => unknown> = Parameters<T>[1];
export declare const getHealthCheckUrl: () => string;
/**
 * Returns server health status
 * @summary Health check
 */
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
export declare const getSubmitContactUrl: () => string;
/**
 * Submit a contact form message and trigger auto email reply
 * @summary Submit contact form
 */
export declare const submitContact: (contactInput: ContactInput, options?: RequestInit) => Promise<ContactSubmission>;
export declare const getSubmitContactMutationOptions: <TError = ErrorType<void>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof submitContact>>, TError, {
        data: BodyType<ContactInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof submitContact>>, TError, {
    data: BodyType<ContactInput>;
}, TContext>;
export type SubmitContactMutationResult = NonNullable<Awaited<ReturnType<typeof submitContact>>>;
export type SubmitContactMutationBody = BodyType<ContactInput>;
export type SubmitContactMutationError = ErrorType<void>;
/**
* @summary Submit contact form
*/
export declare const useSubmitContact: <TError = ErrorType<void>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof submitContact>>, TError, {
        data: BodyType<ContactInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof submitContact>>, TError, {
    data: BodyType<ContactInput>;
}, TContext>;
export declare const getRequestQuoteUrl: () => string;
/**
 * Submit a quote request for water treatment services
 * @summary Request a free quote
 */
export declare const requestQuote: (quoteInput: QuoteInput, options?: RequestInit) => Promise<QuoteSubmission>;
export declare const getRequestQuoteMutationOptions: <TError = ErrorType<void>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof requestQuote>>, TError, {
        data: BodyType<QuoteInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof requestQuote>>, TError, {
    data: BodyType<QuoteInput>;
}, TContext>;
export type RequestQuoteMutationResult = NonNullable<Awaited<ReturnType<typeof requestQuote>>>;
export type RequestQuoteMutationBody = BodyType<QuoteInput>;
export type RequestQuoteMutationError = ErrorType<void>;
/**
* @summary Request a free quote
*/
export declare const useRequestQuote: <TError = ErrorType<void>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof requestQuote>>, TError, {
        data: BodyType<QuoteInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof requestQuote>>, TError, {
    data: BodyType<QuoteInput>;
}, TContext>;
export declare const getListQuotesUrl: () => string;
/**
 * @summary List all quote requests (admin)
 */
export declare const listQuotes: (options?: RequestInit) => Promise<QuoteSubmission[]>;
export declare const getListQuotesQueryKey: () => readonly ["/api/quotes"];
export declare const getListQuotesQueryOptions: <TData = Awaited<ReturnType<typeof listQuotes>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listQuotes>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof listQuotes>>, TError, TData> & {
    queryKey: QueryKey;
};
export type ListQuotesQueryResult = NonNullable<Awaited<ReturnType<typeof listQuotes>>>;
export type ListQuotesQueryError = ErrorType<unknown>;
/**
 * @summary List all quote requests (admin)
 */
export declare function useListQuotes<TData = Awaited<ReturnType<typeof listQuotes>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listQuotes>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getListTestimonialsUrl: () => string;
/**
 * @summary List customer testimonials
 */
export declare const listTestimonials: (options?: RequestInit) => Promise<Testimonial[]>;
export declare const getListTestimonialsQueryKey: () => readonly ["/api/testimonials"];
export declare const getListTestimonialsQueryOptions: <TData = Awaited<ReturnType<typeof listTestimonials>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listTestimonials>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof listTestimonials>>, TError, TData> & {
    queryKey: QueryKey;
};
export type ListTestimonialsQueryResult = NonNullable<Awaited<ReturnType<typeof listTestimonials>>>;
export type ListTestimonialsQueryError = ErrorType<unknown>;
/**
 * @summary List customer testimonials
 */
export declare function useListTestimonials<TData = Awaited<ReturnType<typeof listTestimonials>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listTestimonials>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getListProductsUrl: (params?: ListProductsParams) => string;
/**
 * @summary List products and services
 */
export declare const listProducts: (params?: ListProductsParams, options?: RequestInit) => Promise<Product[]>;
export declare const getListProductsQueryKey: (params?: ListProductsParams) => readonly ["/api/products", ...ListProductsParams[]];
export declare const getListProductsQueryOptions: <TData = Awaited<ReturnType<typeof listProducts>>, TError = ErrorType<unknown>>(params?: ListProductsParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listProducts>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof listProducts>>, TError, TData> & {
    queryKey: QueryKey;
};
export type ListProductsQueryResult = NonNullable<Awaited<ReturnType<typeof listProducts>>>;
export type ListProductsQueryError = ErrorType<unknown>;
/**
 * @summary List products and services
 */
export declare function useListProducts<TData = Awaited<ReturnType<typeof listProducts>>, TError = ErrorType<unknown>>(params?: ListProductsParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listProducts>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getGetProductUrl: (id: number) => string;
/**
 * @summary Get a single product
 */
export declare const getProduct: (id: number, options?: RequestInit) => Promise<Product>;
export declare const getGetProductQueryKey: (id: number) => readonly [`/api/products/${number}`];
export declare const getGetProductQueryOptions: <TData = Awaited<ReturnType<typeof getProduct>>, TError = ErrorType<void>>(id: number, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getProduct>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getProduct>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetProductQueryResult = NonNullable<Awaited<ReturnType<typeof getProduct>>>;
export type GetProductQueryError = ErrorType<void>;
/**
 * @summary Get a single product
 */
export declare function useGetProduct<TData = Awaited<ReturnType<typeof getProduct>>, TError = ErrorType<void>>(id: number, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getProduct>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getListFaqsUrl: (params?: ListFaqsParams) => string;
/**
 * @summary List frequently asked questions
 */
export declare const listFaqs: (params?: ListFaqsParams, options?: RequestInit) => Promise<Faq[]>;
export declare const getListFaqsQueryKey: (params?: ListFaqsParams) => readonly ["/api/faqs", ...ListFaqsParams[]];
export declare const getListFaqsQueryOptions: <TData = Awaited<ReturnType<typeof listFaqs>>, TError = ErrorType<unknown>>(params?: ListFaqsParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listFaqs>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof listFaqs>>, TError, TData> & {
    queryKey: QueryKey;
};
export type ListFaqsQueryResult = NonNullable<Awaited<ReturnType<typeof listFaqs>>>;
export type ListFaqsQueryError = ErrorType<unknown>;
/**
 * @summary List frequently asked questions
 */
export declare function useListFaqs<TData = Awaited<ReturnType<typeof listFaqs>>, TError = ErrorType<unknown>>(params?: ListFaqsParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listFaqs>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getListBlogPostsUrl: () => string;
/**
 * @summary List blog posts
 */
export declare const listBlogPosts: (options?: RequestInit) => Promise<BlogPost[]>;
export declare const getListBlogPostsQueryKey: () => readonly ["/api/blog-posts"];
export declare const getListBlogPostsQueryOptions: <TData = Awaited<ReturnType<typeof listBlogPosts>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listBlogPosts>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof listBlogPosts>>, TError, TData> & {
    queryKey: QueryKey;
};
export type ListBlogPostsQueryResult = NonNullable<Awaited<ReturnType<typeof listBlogPosts>>>;
export type ListBlogPostsQueryError = ErrorType<unknown>;
/**
 * @summary List blog posts
 */
export declare function useListBlogPosts<TData = Awaited<ReturnType<typeof listBlogPosts>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listBlogPosts>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getGetBlogPostUrl: (id: number) => string;
/**
 * @summary Get a single blog post
 */
export declare const getBlogPost: (id: number, options?: RequestInit) => Promise<BlogPost>;
export declare const getGetBlogPostQueryKey: (id: number) => readonly [`/api/blog-posts/${number}`];
export declare const getGetBlogPostQueryOptions: <TData = Awaited<ReturnType<typeof getBlogPost>>, TError = ErrorType<void>>(id: number, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getBlogPost>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getBlogPost>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetBlogPostQueryResult = NonNullable<Awaited<ReturnType<typeof getBlogPost>>>;
export type GetBlogPostQueryError = ErrorType<void>;
/**
 * @summary Get a single blog post
 */
export declare function useGetBlogPost<TData = Awaited<ReturnType<typeof getBlogPost>>, TError = ErrorType<void>>(id: number, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getBlogPost>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getGetSiteStatsUrl: () => string;
/**
 * @summary Get site stats for homepage (happy customers, years experience, etc.)
 */
export declare const getSiteStats: (options?: RequestInit) => Promise<SiteStats>;
export declare const getGetSiteStatsQueryKey: () => readonly ["/api/stats"];
export declare const getGetSiteStatsQueryOptions: <TData = Awaited<ReturnType<typeof getSiteStats>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getSiteStats>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getSiteStats>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetSiteStatsQueryResult = NonNullable<Awaited<ReturnType<typeof getSiteStats>>>;
export type GetSiteStatsQueryError = ErrorType<unknown>;
/**
 * @summary Get site stats for homepage (happy customers, years experience, etc.)
 */
export declare function useGetSiteStats<TData = Awaited<ReturnType<typeof getSiteStats>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getSiteStats>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export {};
//# sourceMappingURL=api.d.ts.map