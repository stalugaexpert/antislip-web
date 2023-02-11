/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core'
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any
  /** A string used to identify an i18n locale */
  I18NLocaleCode: any
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any
  /** The `Upload` scalar type represents a file upload. */
  Upload: any
}

export type Blog = {
  __typename?: 'Blog'
  SEO: ComponentSharedSeo
  author: Scalars['String']
  content: Scalars['String']
  createdAt?: Maybe<Scalars['DateTime']>
  isFromSmartFloor: Scalars['Boolean']
  locale?: Maybe<Scalars['String']>
  localizations?: Maybe<BlogRelationResponseCollection>
  postImage: UploadFileEntityResponse
  publishedAt?: Maybe<Scalars['DateTime']>
  slug: Scalars['String']
  title: Scalars['String']
  updatedAt?: Maybe<Scalars['DateTime']>
}

export type BlogLocalizationsArgs = {
  filters?: InputMaybe<BlogFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  publicationState?: InputMaybe<PublicationState>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type BlogEntity = {
  __typename?: 'BlogEntity'
  attributes?: Maybe<Blog>
  id?: Maybe<Scalars['ID']>
}

export type BlogEntityResponse = {
  __typename?: 'BlogEntityResponse'
  data?: Maybe<BlogEntity>
}

export type BlogEntityResponseCollection = {
  __typename?: 'BlogEntityResponseCollection'
  data: Array<BlogEntity>
  meta: ResponseCollectionMeta
}

export type BlogFiltersInput = {
  SEO?: InputMaybe<ComponentSharedSeoFiltersInput>
  and?: InputMaybe<Array<InputMaybe<BlogFiltersInput>>>
  author?: InputMaybe<StringFilterInput>
  content?: InputMaybe<StringFilterInput>
  createdAt?: InputMaybe<DateTimeFilterInput>
  id?: InputMaybe<IdFilterInput>
  isFromSmartFloor?: InputMaybe<BooleanFilterInput>
  locale?: InputMaybe<StringFilterInput>
  localizations?: InputMaybe<BlogFiltersInput>
  not?: InputMaybe<BlogFiltersInput>
  or?: InputMaybe<Array<InputMaybe<BlogFiltersInput>>>
  publishedAt?: InputMaybe<DateTimeFilterInput>
  slug?: InputMaybe<StringFilterInput>
  title?: InputMaybe<StringFilterInput>
  updatedAt?: InputMaybe<DateTimeFilterInput>
}

export type BlogInput = {
  SEO?: InputMaybe<ComponentSharedSeoInput>
  author?: InputMaybe<Scalars['String']>
  content?: InputMaybe<Scalars['String']>
  isFromSmartFloor?: InputMaybe<Scalars['Boolean']>
  postImage?: InputMaybe<Scalars['ID']>
  publishedAt?: InputMaybe<Scalars['DateTime']>
  slug?: InputMaybe<Scalars['String']>
  title?: InputMaybe<Scalars['String']>
}

export type BlogRelationResponseCollection = {
  __typename?: 'BlogRelationResponseCollection'
  data: Array<BlogEntity>
}

export type BooleanFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>
  between?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>
  contains?: InputMaybe<Scalars['Boolean']>
  containsi?: InputMaybe<Scalars['Boolean']>
  endsWith?: InputMaybe<Scalars['Boolean']>
  eq?: InputMaybe<Scalars['Boolean']>
  eqi?: InputMaybe<Scalars['Boolean']>
  gt?: InputMaybe<Scalars['Boolean']>
  gte?: InputMaybe<Scalars['Boolean']>
  in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>
  lt?: InputMaybe<Scalars['Boolean']>
  lte?: InputMaybe<Scalars['Boolean']>
  ne?: InputMaybe<Scalars['Boolean']>
  not?: InputMaybe<BooleanFilterInput>
  notContains?: InputMaybe<Scalars['Boolean']>
  notContainsi?: InputMaybe<Scalars['Boolean']>
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>
  notNull?: InputMaybe<Scalars['Boolean']>
  null?: InputMaybe<Scalars['Boolean']>
  or?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>
  startsWith?: InputMaybe<Scalars['Boolean']>
}

export type ComponentSharedMetaSocial = {
  __typename?: 'ComponentSharedMetaSocial'
  description: Scalars['String']
  id: Scalars['ID']
  image?: Maybe<UploadFileEntityResponse>
  socialNetwork: Enum_Componentsharedmetasocial_Socialnetwork
  title: Scalars['String']
}

export type ComponentSharedMetaSocialFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentSharedMetaSocialFiltersInput>>>
  description?: InputMaybe<StringFilterInput>
  not?: InputMaybe<ComponentSharedMetaSocialFiltersInput>
  or?: InputMaybe<Array<InputMaybe<ComponentSharedMetaSocialFiltersInput>>>
  socialNetwork?: InputMaybe<StringFilterInput>
  title?: InputMaybe<StringFilterInput>
}

export type ComponentSharedMetaSocialInput = {
  description?: InputMaybe<Scalars['String']>
  id?: InputMaybe<Scalars['ID']>
  image?: InputMaybe<Scalars['ID']>
  socialNetwork?: InputMaybe<Enum_Componentsharedmetasocial_Socialnetwork>
  title?: InputMaybe<Scalars['String']>
}

export type ComponentSharedSeo = {
  __typename?: 'ComponentSharedSeo'
  canonicalURL?: Maybe<Scalars['String']>
  id: Scalars['ID']
  keywords: Scalars['String']
  metaDescription: Scalars['String']
  metaImage: UploadFileEntityResponse
  metaRobots?: Maybe<Scalars['String']>
  metaSocial?: Maybe<Array<Maybe<ComponentSharedMetaSocial>>>
  metaTitle: Scalars['String']
  metaViewport?: Maybe<Scalars['String']>
  structuredData?: Maybe<Scalars['JSON']>
}

export type ComponentSharedSeoMetaSocialArgs = {
  filters?: InputMaybe<ComponentSharedMetaSocialFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type ComponentSharedSeoFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentSharedSeoFiltersInput>>>
  canonicalURL?: InputMaybe<StringFilterInput>
  keywords?: InputMaybe<StringFilterInput>
  metaDescription?: InputMaybe<StringFilterInput>
  metaRobots?: InputMaybe<StringFilterInput>
  metaSocial?: InputMaybe<ComponentSharedMetaSocialFiltersInput>
  metaTitle?: InputMaybe<StringFilterInput>
  metaViewport?: InputMaybe<StringFilterInput>
  not?: InputMaybe<ComponentSharedSeoFiltersInput>
  or?: InputMaybe<Array<InputMaybe<ComponentSharedSeoFiltersInput>>>
  structuredData?: InputMaybe<JsonFilterInput>
}

export type ComponentSharedSeoInput = {
  canonicalURL?: InputMaybe<Scalars['String']>
  id?: InputMaybe<Scalars['ID']>
  keywords?: InputMaybe<Scalars['String']>
  metaDescription?: InputMaybe<Scalars['String']>
  metaImage?: InputMaybe<Scalars['ID']>
  metaRobots?: InputMaybe<Scalars['String']>
  metaSocial?: InputMaybe<Array<InputMaybe<ComponentSharedMetaSocialInput>>>
  metaTitle?: InputMaybe<Scalars['String']>
  metaViewport?: InputMaybe<Scalars['String']>
  structuredData?: InputMaybe<Scalars['JSON']>
}

export type DateTimeFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  between?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  contains?: InputMaybe<Scalars['DateTime']>
  containsi?: InputMaybe<Scalars['DateTime']>
  endsWith?: InputMaybe<Scalars['DateTime']>
  eq?: InputMaybe<Scalars['DateTime']>
  eqi?: InputMaybe<Scalars['DateTime']>
  gt?: InputMaybe<Scalars['DateTime']>
  gte?: InputMaybe<Scalars['DateTime']>
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  lt?: InputMaybe<Scalars['DateTime']>
  lte?: InputMaybe<Scalars['DateTime']>
  ne?: InputMaybe<Scalars['DateTime']>
  not?: InputMaybe<DateTimeFilterInput>
  notContains?: InputMaybe<Scalars['DateTime']>
  notContainsi?: InputMaybe<Scalars['DateTime']>
  notIn?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  notNull?: InputMaybe<Scalars['Boolean']>
  null?: InputMaybe<Scalars['Boolean']>
  or?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  startsWith?: InputMaybe<Scalars['DateTime']>
}

export type DeeplBatchTranslateJob = {
  __typename?: 'DeeplBatchTranslateJob'
  autoPublish?: Maybe<Scalars['Boolean']>
  contentType?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['DateTime']>
  entityIds?: Maybe<Scalars['JSON']>
  failureReason?: Maybe<Scalars['JSON']>
  progress?: Maybe<Scalars['Float']>
  sourceLocale?: Maybe<Scalars['String']>
  status?: Maybe<Enum_Deeplbatchtranslatejob_Status>
  targetLocale?: Maybe<Scalars['String']>
  updatedAt?: Maybe<Scalars['DateTime']>
}

export type DeeplBatchTranslateJobEntity = {
  __typename?: 'DeeplBatchTranslateJobEntity'
  attributes?: Maybe<DeeplBatchTranslateJob>
  id?: Maybe<Scalars['ID']>
}

export type DeeplBatchTranslateJobEntityResponse = {
  __typename?: 'DeeplBatchTranslateJobEntityResponse'
  data?: Maybe<DeeplBatchTranslateJobEntity>
}

export type DeeplBatchTranslateJobEntityResponseCollection = {
  __typename?: 'DeeplBatchTranslateJobEntityResponseCollection'
  data: Array<DeeplBatchTranslateJobEntity>
  meta: ResponseCollectionMeta
}

export type DeeplBatchTranslateJobFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<DeeplBatchTranslateJobFiltersInput>>>
  autoPublish?: InputMaybe<BooleanFilterInput>
  contentType?: InputMaybe<StringFilterInput>
  createdAt?: InputMaybe<DateTimeFilterInput>
  entityIds?: InputMaybe<JsonFilterInput>
  failureReason?: InputMaybe<JsonFilterInput>
  id?: InputMaybe<IdFilterInput>
  not?: InputMaybe<DeeplBatchTranslateJobFiltersInput>
  or?: InputMaybe<Array<InputMaybe<DeeplBatchTranslateJobFiltersInput>>>
  progress?: InputMaybe<FloatFilterInput>
  sourceLocale?: InputMaybe<StringFilterInput>
  status?: InputMaybe<StringFilterInput>
  targetLocale?: InputMaybe<StringFilterInput>
  updatedAt?: InputMaybe<DateTimeFilterInput>
}

export type DeeplBatchTranslateJobInput = {
  autoPublish?: InputMaybe<Scalars['Boolean']>
  contentType?: InputMaybe<Scalars['String']>
  entityIds?: InputMaybe<Scalars['JSON']>
  failureReason?: InputMaybe<Scalars['JSON']>
  progress?: InputMaybe<Scalars['Float']>
  sourceLocale?: InputMaybe<Scalars['String']>
  status?: InputMaybe<Enum_Deeplbatchtranslatejob_Status>
  targetLocale?: InputMaybe<Scalars['String']>
}

export enum Enum_Componentsharedmetasocial_Socialnetwork {
  Facebook = 'Facebook',
  Twitter = 'Twitter',
}

export enum Enum_Deeplbatchtranslatejob_Status {
  Cancelled = 'cancelled',
  Created = 'created',
  Failed = 'failed',
  Finished = 'finished',
  Paused = 'paused',
  Running = 'running',
  Setup = 'setup',
}

export type FileInfoInput = {
  alternativeText?: InputMaybe<Scalars['String']>
  caption?: InputMaybe<Scalars['String']>
  name?: InputMaybe<Scalars['String']>
}

export type FloatFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>
  between?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>
  contains?: InputMaybe<Scalars['Float']>
  containsi?: InputMaybe<Scalars['Float']>
  endsWith?: InputMaybe<Scalars['Float']>
  eq?: InputMaybe<Scalars['Float']>
  eqi?: InputMaybe<Scalars['Float']>
  gt?: InputMaybe<Scalars['Float']>
  gte?: InputMaybe<Scalars['Float']>
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>
  lt?: InputMaybe<Scalars['Float']>
  lte?: InputMaybe<Scalars['Float']>
  ne?: InputMaybe<Scalars['Float']>
  not?: InputMaybe<FloatFilterInput>
  notContains?: InputMaybe<Scalars['Float']>
  notContainsi?: InputMaybe<Scalars['Float']>
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>
  notNull?: InputMaybe<Scalars['Boolean']>
  null?: InputMaybe<Scalars['Boolean']>
  or?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>
  startsWith?: InputMaybe<Scalars['Float']>
}

export type GenericMorph =
  | Blog
  | ComponentSharedMetaSocial
  | ComponentSharedSeo
  | DeeplBatchTranslateJob
  | I18NLocale
  | PrivacyPolicy
  | Realizations
  | Rodo
  | TermsAndConditions
  | UploadFile
  | UploadFolder
  | UsersPermissionsPermission
  | UsersPermissionsRole
  | UsersPermissionsUser

export type I18NLocale = {
  __typename?: 'I18NLocale'
  code?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['DateTime']>
  name?: Maybe<Scalars['String']>
  updatedAt?: Maybe<Scalars['DateTime']>
}

export type I18NLocaleEntity = {
  __typename?: 'I18NLocaleEntity'
  attributes?: Maybe<I18NLocale>
  id?: Maybe<Scalars['ID']>
}

export type I18NLocaleEntityResponse = {
  __typename?: 'I18NLocaleEntityResponse'
  data?: Maybe<I18NLocaleEntity>
}

export type I18NLocaleEntityResponseCollection = {
  __typename?: 'I18NLocaleEntityResponseCollection'
  data: Array<I18NLocaleEntity>
  meta: ResponseCollectionMeta
}

export type I18NLocaleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>
  code?: InputMaybe<StringFilterInput>
  createdAt?: InputMaybe<DateTimeFilterInput>
  id?: InputMaybe<IdFilterInput>
  name?: InputMaybe<StringFilterInput>
  not?: InputMaybe<I18NLocaleFiltersInput>
  or?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>
  updatedAt?: InputMaybe<DateTimeFilterInput>
}

export type IdFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  between?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  contains?: InputMaybe<Scalars['ID']>
  containsi?: InputMaybe<Scalars['ID']>
  endsWith?: InputMaybe<Scalars['ID']>
  eq?: InputMaybe<Scalars['ID']>
  eqi?: InputMaybe<Scalars['ID']>
  gt?: InputMaybe<Scalars['ID']>
  gte?: InputMaybe<Scalars['ID']>
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  lt?: InputMaybe<Scalars['ID']>
  lte?: InputMaybe<Scalars['ID']>
  ne?: InputMaybe<Scalars['ID']>
  not?: InputMaybe<IdFilterInput>
  notContains?: InputMaybe<Scalars['ID']>
  notContainsi?: InputMaybe<Scalars['ID']>
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  notNull?: InputMaybe<Scalars['Boolean']>
  null?: InputMaybe<Scalars['Boolean']>
  or?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  startsWith?: InputMaybe<Scalars['ID']>
}

export type IntFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>
  between?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>
  contains?: InputMaybe<Scalars['Int']>
  containsi?: InputMaybe<Scalars['Int']>
  endsWith?: InputMaybe<Scalars['Int']>
  eq?: InputMaybe<Scalars['Int']>
  eqi?: InputMaybe<Scalars['Int']>
  gt?: InputMaybe<Scalars['Int']>
  gte?: InputMaybe<Scalars['Int']>
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>
  lt?: InputMaybe<Scalars['Int']>
  lte?: InputMaybe<Scalars['Int']>
  ne?: InputMaybe<Scalars['Int']>
  not?: InputMaybe<IntFilterInput>
  notContains?: InputMaybe<Scalars['Int']>
  notContainsi?: InputMaybe<Scalars['Int']>
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>
  notNull?: InputMaybe<Scalars['Boolean']>
  null?: InputMaybe<Scalars['Boolean']>
  or?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>
  startsWith?: InputMaybe<Scalars['Int']>
}

export type JsonFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>
  between?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>
  contains?: InputMaybe<Scalars['JSON']>
  containsi?: InputMaybe<Scalars['JSON']>
  endsWith?: InputMaybe<Scalars['JSON']>
  eq?: InputMaybe<Scalars['JSON']>
  eqi?: InputMaybe<Scalars['JSON']>
  gt?: InputMaybe<Scalars['JSON']>
  gte?: InputMaybe<Scalars['JSON']>
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>
  lt?: InputMaybe<Scalars['JSON']>
  lte?: InputMaybe<Scalars['JSON']>
  ne?: InputMaybe<Scalars['JSON']>
  not?: InputMaybe<JsonFilterInput>
  notContains?: InputMaybe<Scalars['JSON']>
  notContainsi?: InputMaybe<Scalars['JSON']>
  notIn?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>
  notNull?: InputMaybe<Scalars['Boolean']>
  null?: InputMaybe<Scalars['Boolean']>
  or?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>
  startsWith?: InputMaybe<Scalars['JSON']>
}

export type Mutation = {
  __typename?: 'Mutation'
  /** Change user password. Confirm with the current password. */
  changePassword?: Maybe<UsersPermissionsLoginPayload>
  createBlog?: Maybe<BlogEntityResponse>
  createBlogLocalization?: Maybe<BlogEntityResponse>
  createDeeplBatchTranslateJob?: Maybe<DeeplBatchTranslateJobEntityResponse>
  createPrivacyPolicyLocalization?: Maybe<PrivacyPolicyEntityResponse>
  createRealizations?: Maybe<RealizationsEntityResponse>
  createRealizationsLocalization?: Maybe<RealizationsEntityResponse>
  createRodoLocalization?: Maybe<RodoEntityResponse>
  createTermsAndConditionsLocalization?: Maybe<TermsAndConditionsEntityResponse>
  createUploadFile?: Maybe<UploadFileEntityResponse>
  createUploadFolder?: Maybe<UploadFolderEntityResponse>
  /** Create a new role */
  createUsersPermissionsRole?: Maybe<UsersPermissionsCreateRolePayload>
  /** Create a new user */
  createUsersPermissionsUser: UsersPermissionsUserEntityResponse
  deleteBlog?: Maybe<BlogEntityResponse>
  deleteDeeplBatchTranslateJob?: Maybe<DeeplBatchTranslateJobEntityResponse>
  deletePrivacyPolicy?: Maybe<PrivacyPolicyEntityResponse>
  deleteRealizations?: Maybe<RealizationsEntityResponse>
  deleteRodo?: Maybe<RodoEntityResponse>
  deleteTermsAndConditions?: Maybe<TermsAndConditionsEntityResponse>
  deleteUploadFile?: Maybe<UploadFileEntityResponse>
  deleteUploadFolder?: Maybe<UploadFolderEntityResponse>
  /** Delete an existing role */
  deleteUsersPermissionsRole?: Maybe<UsersPermissionsDeleteRolePayload>
  /** Delete an existing user */
  deleteUsersPermissionsUser: UsersPermissionsUserEntityResponse
  /** Confirm an email users email address */
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>
  /** Request a reset password token */
  forgotPassword?: Maybe<UsersPermissionsPasswordPayload>
  login: UsersPermissionsLoginPayload
  multipleUpload: Array<Maybe<UploadFileEntityResponse>>
  /** Register a user */
  register: UsersPermissionsLoginPayload
  removeFile?: Maybe<UploadFileEntityResponse>
  /** Reset user password. Confirm with a code (resetToken from forgotPassword) */
  resetPassword?: Maybe<UsersPermissionsLoginPayload>
  updateBlog?: Maybe<BlogEntityResponse>
  updateDeeplBatchTranslateJob?: Maybe<DeeplBatchTranslateJobEntityResponse>
  updateFileInfo: UploadFileEntityResponse
  updatePrivacyPolicy?: Maybe<PrivacyPolicyEntityResponse>
  updateRealizations?: Maybe<RealizationsEntityResponse>
  updateRodo?: Maybe<RodoEntityResponse>
  updateTermsAndConditions?: Maybe<TermsAndConditionsEntityResponse>
  updateUploadFile?: Maybe<UploadFileEntityResponse>
  updateUploadFolder?: Maybe<UploadFolderEntityResponse>
  /** Update an existing role */
  updateUsersPermissionsRole?: Maybe<UsersPermissionsUpdateRolePayload>
  /** Update an existing user */
  updateUsersPermissionsUser: UsersPermissionsUserEntityResponse
  upload: UploadFileEntityResponse
}

export type MutationChangePasswordArgs = {
  currentPassword: Scalars['String']
  password: Scalars['String']
  passwordConfirmation: Scalars['String']
}

export type MutationCreateBlogArgs = {
  data: BlogInput
  locale?: InputMaybe<Scalars['I18NLocaleCode']>
}

export type MutationCreateBlogLocalizationArgs = {
  data?: InputMaybe<BlogInput>
  id?: InputMaybe<Scalars['ID']>
  locale?: InputMaybe<Scalars['I18NLocaleCode']>
}

export type MutationCreateDeeplBatchTranslateJobArgs = {
  data: DeeplBatchTranslateJobInput
}

export type MutationCreatePrivacyPolicyLocalizationArgs = {
  data?: InputMaybe<PrivacyPolicyInput>
  id?: InputMaybe<Scalars['ID']>
  locale?: InputMaybe<Scalars['I18NLocaleCode']>
}

export type MutationCreateRealizationsArgs = {
  data: RealizationsInput
  locale?: InputMaybe<Scalars['I18NLocaleCode']>
}

export type MutationCreateRealizationsLocalizationArgs = {
  data?: InputMaybe<RealizationsInput>
  id?: InputMaybe<Scalars['ID']>
  locale?: InputMaybe<Scalars['I18NLocaleCode']>
}

export type MutationCreateRodoLocalizationArgs = {
  data?: InputMaybe<RodoInput>
  id?: InputMaybe<Scalars['ID']>
  locale?: InputMaybe<Scalars['I18NLocaleCode']>
}

export type MutationCreateTermsAndConditionsLocalizationArgs = {
  data?: InputMaybe<TermsAndConditionsInput>
  id?: InputMaybe<Scalars['ID']>
  locale?: InputMaybe<Scalars['I18NLocaleCode']>
}

export type MutationCreateUploadFileArgs = {
  data: UploadFileInput
}

export type MutationCreateUploadFolderArgs = {
  data: UploadFolderInput
}

export type MutationCreateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput
}

export type MutationCreateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput
}

export type MutationDeleteBlogArgs = {
  id: Scalars['ID']
  locale?: InputMaybe<Scalars['I18NLocaleCode']>
}

export type MutationDeleteDeeplBatchTranslateJobArgs = {
  id: Scalars['ID']
}

export type MutationDeletePrivacyPolicyArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']>
}

export type MutationDeleteRealizationsArgs = {
  id: Scalars['ID']
  locale?: InputMaybe<Scalars['I18NLocaleCode']>
}

export type MutationDeleteRodoArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']>
}

export type MutationDeleteTermsAndConditionsArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']>
}

export type MutationDeleteUploadFileArgs = {
  id: Scalars['ID']
}

export type MutationDeleteUploadFolderArgs = {
  id: Scalars['ID']
}

export type MutationDeleteUsersPermissionsRoleArgs = {
  id: Scalars['ID']
}

export type MutationDeleteUsersPermissionsUserArgs = {
  id: Scalars['ID']
}

export type MutationEmailConfirmationArgs = {
  confirmation: Scalars['String']
}

export type MutationForgotPasswordArgs = {
  email: Scalars['String']
}

export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput
}

export type MutationMultipleUploadArgs = {
  field?: InputMaybe<Scalars['String']>
  files: Array<InputMaybe<Scalars['Upload']>>
  ref?: InputMaybe<Scalars['String']>
  refId?: InputMaybe<Scalars['ID']>
}

export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput
}

export type MutationRemoveFileArgs = {
  id: Scalars['ID']
}

export type MutationResetPasswordArgs = {
  code: Scalars['String']
  password: Scalars['String']
  passwordConfirmation: Scalars['String']
}

export type MutationUpdateBlogArgs = {
  data: BlogInput
  id: Scalars['ID']
  locale?: InputMaybe<Scalars['I18NLocaleCode']>
}

export type MutationUpdateDeeplBatchTranslateJobArgs = {
  data: DeeplBatchTranslateJobInput
  id: Scalars['ID']
}

export type MutationUpdateFileInfoArgs = {
  id: Scalars['ID']
  info?: InputMaybe<FileInfoInput>
}

export type MutationUpdatePrivacyPolicyArgs = {
  data: PrivacyPolicyInput
  locale?: InputMaybe<Scalars['I18NLocaleCode']>
}

export type MutationUpdateRealizationsArgs = {
  data: RealizationsInput
  id: Scalars['ID']
  locale?: InputMaybe<Scalars['I18NLocaleCode']>
}

export type MutationUpdateRodoArgs = {
  data: RodoInput
  locale?: InputMaybe<Scalars['I18NLocaleCode']>
}

export type MutationUpdateTermsAndConditionsArgs = {
  data: TermsAndConditionsInput
  locale?: InputMaybe<Scalars['I18NLocaleCode']>
}

export type MutationUpdateUploadFileArgs = {
  data: UploadFileInput
  id: Scalars['ID']
}

export type MutationUpdateUploadFolderArgs = {
  data: UploadFolderInput
  id: Scalars['ID']
}

export type MutationUpdateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput
  id: Scalars['ID']
}

export type MutationUpdateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput
  id: Scalars['ID']
}

export type MutationUploadArgs = {
  field?: InputMaybe<Scalars['String']>
  file: Scalars['Upload']
  info?: InputMaybe<FileInfoInput>
  ref?: InputMaybe<Scalars['String']>
  refId?: InputMaybe<Scalars['ID']>
}

export type Pagination = {
  __typename?: 'Pagination'
  page: Scalars['Int']
  pageCount: Scalars['Int']
  pageSize: Scalars['Int']
  total: Scalars['Int']
}

export type PaginationArg = {
  limit?: InputMaybe<Scalars['Int']>
  page?: InputMaybe<Scalars['Int']>
  pageSize?: InputMaybe<Scalars['Int']>
  start?: InputMaybe<Scalars['Int']>
}

export type PrivacyPolicy = {
  __typename?: 'PrivacyPolicy'
  content?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['DateTime']>
  locale?: Maybe<Scalars['String']>
  localizations?: Maybe<PrivacyPolicyRelationResponseCollection>
  publishedAt?: Maybe<Scalars['DateTime']>
  updatedAt?: Maybe<Scalars['DateTime']>
}

export type PrivacyPolicyLocalizationsArgs = {
  publicationState?: InputMaybe<PublicationState>
}

export type PrivacyPolicyEntity = {
  __typename?: 'PrivacyPolicyEntity'
  attributes?: Maybe<PrivacyPolicy>
  id?: Maybe<Scalars['ID']>
}

export type PrivacyPolicyEntityResponse = {
  __typename?: 'PrivacyPolicyEntityResponse'
  data?: Maybe<PrivacyPolicyEntity>
}

export type PrivacyPolicyInput = {
  content?: InputMaybe<Scalars['String']>
  publishedAt?: InputMaybe<Scalars['DateTime']>
}

export type PrivacyPolicyRelationResponseCollection = {
  __typename?: 'PrivacyPolicyRelationResponseCollection'
  data: Array<PrivacyPolicyEntity>
}

export enum PublicationState {
  Live = 'LIVE',
  Preview = 'PREVIEW',
}

export type Query = {
  __typename?: 'Query'
  blog?: Maybe<BlogEntityResponse>
  blogs?: Maybe<BlogEntityResponseCollection>
  deeplBatchTranslateJob?: Maybe<DeeplBatchTranslateJobEntityResponse>
  deeplBatchTranslateJobs?: Maybe<DeeplBatchTranslateJobEntityResponseCollection>
  i18NLocale?: Maybe<I18NLocaleEntityResponse>
  i18NLocales?: Maybe<I18NLocaleEntityResponseCollection>
  me?: Maybe<UsersPermissionsMe>
  ourRealizations?: Maybe<RealizationsEntityResponseCollection>
  privacyPolicy?: Maybe<PrivacyPolicyEntityResponse>
  realizations?: Maybe<RealizationsEntityResponse>
  rodo?: Maybe<RodoEntityResponse>
  termsAndConditions?: Maybe<TermsAndConditionsEntityResponse>
  uploadFile?: Maybe<UploadFileEntityResponse>
  uploadFiles?: Maybe<UploadFileEntityResponseCollection>
  uploadFolder?: Maybe<UploadFolderEntityResponse>
  uploadFolders?: Maybe<UploadFolderEntityResponseCollection>
  usersPermissionsRole?: Maybe<UsersPermissionsRoleEntityResponse>
  usersPermissionsRoles?: Maybe<UsersPermissionsRoleEntityResponseCollection>
  usersPermissionsUser?: Maybe<UsersPermissionsUserEntityResponse>
  usersPermissionsUsers?: Maybe<UsersPermissionsUserEntityResponseCollection>
}

export type QueryBlogArgs = {
  id?: InputMaybe<Scalars['ID']>
  locale?: InputMaybe<Scalars['I18NLocaleCode']>
}

export type QueryBlogsArgs = {
  filters?: InputMaybe<BlogFiltersInput>
  locale?: InputMaybe<Scalars['I18NLocaleCode']>
  pagination?: InputMaybe<PaginationArg>
  publicationState?: InputMaybe<PublicationState>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type QueryDeeplBatchTranslateJobArgs = {
  id?: InputMaybe<Scalars['ID']>
}

export type QueryDeeplBatchTranslateJobsArgs = {
  filters?: InputMaybe<DeeplBatchTranslateJobFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type QueryI18NLocaleArgs = {
  id?: InputMaybe<Scalars['ID']>
}

export type QueryI18NLocalesArgs = {
  filters?: InputMaybe<I18NLocaleFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type QueryOurRealizationsArgs = {
  filters?: InputMaybe<RealizationsFiltersInput>
  locale?: InputMaybe<Scalars['I18NLocaleCode']>
  pagination?: InputMaybe<PaginationArg>
  publicationState?: InputMaybe<PublicationState>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type QueryPrivacyPolicyArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']>
  publicationState?: InputMaybe<PublicationState>
}

export type QueryRealizationsArgs = {
  id?: InputMaybe<Scalars['ID']>
  locale?: InputMaybe<Scalars['I18NLocaleCode']>
}

export type QueryRodoArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']>
  publicationState?: InputMaybe<PublicationState>
}

export type QueryTermsAndConditionsArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']>
  publicationState?: InputMaybe<PublicationState>
}

export type QueryUploadFileArgs = {
  id?: InputMaybe<Scalars['ID']>
}

export type QueryUploadFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type QueryUploadFolderArgs = {
  id?: InputMaybe<Scalars['ID']>
}

export type QueryUploadFoldersArgs = {
  filters?: InputMaybe<UploadFolderFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type QueryUsersPermissionsRoleArgs = {
  id?: InputMaybe<Scalars['ID']>
}

export type QueryUsersPermissionsRolesArgs = {
  filters?: InputMaybe<UsersPermissionsRoleFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type QueryUsersPermissionsUserArgs = {
  id?: InputMaybe<Scalars['ID']>
}

export type QueryUsersPermissionsUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type Realizations = {
  __typename?: 'Realizations'
  area?: Maybe<Scalars['Int']>
  createdAt?: Maybe<Scalars['DateTime']>
  job: Scalars['String']
  locale?: Maybe<Scalars['String']>
  localizations?: Maybe<RealizationsRelationResponseCollection>
  mainImage: UploadFileEntityResponse
  material: Scalars['String']
  objectName: Scalars['String']
  photos: UploadFileRelationResponseCollection
  publishedAt?: Maybe<Scalars['DateTime']>
  space?: Maybe<Scalars['String']>
  updatedAt?: Maybe<Scalars['DateTime']>
}

export type RealizationsLocalizationsArgs = {
  filters?: InputMaybe<RealizationsFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  publicationState?: InputMaybe<PublicationState>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type RealizationsPhotosArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type RealizationsEntity = {
  __typename?: 'RealizationsEntity'
  attributes?: Maybe<Realizations>
  id?: Maybe<Scalars['ID']>
}

export type RealizationsEntityResponse = {
  __typename?: 'RealizationsEntityResponse'
  data?: Maybe<RealizationsEntity>
}

export type RealizationsEntityResponseCollection = {
  __typename?: 'RealizationsEntityResponseCollection'
  data: Array<RealizationsEntity>
  meta: ResponseCollectionMeta
}

export type RealizationsFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<RealizationsFiltersInput>>>
  area?: InputMaybe<IntFilterInput>
  createdAt?: InputMaybe<DateTimeFilterInput>
  id?: InputMaybe<IdFilterInput>
  job?: InputMaybe<StringFilterInput>
  locale?: InputMaybe<StringFilterInput>
  localizations?: InputMaybe<RealizationsFiltersInput>
  material?: InputMaybe<StringFilterInput>
  not?: InputMaybe<RealizationsFiltersInput>
  objectName?: InputMaybe<StringFilterInput>
  or?: InputMaybe<Array<InputMaybe<RealizationsFiltersInput>>>
  publishedAt?: InputMaybe<DateTimeFilterInput>
  space?: InputMaybe<StringFilterInput>
  updatedAt?: InputMaybe<DateTimeFilterInput>
}

export type RealizationsInput = {
  area?: InputMaybe<Scalars['Int']>
  job?: InputMaybe<Scalars['String']>
  mainImage?: InputMaybe<Scalars['ID']>
  material?: InputMaybe<Scalars['String']>
  objectName?: InputMaybe<Scalars['String']>
  photos?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  publishedAt?: InputMaybe<Scalars['DateTime']>
  space?: InputMaybe<Scalars['String']>
}

export type RealizationsRelationResponseCollection = {
  __typename?: 'RealizationsRelationResponseCollection'
  data: Array<RealizationsEntity>
}

export type ResponseCollectionMeta = {
  __typename?: 'ResponseCollectionMeta'
  pagination: Pagination
}

export type Rodo = {
  __typename?: 'Rodo'
  content?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['DateTime']>
  locale?: Maybe<Scalars['String']>
  localizations?: Maybe<RodoRelationResponseCollection>
  publishedAt?: Maybe<Scalars['DateTime']>
  updatedAt?: Maybe<Scalars['DateTime']>
}

export type RodoLocalizationsArgs = {
  publicationState?: InputMaybe<PublicationState>
}

export type RodoEntity = {
  __typename?: 'RodoEntity'
  attributes?: Maybe<Rodo>
  id?: Maybe<Scalars['ID']>
}

export type RodoEntityResponse = {
  __typename?: 'RodoEntityResponse'
  data?: Maybe<RodoEntity>
}

export type RodoInput = {
  content?: InputMaybe<Scalars['String']>
  publishedAt?: InputMaybe<Scalars['DateTime']>
}

export type RodoRelationResponseCollection = {
  __typename?: 'RodoRelationResponseCollection'
  data: Array<RodoEntity>
}

export type StringFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  between?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  contains?: InputMaybe<Scalars['String']>
  containsi?: InputMaybe<Scalars['String']>
  endsWith?: InputMaybe<Scalars['String']>
  eq?: InputMaybe<Scalars['String']>
  eqi?: InputMaybe<Scalars['String']>
  gt?: InputMaybe<Scalars['String']>
  gte?: InputMaybe<Scalars['String']>
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  lt?: InputMaybe<Scalars['String']>
  lte?: InputMaybe<Scalars['String']>
  ne?: InputMaybe<Scalars['String']>
  not?: InputMaybe<StringFilterInput>
  notContains?: InputMaybe<Scalars['String']>
  notContainsi?: InputMaybe<Scalars['String']>
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  notNull?: InputMaybe<Scalars['Boolean']>
  null?: InputMaybe<Scalars['Boolean']>
  or?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  startsWith?: InputMaybe<Scalars['String']>
}

export type TermsAndConditions = {
  __typename?: 'TermsAndConditions'
  content?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['DateTime']>
  locale?: Maybe<Scalars['String']>
  localizations?: Maybe<TermsAndConditionsRelationResponseCollection>
  publishedAt?: Maybe<Scalars['DateTime']>
  updatedAt?: Maybe<Scalars['DateTime']>
}

export type TermsAndConditionsLocalizationsArgs = {
  publicationState?: InputMaybe<PublicationState>
}

export type TermsAndConditionsEntity = {
  __typename?: 'TermsAndConditionsEntity'
  attributes?: Maybe<TermsAndConditions>
  id?: Maybe<Scalars['ID']>
}

export type TermsAndConditionsEntityResponse = {
  __typename?: 'TermsAndConditionsEntityResponse'
  data?: Maybe<TermsAndConditionsEntity>
}

export type TermsAndConditionsInput = {
  content?: InputMaybe<Scalars['String']>
  publishedAt?: InputMaybe<Scalars['DateTime']>
}

export type TermsAndConditionsRelationResponseCollection = {
  __typename?: 'TermsAndConditionsRelationResponseCollection'
  data: Array<TermsAndConditionsEntity>
}

export type UploadFile = {
  __typename?: 'UploadFile'
  alternativeText?: Maybe<Scalars['String']>
  caption?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['DateTime']>
  ext?: Maybe<Scalars['String']>
  formats?: Maybe<Scalars['JSON']>
  hash: Scalars['String']
  height?: Maybe<Scalars['Int']>
  mime: Scalars['String']
  name: Scalars['String']
  previewUrl?: Maybe<Scalars['String']>
  provider: Scalars['String']
  provider_metadata?: Maybe<Scalars['JSON']>
  related?: Maybe<Array<Maybe<GenericMorph>>>
  size: Scalars['Float']
  updatedAt?: Maybe<Scalars['DateTime']>
  url: Scalars['String']
  width?: Maybe<Scalars['Int']>
}

export type UploadFileEntity = {
  __typename?: 'UploadFileEntity'
  attributes?: Maybe<UploadFile>
  id?: Maybe<Scalars['ID']>
}

export type UploadFileEntityResponse = {
  __typename?: 'UploadFileEntityResponse'
  data?: Maybe<UploadFileEntity>
}

export type UploadFileEntityResponseCollection = {
  __typename?: 'UploadFileEntityResponseCollection'
  data: Array<UploadFileEntity>
  meta: ResponseCollectionMeta
}

export type UploadFileFiltersInput = {
  alternativeText?: InputMaybe<StringFilterInput>
  and?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>
  caption?: InputMaybe<StringFilterInput>
  createdAt?: InputMaybe<DateTimeFilterInput>
  ext?: InputMaybe<StringFilterInput>
  folder?: InputMaybe<UploadFolderFiltersInput>
  folderPath?: InputMaybe<StringFilterInput>
  formats?: InputMaybe<JsonFilterInput>
  hash?: InputMaybe<StringFilterInput>
  height?: InputMaybe<IntFilterInput>
  id?: InputMaybe<IdFilterInput>
  mime?: InputMaybe<StringFilterInput>
  name?: InputMaybe<StringFilterInput>
  not?: InputMaybe<UploadFileFiltersInput>
  or?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>
  previewUrl?: InputMaybe<StringFilterInput>
  provider?: InputMaybe<StringFilterInput>
  provider_metadata?: InputMaybe<JsonFilterInput>
  size?: InputMaybe<FloatFilterInput>
  updatedAt?: InputMaybe<DateTimeFilterInput>
  url?: InputMaybe<StringFilterInput>
  width?: InputMaybe<IntFilterInput>
}

export type UploadFileInput = {
  alternativeText?: InputMaybe<Scalars['String']>
  caption?: InputMaybe<Scalars['String']>
  ext?: InputMaybe<Scalars['String']>
  folder?: InputMaybe<Scalars['ID']>
  folderPath?: InputMaybe<Scalars['String']>
  formats?: InputMaybe<Scalars['JSON']>
  hash?: InputMaybe<Scalars['String']>
  height?: InputMaybe<Scalars['Int']>
  mime?: InputMaybe<Scalars['String']>
  name?: InputMaybe<Scalars['String']>
  previewUrl?: InputMaybe<Scalars['String']>
  provider?: InputMaybe<Scalars['String']>
  provider_metadata?: InputMaybe<Scalars['JSON']>
  size?: InputMaybe<Scalars['Float']>
  url?: InputMaybe<Scalars['String']>
  width?: InputMaybe<Scalars['Int']>
}

export type UploadFileRelationResponseCollection = {
  __typename?: 'UploadFileRelationResponseCollection'
  data: Array<UploadFileEntity>
}

export type UploadFolder = {
  __typename?: 'UploadFolder'
  children?: Maybe<UploadFolderRelationResponseCollection>
  createdAt?: Maybe<Scalars['DateTime']>
  files?: Maybe<UploadFileRelationResponseCollection>
  name: Scalars['String']
  parent?: Maybe<UploadFolderEntityResponse>
  path: Scalars['String']
  pathId: Scalars['Int']
  updatedAt?: Maybe<Scalars['DateTime']>
}

export type UploadFolderChildrenArgs = {
  filters?: InputMaybe<UploadFolderFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type UploadFolderFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type UploadFolderEntity = {
  __typename?: 'UploadFolderEntity'
  attributes?: Maybe<UploadFolder>
  id?: Maybe<Scalars['ID']>
}

export type UploadFolderEntityResponse = {
  __typename?: 'UploadFolderEntityResponse'
  data?: Maybe<UploadFolderEntity>
}

export type UploadFolderEntityResponseCollection = {
  __typename?: 'UploadFolderEntityResponseCollection'
  data: Array<UploadFolderEntity>
  meta: ResponseCollectionMeta
}

export type UploadFolderFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UploadFolderFiltersInput>>>
  children?: InputMaybe<UploadFolderFiltersInput>
  createdAt?: InputMaybe<DateTimeFilterInput>
  files?: InputMaybe<UploadFileFiltersInput>
  id?: InputMaybe<IdFilterInput>
  name?: InputMaybe<StringFilterInput>
  not?: InputMaybe<UploadFolderFiltersInput>
  or?: InputMaybe<Array<InputMaybe<UploadFolderFiltersInput>>>
  parent?: InputMaybe<UploadFolderFiltersInput>
  path?: InputMaybe<StringFilterInput>
  pathId?: InputMaybe<IntFilterInput>
  updatedAt?: InputMaybe<DateTimeFilterInput>
}

export type UploadFolderInput = {
  children?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  files?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  name?: InputMaybe<Scalars['String']>
  parent?: InputMaybe<Scalars['ID']>
  path?: InputMaybe<Scalars['String']>
  pathId?: InputMaybe<Scalars['Int']>
}

export type UploadFolderRelationResponseCollection = {
  __typename?: 'UploadFolderRelationResponseCollection'
  data: Array<UploadFolderEntity>
}

export type UsersPermissionsCreateRolePayload = {
  __typename?: 'UsersPermissionsCreateRolePayload'
  ok: Scalars['Boolean']
}

export type UsersPermissionsDeleteRolePayload = {
  __typename?: 'UsersPermissionsDeleteRolePayload'
  ok: Scalars['Boolean']
}

export type UsersPermissionsLoginInput = {
  identifier: Scalars['String']
  password: Scalars['String']
  provider?: Scalars['String']
}

export type UsersPermissionsLoginPayload = {
  __typename?: 'UsersPermissionsLoginPayload'
  jwt?: Maybe<Scalars['String']>
  user: UsersPermissionsMe
}

export type UsersPermissionsMe = {
  __typename?: 'UsersPermissionsMe'
  blocked?: Maybe<Scalars['Boolean']>
  confirmed?: Maybe<Scalars['Boolean']>
  email?: Maybe<Scalars['String']>
  id: Scalars['ID']
  role?: Maybe<UsersPermissionsMeRole>
  username: Scalars['String']
}

export type UsersPermissionsMeRole = {
  __typename?: 'UsersPermissionsMeRole'
  description?: Maybe<Scalars['String']>
  id: Scalars['ID']
  name: Scalars['String']
  type?: Maybe<Scalars['String']>
}

export type UsersPermissionsPasswordPayload = {
  __typename?: 'UsersPermissionsPasswordPayload'
  ok: Scalars['Boolean']
}

export type UsersPermissionsPermission = {
  __typename?: 'UsersPermissionsPermission'
  action: Scalars['String']
  createdAt?: Maybe<Scalars['DateTime']>
  role?: Maybe<UsersPermissionsRoleEntityResponse>
  updatedAt?: Maybe<Scalars['DateTime']>
}

export type UsersPermissionsPermissionEntity = {
  __typename?: 'UsersPermissionsPermissionEntity'
  attributes?: Maybe<UsersPermissionsPermission>
  id?: Maybe<Scalars['ID']>
}

export type UsersPermissionsPermissionFiltersInput = {
  action?: InputMaybe<StringFilterInput>
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>
  createdAt?: InputMaybe<DateTimeFilterInput>
  id?: InputMaybe<IdFilterInput>
  not?: InputMaybe<UsersPermissionsPermissionFiltersInput>
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>
  updatedAt?: InputMaybe<DateTimeFilterInput>
}

export type UsersPermissionsPermissionRelationResponseCollection = {
  __typename?: 'UsersPermissionsPermissionRelationResponseCollection'
  data: Array<UsersPermissionsPermissionEntity>
}

export type UsersPermissionsRegisterInput = {
  email: Scalars['String']
  password: Scalars['String']
  username: Scalars['String']
}

export type UsersPermissionsRole = {
  __typename?: 'UsersPermissionsRole'
  createdAt?: Maybe<Scalars['DateTime']>
  description?: Maybe<Scalars['String']>
  name: Scalars['String']
  permissions?: Maybe<UsersPermissionsPermissionRelationResponseCollection>
  type?: Maybe<Scalars['String']>
  updatedAt?: Maybe<Scalars['DateTime']>
  users?: Maybe<UsersPermissionsUserRelationResponseCollection>
}

export type UsersPermissionsRolePermissionsArgs = {
  filters?: InputMaybe<UsersPermissionsPermissionFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type UsersPermissionsRoleUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type UsersPermissionsRoleEntity = {
  __typename?: 'UsersPermissionsRoleEntity'
  attributes?: Maybe<UsersPermissionsRole>
  id?: Maybe<Scalars['ID']>
}

export type UsersPermissionsRoleEntityResponse = {
  __typename?: 'UsersPermissionsRoleEntityResponse'
  data?: Maybe<UsersPermissionsRoleEntity>
}

export type UsersPermissionsRoleEntityResponseCollection = {
  __typename?: 'UsersPermissionsRoleEntityResponseCollection'
  data: Array<UsersPermissionsRoleEntity>
  meta: ResponseCollectionMeta
}

export type UsersPermissionsRoleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>
  createdAt?: InputMaybe<DateTimeFilterInput>
  description?: InputMaybe<StringFilterInput>
  id?: InputMaybe<IdFilterInput>
  name?: InputMaybe<StringFilterInput>
  not?: InputMaybe<UsersPermissionsRoleFiltersInput>
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>
  permissions?: InputMaybe<UsersPermissionsPermissionFiltersInput>
  type?: InputMaybe<StringFilterInput>
  updatedAt?: InputMaybe<DateTimeFilterInput>
  users?: InputMaybe<UsersPermissionsUserFiltersInput>
}

export type UsersPermissionsRoleInput = {
  description?: InputMaybe<Scalars['String']>
  name?: InputMaybe<Scalars['String']>
  permissions?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  type?: InputMaybe<Scalars['String']>
  users?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
}

export type UsersPermissionsUpdateRolePayload = {
  __typename?: 'UsersPermissionsUpdateRolePayload'
  ok: Scalars['Boolean']
}

export type UsersPermissionsUser = {
  __typename?: 'UsersPermissionsUser'
  blocked?: Maybe<Scalars['Boolean']>
  confirmed?: Maybe<Scalars['Boolean']>
  createdAt?: Maybe<Scalars['DateTime']>
  email: Scalars['String']
  provider?: Maybe<Scalars['String']>
  role?: Maybe<UsersPermissionsRoleEntityResponse>
  updatedAt?: Maybe<Scalars['DateTime']>
  username: Scalars['String']
}

export type UsersPermissionsUserEntity = {
  __typename?: 'UsersPermissionsUserEntity'
  attributes?: Maybe<UsersPermissionsUser>
  id?: Maybe<Scalars['ID']>
}

export type UsersPermissionsUserEntityResponse = {
  __typename?: 'UsersPermissionsUserEntityResponse'
  data?: Maybe<UsersPermissionsUserEntity>
}

export type UsersPermissionsUserEntityResponseCollection = {
  __typename?: 'UsersPermissionsUserEntityResponseCollection'
  data: Array<UsersPermissionsUserEntity>
  meta: ResponseCollectionMeta
}

export type UsersPermissionsUserFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>
  blocked?: InputMaybe<BooleanFilterInput>
  confirmationToken?: InputMaybe<StringFilterInput>
  confirmed?: InputMaybe<BooleanFilterInput>
  createdAt?: InputMaybe<DateTimeFilterInput>
  email?: InputMaybe<StringFilterInput>
  id?: InputMaybe<IdFilterInput>
  not?: InputMaybe<UsersPermissionsUserFiltersInput>
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>
  password?: InputMaybe<StringFilterInput>
  provider?: InputMaybe<StringFilterInput>
  resetPasswordToken?: InputMaybe<StringFilterInput>
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>
  updatedAt?: InputMaybe<DateTimeFilterInput>
  username?: InputMaybe<StringFilterInput>
}

export type UsersPermissionsUserInput = {
  blocked?: InputMaybe<Scalars['Boolean']>
  confirmationToken?: InputMaybe<Scalars['String']>
  confirmed?: InputMaybe<Scalars['Boolean']>
  email?: InputMaybe<Scalars['String']>
  password?: InputMaybe<Scalars['String']>
  provider?: InputMaybe<Scalars['String']>
  resetPasswordToken?: InputMaybe<Scalars['String']>
  role?: InputMaybe<Scalars['ID']>
  username?: InputMaybe<Scalars['String']>
}

export type UsersPermissionsUserRelationResponseCollection = {
  __typename?: 'UsersPermissionsUserRelationResponseCollection'
  data: Array<UsersPermissionsUserEntity>
}

export type BlogPostQueryVariables = Exact<{
  locale: Scalars['I18NLocaleCode']
  slug: Scalars['String']
}>

export type BlogPostQuery = {
  __typename?: 'Query'
  blogs?: {
    __typename?: 'BlogEntityResponseCollection'
    data: Array<{
      __typename?: 'BlogEntity'
      id?: string | null
      attributes?: {
        __typename?: 'Blog'
        title: string
        content: string
        author: string
        slug: string
        isFromSmartFloor: boolean
        publishedAt?: any | null
        postImage: {
          __typename?: 'UploadFileEntityResponse'
          data?: {
            __typename?: 'UploadFileEntity'
            attributes?: {
              __typename?: 'UploadFile'
              formats?: any | null
            } | null
          } | null
        }
        SEO: {
          __typename?: 'ComponentSharedSeo'
          metaTitle: string
          metaDescription: string
        }
      } | null
    }>
  } | null
}

export type BlogPostsQueryVariables = Exact<{
  locale: Scalars['I18NLocaleCode']
}>

export type BlogPostsQuery = {
  __typename?: 'Query'
  blogs?: {
    __typename?: 'BlogEntityResponseCollection'
    data: Array<{
      __typename?: 'BlogEntity'
      id?: string | null
      attributes?: {
        __typename?: 'Blog'
        title: string
        slug: string
        postImage: {
          __typename?: 'UploadFileEntityResponse'
          data?: {
            __typename?: 'UploadFileEntity'
            attributes?: {
              __typename?: 'UploadFile'
              formats?: any | null
            } | null
          } | null
        }
      } | null
    }>
  } | null
}

export type OurRealizationsQueryVariables = Exact<{
  locale: Scalars['I18NLocaleCode']
}>

export type OurRealizationsQuery = {
  __typename?: 'Query'
  ourRealizations?: {
    __typename?: 'RealizationsEntityResponseCollection'
    data: Array<{
      __typename?: 'RealizationsEntity'
      id?: string | null
      attributes?: {
        __typename?: 'Realizations'
        objectName: string
        job: string
        material: string
        space?: string | null
        area?: number | null
        mainImage: {
          __typename?: 'UploadFileEntityResponse'
          data?: {
            __typename?: 'UploadFileEntity'
            attributes?: {
              __typename?: 'UploadFile'
              formats?: any | null
            } | null
          } | null
        }
        photos: {
          __typename?: 'UploadFileRelationResponseCollection'
          data: Array<{
            __typename?: 'UploadFileEntity'
            attributes?: {
              __typename?: 'UploadFile'
              formats?: any | null
            } | null
          }>
        }
      } | null
    }>
  } | null
}

export const BlogPostDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'BlogPost' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'locale' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'I18NLocaleCode' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'slug' } },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'blogs' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'filters' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'slug' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'eq' },
                            value: {
                              kind: 'Variable',
                              name: { kind: 'Name', value: 'slug' },
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'locale' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'locale' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'data' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'attributes' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'title' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'content' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'author' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'slug' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'isFromSmartFloor' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'publishedAt' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'postImage' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'data' },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'attributes',
                                          },
                                          selectionSet: {
                                            kind: 'SelectionSet',
                                            selections: [
                                              {
                                                kind: 'Field',
                                                name: {
                                                  kind: 'Name',
                                                  value: 'formats',
                                                },
                                              },
                                            ],
                                          },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'SEO' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'metaTitle' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'metaDescription',
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<BlogPostQuery, BlogPostQueryVariables>
export const BlogPostsDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'BlogPosts' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'locale' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'I18NLocaleCode' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'blogs' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'locale' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'locale' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'data' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'attributes' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'title' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'slug' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'postImage' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'data' },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'attributes',
                                          },
                                          selectionSet: {
                                            kind: 'SelectionSet',
                                            selections: [
                                              {
                                                kind: 'Field',
                                                name: {
                                                  kind: 'Name',
                                                  value: 'formats',
                                                },
                                              },
                                            ],
                                          },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<BlogPostsQuery, BlogPostsQueryVariables>
export const OurRealizationsDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'OurRealizations' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'locale' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'I18NLocaleCode' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'ourRealizations' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'locale' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'locale' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'data' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'attributes' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'objectName' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'job' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'material' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'space' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'area' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'mainImage' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'data' },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'attributes',
                                          },
                                          selectionSet: {
                                            kind: 'SelectionSet',
                                            selections: [
                                              {
                                                kind: 'Field',
                                                name: {
                                                  kind: 'Name',
                                                  value: 'formats',
                                                },
                                              },
                                            ],
                                          },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'photos' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'data' },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'attributes',
                                          },
                                          selectionSet: {
                                            kind: 'SelectionSet',
                                            selections: [
                                              {
                                                kind: 'Field',
                                                name: {
                                                  kind: 'Name',
                                                  value: 'formats',
                                                },
                                              },
                                            ],
                                          },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  OurRealizationsQuery,
  OurRealizationsQueryVariables
>
