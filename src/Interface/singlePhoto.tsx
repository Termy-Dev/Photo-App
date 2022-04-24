export interface Urls {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
    small_s3: string;
}

export interface Links {
    self: string;
    html: string;
    download: string;
    download_location: string;
}

export interface Links2 {
    self: string;
    html: string;
    photos: string;
    likes: string;
    portfolio: string;
    following: string;
    followers: string;
}

export interface ProfileImage {
    small: string;
    medium: string;
    large: string;
}

export interface Social {
    instagram_username?: any;
    portfolio_url: string;
    twitter_username: string;
    paypal_email?: any;
}

export interface Sponsor {
    id: string;
    updated_at: Date;
    username: string;
    name: string;
    first_name: string;
    last_name?: any;
    twitter_username: string;
    portfolio_url: string;
    bio: string;
    location?: any;
    links: Links2;
    profile_image: ProfileImage;
    instagram_username?: any;
    total_collections: number;
    total_likes: number;
    total_photos: number;
    accepted_tos: boolean;
    for_hire: boolean;
    social: Social;
}

export interface Sponsorship {
    impression_urls: string[];
    tagline: string;
    tagline_url: string;
    sponsor: Sponsor;
}

export interface TopicSubmissions {
}

export interface Links3 {
    self: string;
    html: string;
    photos: string;
    likes: string;
    portfolio: string;
    following: string;
    followers: string;
}

export interface ProfileImage2 {
    small: string;
    medium: string;
    large: string;
}

export interface Social2 {
    instagram_username?: any;
    portfolio_url: string;
    twitter_username: string;
    paypal_email?: any;
}

export interface User {
    id: string;
    updated_at: Date;
    username: string;
    name: string;
    first_name: string;
    last_name?: any;
    twitter_username: string;
    portfolio_url: string;
    bio: string;
    location?: any;
    links: Links3;
    profile_image: ProfileImage2;
    instagram_username?: any;
    total_collections: number;
    total_likes: number;
    total_photos: number;
    accepted_tos: boolean;
    for_hire: boolean;
    social: Social2;
}

export interface Exif {
    make?: any;
    model?: any;
    name?: any;
    exposure_time?: any;
    aperture?: any;
    focal_length?: any;
    iso?: any;
}

export interface Position {
    latitude?: any;
    longitude?: any;
}

export interface Location {
    title: string;
    name: string;
    city?: any;
    country?: any;
    position: Position;
}

export interface Meta {
    index: boolean;
}

export interface Type {
    slug: string;
    pretty_slug: string;
}

export interface Category {
    slug: string;
    pretty_slug: string;
}

export interface Subcategory {
    slug: string;
    pretty_slug: string;
}

export interface Ancestry {
    type: Type;
    category: Category;
    subcategory: Subcategory;
}

export interface Urls2 {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
    small_s3: string;
}

export interface Links4 {
    self: string;
    html: string;
    download: string;
    download_location: string;
}

export interface TexturesPatterns {
    status: string;
    approved_on: Date;
}

export interface Nature {
    status: string;
    approved_on: Date;
}

export interface Wallpapers {
    status: string;
    approved_on: Date;
}

export interface Architecture {
    status: string;
    approved_on: Date;
}

export interface TopicSubmissions2 {
    'textures-patterns': TexturesPatterns;
    nature: Nature;
    wallpapers: Wallpapers;
    architecture: Architecture;
}

export interface Links5 {
    self: string;
    html: string;
    photos: string;
    likes: string;
    portfolio: string;
    following: string;
    followers: string;
}

export interface ProfileImage3 {
    small: string;
    medium: string;
    large: string;
}

export interface Social3 {
    instagram_username: string;
    portfolio_url: string;
    twitter_username: string;
    paypal_email?: any;
}

export interface User2 {
    id: string;
    updated_at: Date;
    username: string;
    name: string;
    first_name: string;
    last_name: string;
    twitter_username: string;
    portfolio_url: string;
    bio: string;
    location: string;
    links: Links5;
    profile_image: ProfileImage3;
    instagram_username: string;
    total_collections: number;
    total_likes: number;
    total_photos: number;
    accepted_tos: boolean;
    for_hire: boolean;
    social: Social3;
}

export interface CoverPhoto {
    id: string;
    created_at: Date;
    updated_at: Date;
    promoted_at?: Date;
    width: number;
    height: number;
    color: string;
    blur_hash: string;
    description: string;
    alt_description: string;
    urls: Urls2;
    links: Links4;
    categories: any[];
    likes: number;
    liked_by_user: boolean;
    current_user_collections: any[];
    sponsorship?: any;
    topic_submissions: TopicSubmissions2;
    user: User2;
}

export interface Source {
    ancestry: Ancestry;
    title: string;
    subtitle: string;
    description: string;
    meta_title: string;
    meta_description: string;
    cover_photo: CoverPhoto;
}

export interface Tag {
    type: string;
    title: string;
    source: Source;
}

export interface Links6 {
    self: string;
    html: string;
    photos: string;
    related: string;
}

export interface Links7 {
    self: string;
    html: string;
    photos: string;
    likes: string;
    portfolio: string;
    following: string;
    followers: string;
}

export interface ProfileImage4 {
    small: string;
    medium: string;
    large: string;
}

export interface Social4 {
    instagram_username?: any;
    portfolio_url?: any;
    twitter_username?: any;
    paypal_email?: any;
}

export interface User3 {
    id: string;
    updated_at: Date;
    username: string;
    name: string;
    first_name: string;
    last_name: string;
    twitter_username?: any;
    portfolio_url?: any;
    bio?: any;
    location?: any;
    links: Links7;
    profile_image: ProfileImage4;
    instagram_username?: any;
    total_collections: number;
    total_likes: number;
    total_photos: number;
    accepted_tos: boolean;
    for_hire: boolean;
    social: Social4;
}

export interface Urls3 {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
    small_s3: string;
}

export interface Links8 {
    self: string;
    html: string;
    download: string;
    download_location: string;
}

export interface Travel {
    status: string;
    approved_on: Date;
}

export interface TopicSubmissions3 {
    travel: Travel;
}

export interface Links9 {
    self: string;
    html: string;
    photos: string;
    likes: string;
    portfolio: string;
    following: string;
    followers: string;
}

export interface ProfileImage5 {
    small: string;
    medium: string;
    large: string;
}

export interface Social5 {
    instagram_username: string;
    portfolio_url: string;
    twitter_username: string;
    paypal_email?: any;
}

export interface User4 {
    id: string;
    updated_at: Date;
    username: string;
    name: string;
    first_name: string;
    last_name: string;
    twitter_username: string;
    portfolio_url: string;
    bio: string;
    location: string;
    links: Links9;
    profile_image: ProfileImage5;
    instagram_username: string;
    total_collections: number;
    total_likes: number;
    total_photos: number;
    accepted_tos: boolean;
    for_hire: boolean;
    social: Social5;
}

export interface CoverPhoto2 {
    id: string;
    created_at: Date;
    updated_at: Date;
    promoted_at?: any;
    width: number;
    height: number;
    color: string;
    blur_hash: string;
    description: string;
    alt_description: string;
    urls: Urls3;
    links: Links8;
    categories: any[];
    likes: number;
    liked_by_user: boolean;
    current_user_collections: any[];
    sponsorship?: any;
    topic_submissions: TopicSubmissions3;
    user: User4;
}

export interface Urls4 {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
    small_s3: string;
}

export interface PreviewPhoto {
    id: string;
    created_at: Date;
    updated_at: Date;
    blur_hash: string;
    urls: Urls4;
}

export interface Result {
    id: string;
    title: string;
    description?: any;
    published_at: Date;
    last_collected_at: Date;
    updated_at: Date;
    curated: boolean;
    featured: boolean;
    total_photos: number;
    private: boolean;
    share_key: string;
    tags: Tag[];
    links: Links6;
    user: User3;
    cover_photo: CoverPhoto2;
    preview_photos: PreviewPhoto[];
}

export interface RelatedCollections {
    total: number;
    type: string;
    results: Result[];
}

export interface SinglePhotoInterface {
    id: string;
    created_at: Date;
    updated_at: Date;
    promoted_at?: any;
    width: number;
    height: number;
    color: string;
    blur_hash: string;
    description?: any;
    alt_description: string;
    urls: Urls;
    links: Links;
    categories: any[];
    likes: number;
    liked_by_user: boolean;
    current_user_collections: any[];
    sponsorship: Sponsorship;
    topic_submissions: TopicSubmissions;
    user: User;
    exif: Exif;
    location: Location;
    meta: Meta;
    public_domain: boolean;
    tags: any[];
    tags_preview: any[];
    related_collections: RelatedCollections;
    views: number;
    downloads: number;
    topics: any[];
}
