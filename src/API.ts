/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreatePersonInput = {
  id?: string | null,
  cognitoUsername?: string | null,
  cognitoSub?: string | null,
  firstName?: string | null,
  lastName?: string | null,
  email: string,
  status?: string | null,
  phone?: string | null,
  invitedAt?: string | null,
  displayName?: string | null,
  jobSkills?: Array< string | null > | null,
  notes?: string | null,
  timezone?: string | null,
  language?: string | null,
  lastActive?: string | null,
};

export type ModelPersonConditionInput = {
  cognitoUsername?: ModelStringInput | null,
  cognitoSub?: ModelStringInput | null,
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  email?: ModelStringInput | null,
  status?: ModelStringInput | null,
  phone?: ModelStringInput | null,
  invitedAt?: ModelStringInput | null,
  displayName?: ModelStringInput | null,
  jobSkills?: ModelStringInput | null,
  notes?: ModelStringInput | null,
  timezone?: ModelStringInput | null,
  language?: ModelStringInput | null,
  lastActive?: ModelStringInput | null,
  and?: Array< ModelPersonConditionInput | null > | null,
  or?: Array< ModelPersonConditionInput | null > | null,
  not?: ModelPersonConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Person = {
  __typename: "Person",
  id: string,
  cognitoUsername?: string | null,
  cognitoSub?: string | null,
  firstName?: string | null,
  lastName?: string | null,
  email: string,
  status?: string | null,
  phone?: string | null,
  invitedAt?: string | null,
  displayName?: string | null,
  jobSkills?: Array< string | null > | null,
  companyRoles?: ModelPersonCompanyRoleConnection | null,
  companies?: ModelPersonCompaniesConnection | null,
  projects?: ModelProjectPeopleConnection | null,
  projectMemberships?: ModelProjectMembershipConnection | null,
  uploadedFiles?: ModelProjectFileConnection | null,
  chats?: ModelChatParticipantsConnection | null,
  sentMessages?: ModelGroupChatMessageConnection | null,
  notes?: string | null,
  timezone?: string | null,
  language?: string | null,
  lastActive?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelPersonCompanyRoleConnection = {
  __typename: "ModelPersonCompanyRoleConnection",
  items:  Array<PersonCompanyRole | null >,
  nextToken?: string | null,
};

export type PersonCompanyRole = {
  __typename: "PersonCompanyRole",
  id: string,
  personID: string,
  person: Person,
  companyID: string,
  company: Company,
  jobRoles: Array< CompanyRoleType | null >,
  isActive: boolean,
  startDate?: string | null,
  endDate?: string | null,
  createdAt: string,
  updatedAt: string,
  personCompanyRolesId?: string | null,
  companyPersonRolesId?: string | null,
};

export type Company = {
  __typename: "Company",
  id: string,
  name: string,
  website?: string | null,
  people?: ModelPersonCompaniesConnection | null,
  personRoles?: ModelPersonCompanyRoleConnection | null,
  projects?: ModelProjectConnection | null,
  projectTemplates?: ModelProjectTemplateConnection | null,
  scopeItemTags?: ModelScopeItemTagConnection | null,
  templateScopeItemTags?: ModelTemplateScopeItemTagConnection | null,
  chats?: ModelGroupChatConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelPersonCompaniesConnection = {
  __typename: "ModelPersonCompaniesConnection",
  items:  Array<PersonCompanies | null >,
  nextToken?: string | null,
};

export type PersonCompanies = {
  __typename: "PersonCompanies",
  id: string,
  personId: string,
  companyId: string,
  person: Person,
  company: Company,
  createdAt: string,
  updatedAt: string,
  cognitoUsername?: string | null,
};

export type ModelProjectConnection = {
  __typename: "ModelProjectConnection",
  items:  Array<Project | null >,
  nextToken?: string | null,
};

export type Project = {
  __typename: "Project",
  id: string,
  name: string,
  description?: string | null,
  startDate?: string | null,
  endDate?: string | null,
  companyID: string,
  company?: Company | null,
  templateID?: string | null,
  template?: ProjectTemplate | null,
  people?: ModelProjectPeopleConnection | null,
  memberships?: ModelProjectMembershipConnection | null,
  files?: ModelProjectFileConnection | null,
  address?: Address | null,
  notifications?: ModelNotificationConnection | null,
  chats?: ModelGroupChatConnection | null,
  scopeItems?: ModelScopeItemConnection | null,
  scopeItemGroups?: ModelScopeItemGroupConnection | null,
  createdAt: string,
  updatedAt: string,
  companyProjectsId?: string | null,
  projectTemplateProjectsId?: string | null,
  projectAddressId?: string | null,
};

export type ProjectTemplate = {
  __typename: "ProjectTemplate",
  id: string,
  name: string,
  description?: string | null,
  companyID: string,
  company?: Company | null,
  projects?: ModelProjectConnection | null,
  scopeItems?: ModelTemplateScopeItemConnection | null,
  templateScopeItemTags?: ModelTemplateScopeItemTagConnection | null,
  estimatedDuration?: number | null,
  defaultAddress?: Address | null,
  notificationSettings?: ModelNotificationConnection | null,
  createdAt: string,
  updatedAt: string,
  companyProjectTemplatesId?: string | null,
  projectTemplateDefaultAddressId?: string | null,
};

export type ModelTemplateScopeItemConnection = {
  __typename: "ModelTemplateScopeItemConnection",
  items:  Array<TemplateScopeItem | null >,
  nextToken?: string | null,
};

export type TemplateScopeItem = {
  __typename: "TemplateScopeItem",
  id: string,
  name: string,
  description?: string | null,
  parentItemID?: string | null,
  parentItem?: TemplateScopeItem | null,
  childItems?: ModelTemplateScopeItemConnection | null,
  projectTemplateID: string,
  projectTemplate?: ProjectTemplate | null,
  tags?: Array< string | null > | null,
  createdAt: string,
  updatedAt: string,
  projectTemplateScopeItemsId?: string | null,
};

export type ModelTemplateScopeItemTagConnection = {
  __typename: "ModelTemplateScopeItemTagConnection",
  items:  Array<TemplateScopeItemTag | null >,
  nextToken?: string | null,
};

export type TemplateScopeItemTag = {
  __typename: "TemplateScopeItemTag",
  id: string,
  name: string,
  description?: string | null,
  companyID: string,
  company?: Company | null,
  projectTemplateID: string,
  projectTemplate?: ProjectTemplate | null,
  color?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  companyTemplateScopeItemTagsId?: string | null,
  projectTemplateTemplateScopeItemTagsId?: string | null,
};

export type Address = {
  __typename: "Address",
  id: string,
  street: string,
  city: string,
  state: string,
  postalCode: string,
  country: string,
  projectID?: string | null,
  project?: Project | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelNotificationConnection = {
  __typename: "ModelNotificationConnection",
  items:  Array<Notification | null >,
  nextToken?: string | null,
};

export type Notification = {
  __typename: "Notification",
  id: string,
  type: NotificationType,
  messageTemplate: string,
  status: NotificationStatus,
  schedule:  Array<NotificationSchedule | null >,
  projectID?: string | null,
  project?: Project | null,
  createdAt: string,
  updatedAt: string,
  projectTemplateNotificationSettingsId?: string | null,
  projectNotificationsId?: string | null,
};

export enum NotificationType {
  SMS = "SMS",
  EMAIL = "EMAIL",
  BOTH = "BOTH",
}


export enum NotificationStatus {
  ACTIVE = "ACTIVE",
  PAUSED = "PAUSED",
}


export type NotificationSchedule = {
  __typename: "NotificationSchedule",
  date: string,
  time: string,
  isRecurring: boolean,
  frequency?: string | null,
  interval?: number | null,
  daysOfWeek?: Array< string | null > | null,
  endDate?: string | null,
  runCount?: number | null,
  maxRuns?: number | null,
};

export type ModelProjectPeopleConnection = {
  __typename: "ModelProjectPeopleConnection",
  items:  Array<ProjectPeople | null >,
  nextToken?: string | null,
};

export type ProjectPeople = {
  __typename: "ProjectPeople",
  id: string,
  personId: string,
  projectId: string,
  person: Person,
  project: Project,
  createdAt: string,
  updatedAt: string,
  cognitoUsername?: string | null,
};

export type ModelProjectMembershipConnection = {
  __typename: "ModelProjectMembershipConnection",
  items:  Array<ProjectMembership | null >,
  nextToken?: string | null,
};

export type ProjectMembership = {
  __typename: "ProjectMembership",
  id: string,
  projectID: string,
  project: Project,
  personID: string,
  person: Person,
  roles: Array< string | null >,
  isActive: boolean,
  startDate?: string | null,
  endDate?: string | null,
  createdAt: string,
  updatedAt: string,
  personProjectMembershipsId?: string | null,
  projectMembershipsId?: string | null,
};

export type ModelProjectFileConnection = {
  __typename: "ModelProjectFileConnection",
  items:  Array<ProjectFile | null >,
  nextToken?: string | null,
};

export type ProjectFile = {
  __typename: "ProjectFile",
  id: string,
  fileName: string,
  fileType: string,
  fileSize: number,
  description?: string | null,
  uploadedByID: string,
  uploadedBy?: Person | null,
  uploadedAt: string,
  projectID: string,
  project?: Project | null,
  s3Object: S3Object,
  isPublic: boolean,
  width?: number | null,
  height?: number | null,
  duration?: number | null,
  thumbnailKey?: string | null,
  tags?: ModelProjectFileTagConnection | null,
  annotations?: ModelAnnotationConnection | null,
  createdAt: string,
  updatedAt: string,
  personUploadedFilesId?: string | null,
  projectFilesId?: string | null,
};

export type S3Object = {
  __typename: "S3Object",
  bucket: string,
  region: string,
  key: string,
  etag?: string | null,
  versionId?: string | null,
};

export type ModelProjectFileTagConnection = {
  __typename: "ModelProjectFileTagConnection",
  items:  Array<ProjectFileTag | null >,
  nextToken?: string | null,
};

export type ProjectFileTag = {
  __typename: "ProjectFileTag",
  id: string,
  tagId: string,
  projectFileId: string,
  tag: Tag,
  projectFile: ProjectFile,
  createdAt: string,
  updatedAt: string,
};

export type Tag = {
  __typename: "Tag",
  id: string,
  name: string,
  files?: ModelProjectFileTagConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelAnnotationConnection = {
  __typename: "ModelAnnotationConnection",
  items:  Array<Annotation | null >,
  nextToken?: string | null,
};

export type Annotation = {
  __typename: "Annotation",
  id: string,
  pageNumber: number,
  x: number,
  y: number,
  endX?: number | null,
  endY?: number | null,
  width?: number | null,
  height?: number | null,
  radius?: number | null,
  rotation?: number | null,
  strokeWidth?: number | null,
  strokeStyle?: string | null,
  color: string,
  type: AnnotationType,
  text?: string | null,
  projectFileID: string,
  projectFile: ProjectFile,
  createdAt: string,
  createdByID: string,
  updatedAt?: string | null,
  updatedByID?: string | null,
  projectFileAnnotationsId?: string | null,
};

export enum AnnotationType {
  LINE = "LINE",
  RECTANGLE = "RECTANGLE",
  CIRCLE = "CIRCLE",
  TEXT = "TEXT",
  HIGHLIGHT = "HIGHLIGHT",
  FREEFORM = "FREEFORM",
}


export type ModelGroupChatConnection = {
  __typename: "ModelGroupChatConnection",
  items:  Array<GroupChat | null >,
  nextToken?: string | null,
};

export type GroupChat = {
  __typename: "GroupChat",
  id: string,
  name: string,
  chatType: ChatType,
  messages?: ModelGroupChatMessageConnection | null,
  createdAt: string,
  updatedAt: string,
  status: ChatStatus,
  isDeleted: boolean,
  messageLimit?: number | null,
  lastMessageAt?: string | null,
  companyID: string,
  company?: Company | null,
  projectID?: string | null,
  project?: Project | null,
  scopeItemID?: string | null,
  scopeItem?: ScopeItem | null,
  participants?: ModelChatParticipantsConnection | null,
  companyChatsId?: string | null,
  projectChatsId?: string | null,
  scopeItemChatsId?: string | null,
};

export enum ChatType {
  PROJECT = "PROJECT",
  CONTACT = "CONTACT",
  SCOPE_ITEM = "SCOPE_ITEM",
  GENERAL = "GENERAL",
}


export type ModelGroupChatMessageConnection = {
  __typename: "ModelGroupChatMessageConnection",
  items:  Array<GroupChatMessage | null >,
  nextToken?: string | null,
};

export type GroupChatMessage = {
  __typename: "GroupChatMessage",
  id: string,
  content: string,
  chatID: string,
  chat: GroupChat,
  senderID: string,
  sender: Person,
  timestamp: string,
  isEdited: boolean,
  editedAt?: string | null,
  attachments?: ModelChatAttachmentConnection | null,
  createdAt: string,
  updatedAt: string,
  personSentMessagesId?: string | null,
  groupChatMessagesId?: string | null,
};

export type ModelChatAttachmentConnection = {
  __typename: "ModelChatAttachmentConnection",
  items:  Array<ChatAttachment | null >,
  nextToken?: string | null,
};

export type ChatAttachment = {
  __typename: "ChatAttachment",
  id: string,
  fileName: string,
  fileType: string,
  fileSize: number,
  s3Object: S3Object,
  uploadedAt: string,
  width?: number | null,
  height?: number | null,
  duration?: number | null,
  thumbnailKey?: string | null,
  messageID: string,
  message: GroupChatMessage,
  createdAt: string,
  updatedAt: string,
  groupChatMessageAttachmentsId?: string | null,
};

export enum ChatStatus {
  ACTIVE = "ACTIVE",
  ARCHIVED = "ARCHIVED",
  SUSPENDED = "SUSPENDED",
}


export type ScopeItem = {
  __typename: "ScopeItem",
  id: string,
  name: string,
  description?: string | null,
  category?: string | null,
  costEstimate?: number | null,
  spendEstimate?: number | null,
  durationEstimate?: number | null,
  isCompleted?: boolean | null,
  progress?: number | null,
  tags?: Array< string | null > | null,
  parentItemID?: string | null,
  parentItem?: ScopeItem | null,
  childItems?: ModelScopeItemConnection | null,
  projectID: string,
  project?: Project | null,
  groupID?: string | null,
  group?: ScopeItemGroup | null,
  chats?: ModelGroupChatConnection | null,
  createdAt: string,
  updatedAt: string,
  projectScopeItemsId?: string | null,
  scopeItemGroupScopeItemsId?: string | null,
};

export type ModelScopeItemConnection = {
  __typename: "ModelScopeItemConnection",
  items:  Array<ScopeItem | null >,
  nextToken?: string | null,
};

export type ScopeItemGroup = {
  __typename: "ScopeItemGroup",
  id: string,
  name: string,
  description?: string | null,
  projectID: string,
  project?: Project | null,
  scopeItems?: ModelScopeItemConnection | null,
  createdAt: string,
  updatedAt: string,
  projectScopeItemGroupsId?: string | null,
};

export type ModelChatParticipantsConnection = {
  __typename: "ModelChatParticipantsConnection",
  items:  Array<ChatParticipants | null >,
  nextToken?: string | null,
};

export type ChatParticipants = {
  __typename: "ChatParticipants",
  id: string,
  personId: string,
  groupChatId: string,
  person: Person,
  groupChat: GroupChat,
  createdAt: string,
  updatedAt: string,
  cognitoUsername?: string | null,
};

export type ModelScopeItemGroupConnection = {
  __typename: "ModelScopeItemGroupConnection",
  items:  Array<ScopeItemGroup | null >,
  nextToken?: string | null,
};

export type ModelProjectTemplateConnection = {
  __typename: "ModelProjectTemplateConnection",
  items:  Array<ProjectTemplate | null >,
  nextToken?: string | null,
};

export type ModelScopeItemTagConnection = {
  __typename: "ModelScopeItemTagConnection",
  items:  Array<ScopeItemTag | null >,
  nextToken?: string | null,
};

export type ScopeItemTag = {
  __typename: "ScopeItemTag",
  id: string,
  name: string,
  description?: string | null,
  companyID: string,
  company?: Company | null,
  color?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  companyScopeItemTagsId?: string | null,
};

export enum CompanyRoleType {
  COMPANY_ADMIN = "COMPANY_ADMIN",
  COMPANY_USER = "COMPANY_USER",
}


export type UpdatePersonInput = {
  id: string,
  cognitoUsername?: string | null,
  cognitoSub?: string | null,
  firstName?: string | null,
  lastName?: string | null,
  email?: string | null,
  status?: string | null,
  phone?: string | null,
  invitedAt?: string | null,
  displayName?: string | null,
  jobSkills?: Array< string | null > | null,
  notes?: string | null,
  timezone?: string | null,
  language?: string | null,
  lastActive?: string | null,
};

export type DeletePersonInput = {
  id: string,
};

export type CreatePersonCompanyRoleInput = {
  id?: string | null,
  personID: string,
  companyID: string,
  jobRoles: Array< CompanyRoleType | null >,
  isActive: boolean,
  startDate?: string | null,
  endDate?: string | null,
  personCompanyRolesId?: string | null,
  companyPersonRolesId?: string | null,
};

export type ModelPersonCompanyRoleConditionInput = {
  personID?: ModelIDInput | null,
  companyID?: ModelIDInput | null,
  jobRoles?: ModelCompanyRoleTypeInput | null,
  isActive?: ModelBooleanInput | null,
  startDate?: ModelStringInput | null,
  endDate?: ModelStringInput | null,
  and?: Array< ModelPersonCompanyRoleConditionInput | null > | null,
  or?: Array< ModelPersonCompanyRoleConditionInput | null > | null,
  not?: ModelPersonCompanyRoleConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  personCompanyRolesId?: ModelIDInput | null,
  companyPersonRolesId?: ModelIDInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelCompanyRoleTypeInput = {
  eq?: CompanyRoleType | null,
  ne?: CompanyRoleType | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdatePersonCompanyRoleInput = {
  id: string,
  personID?: string | null,
  companyID?: string | null,
  jobRoles?: Array< CompanyRoleType | null > | null,
  isActive?: boolean | null,
  startDate?: string | null,
  endDate?: string | null,
  personCompanyRolesId?: string | null,
  companyPersonRolesId?: string | null,
};

export type DeletePersonCompanyRoleInput = {
  id: string,
};

export type CreateCompanyInput = {
  id?: string | null,
  name: string,
  website?: string | null,
};

export type ModelCompanyConditionInput = {
  name?: ModelStringInput | null,
  website?: ModelStringInput | null,
  and?: Array< ModelCompanyConditionInput | null > | null,
  or?: Array< ModelCompanyConditionInput | null > | null,
  not?: ModelCompanyConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type UpdateCompanyInput = {
  id: string,
  name?: string | null,
  website?: string | null,
};

export type DeleteCompanyInput = {
  id: string,
};

export type CreateProjectTemplateInput = {
  id?: string | null,
  name: string,
  description?: string | null,
  companyID: string,
  estimatedDuration?: number | null,
  companyProjectTemplatesId?: string | null,
  projectTemplateDefaultAddressId?: string | null,
};

export type ModelProjectTemplateConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  companyID?: ModelIDInput | null,
  estimatedDuration?: ModelIntInput | null,
  and?: Array< ModelProjectTemplateConditionInput | null > | null,
  or?: Array< ModelProjectTemplateConditionInput | null > | null,
  not?: ModelProjectTemplateConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  companyProjectTemplatesId?: ModelIDInput | null,
  projectTemplateDefaultAddressId?: ModelIDInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateProjectTemplateInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  companyID?: string | null,
  estimatedDuration?: number | null,
  companyProjectTemplatesId?: string | null,
  projectTemplateDefaultAddressId?: string | null,
};

export type DeleteProjectTemplateInput = {
  id: string,
};

export type CreateTemplateScopeItemInput = {
  id?: string | null,
  name: string,
  description?: string | null,
  parentItemID?: string | null,
  projectTemplateID: string,
  tags?: Array< string | null > | null,
  projectTemplateScopeItemsId?: string | null,
};

export type ModelTemplateScopeItemConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  parentItemID?: ModelIDInput | null,
  projectTemplateID?: ModelIDInput | null,
  tags?: ModelStringInput | null,
  and?: Array< ModelTemplateScopeItemConditionInput | null > | null,
  or?: Array< ModelTemplateScopeItemConditionInput | null > | null,
  not?: ModelTemplateScopeItemConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  projectTemplateScopeItemsId?: ModelIDInput | null,
};

export type UpdateTemplateScopeItemInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  parentItemID?: string | null,
  projectTemplateID?: string | null,
  tags?: Array< string | null > | null,
  projectTemplateScopeItemsId?: string | null,
};

export type DeleteTemplateScopeItemInput = {
  id: string,
};

export type CreateProjectMembershipInput = {
  id?: string | null,
  projectID: string,
  personID: string,
  roles: Array< string | null >,
  isActive: boolean,
  startDate?: string | null,
  endDate?: string | null,
  personProjectMembershipsId?: string | null,
  projectMembershipsId?: string | null,
};

export type ModelProjectMembershipConditionInput = {
  projectID?: ModelIDInput | null,
  personID?: ModelIDInput | null,
  roles?: ModelStringInput | null,
  isActive?: ModelBooleanInput | null,
  startDate?: ModelStringInput | null,
  endDate?: ModelStringInput | null,
  and?: Array< ModelProjectMembershipConditionInput | null > | null,
  or?: Array< ModelProjectMembershipConditionInput | null > | null,
  not?: ModelProjectMembershipConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  personProjectMembershipsId?: ModelIDInput | null,
  projectMembershipsId?: ModelIDInput | null,
};

export type UpdateProjectMembershipInput = {
  id: string,
  projectID?: string | null,
  personID?: string | null,
  roles?: Array< string | null > | null,
  isActive?: boolean | null,
  startDate?: string | null,
  endDate?: string | null,
  personProjectMembershipsId?: string | null,
  projectMembershipsId?: string | null,
};

export type DeleteProjectMembershipInput = {
  id: string,
};

export type CreateProjectInput = {
  id?: string | null,
  name: string,
  description?: string | null,
  startDate?: string | null,
  endDate?: string | null,
  companyID: string,
  templateID?: string | null,
  companyProjectsId?: string | null,
  projectTemplateProjectsId?: string | null,
  projectAddressId?: string | null,
};

export type ModelProjectConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  startDate?: ModelStringInput | null,
  endDate?: ModelStringInput | null,
  companyID?: ModelIDInput | null,
  templateID?: ModelIDInput | null,
  and?: Array< ModelProjectConditionInput | null > | null,
  or?: Array< ModelProjectConditionInput | null > | null,
  not?: ModelProjectConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  companyProjectsId?: ModelIDInput | null,
  projectTemplateProjectsId?: ModelIDInput | null,
  projectAddressId?: ModelIDInput | null,
};

export type UpdateProjectInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  startDate?: string | null,
  endDate?: string | null,
  companyID?: string | null,
  templateID?: string | null,
  companyProjectsId?: string | null,
  projectTemplateProjectsId?: string | null,
  projectAddressId?: string | null,
};

export type DeleteProjectInput = {
  id: string,
};

export type CreateScopeItemTagInput = {
  id?: string | null,
  name: string,
  description?: string | null,
  companyID: string,
  color?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  companyScopeItemTagsId?: string | null,
};

export type ModelScopeItemTagConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  companyID?: ModelIDInput | null,
  color?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelScopeItemTagConditionInput | null > | null,
  or?: Array< ModelScopeItemTagConditionInput | null > | null,
  not?: ModelScopeItemTagConditionInput | null,
  companyScopeItemTagsId?: ModelIDInput | null,
};

export type UpdateScopeItemTagInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  companyID?: string | null,
  color?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  companyScopeItemTagsId?: string | null,
};

export type DeleteScopeItemTagInput = {
  id: string,
};

export type CreateTemplateScopeItemTagInput = {
  id?: string | null,
  name: string,
  description?: string | null,
  companyID: string,
  projectTemplateID: string,
  color?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  companyTemplateScopeItemTagsId?: string | null,
  projectTemplateTemplateScopeItemTagsId?: string | null,
};

export type ModelTemplateScopeItemTagConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  companyID?: ModelIDInput | null,
  projectTemplateID?: ModelIDInput | null,
  color?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelTemplateScopeItemTagConditionInput | null > | null,
  or?: Array< ModelTemplateScopeItemTagConditionInput | null > | null,
  not?: ModelTemplateScopeItemTagConditionInput | null,
  companyTemplateScopeItemTagsId?: ModelIDInput | null,
  projectTemplateTemplateScopeItemTagsId?: ModelIDInput | null,
};

export type UpdateTemplateScopeItemTagInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  companyID?: string | null,
  projectTemplateID?: string | null,
  color?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  companyTemplateScopeItemTagsId?: string | null,
  projectTemplateTemplateScopeItemTagsId?: string | null,
};

export type DeleteTemplateScopeItemTagInput = {
  id: string,
};

export type CreateScopeItemGroupInput = {
  id?: string | null,
  name: string,
  description?: string | null,
  projectID: string,
  projectScopeItemGroupsId?: string | null,
};

export type ModelScopeItemGroupConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  projectID?: ModelIDInput | null,
  and?: Array< ModelScopeItemGroupConditionInput | null > | null,
  or?: Array< ModelScopeItemGroupConditionInput | null > | null,
  not?: ModelScopeItemGroupConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  projectScopeItemGroupsId?: ModelIDInput | null,
};

export type UpdateScopeItemGroupInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  projectID?: string | null,
  projectScopeItemGroupsId?: string | null,
};

export type DeleteScopeItemGroupInput = {
  id: string,
};

export type CreateScopeItemInput = {
  id?: string | null,
  name: string,
  description?: string | null,
  category?: string | null,
  costEstimate?: number | null,
  spendEstimate?: number | null,
  durationEstimate?: number | null,
  isCompleted?: boolean | null,
  progress?: number | null,
  tags?: Array< string | null > | null,
  parentItemID?: string | null,
  projectID: string,
  groupID?: string | null,
  projectScopeItemsId?: string | null,
  scopeItemGroupScopeItemsId?: string | null,
};

export type ModelScopeItemConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  category?: ModelStringInput | null,
  costEstimate?: ModelFloatInput | null,
  spendEstimate?: ModelFloatInput | null,
  durationEstimate?: ModelIntInput | null,
  isCompleted?: ModelBooleanInput | null,
  progress?: ModelFloatInput | null,
  tags?: ModelStringInput | null,
  parentItemID?: ModelIDInput | null,
  projectID?: ModelIDInput | null,
  groupID?: ModelIDInput | null,
  and?: Array< ModelScopeItemConditionInput | null > | null,
  or?: Array< ModelScopeItemConditionInput | null > | null,
  not?: ModelScopeItemConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  projectScopeItemsId?: ModelIDInput | null,
  scopeItemGroupScopeItemsId?: ModelIDInput | null,
};

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateScopeItemInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  category?: string | null,
  costEstimate?: number | null,
  spendEstimate?: number | null,
  durationEstimate?: number | null,
  isCompleted?: boolean | null,
  progress?: number | null,
  tags?: Array< string | null > | null,
  parentItemID?: string | null,
  projectID?: string | null,
  groupID?: string | null,
  projectScopeItemsId?: string | null,
  scopeItemGroupScopeItemsId?: string | null,
};

export type DeleteScopeItemInput = {
  id: string,
};

export type CreateAddressInput = {
  id?: string | null,
  street: string,
  city: string,
  state: string,
  postalCode: string,
  country: string,
  projectID?: string | null,
};

export type ModelAddressConditionInput = {
  street?: ModelStringInput | null,
  city?: ModelStringInput | null,
  state?: ModelStringInput | null,
  postalCode?: ModelStringInput | null,
  country?: ModelStringInput | null,
  projectID?: ModelIDInput | null,
  and?: Array< ModelAddressConditionInput | null > | null,
  or?: Array< ModelAddressConditionInput | null > | null,
  not?: ModelAddressConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type UpdateAddressInput = {
  id: string,
  street?: string | null,
  city?: string | null,
  state?: string | null,
  postalCode?: string | null,
  country?: string | null,
  projectID?: string | null,
};

export type DeleteAddressInput = {
  id: string,
};

export type CreateTagInput = {
  id?: string | null,
  name: string,
};

export type ModelTagConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelTagConditionInput | null > | null,
  or?: Array< ModelTagConditionInput | null > | null,
  not?: ModelTagConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type UpdateTagInput = {
  id: string,
  name?: string | null,
};

export type DeleteTagInput = {
  id: string,
};

export type CreateProjectFileInput = {
  id?: string | null,
  fileName: string,
  fileType: string,
  fileSize: number,
  description?: string | null,
  uploadedByID: string,
  uploadedAt: string,
  projectID: string,
  s3Object: S3ObjectInput,
  isPublic: boolean,
  width?: number | null,
  height?: number | null,
  duration?: number | null,
  thumbnailKey?: string | null,
  personUploadedFilesId?: string | null,
  projectFilesId?: string | null,
};

export type S3ObjectInput = {
  bucket: string,
  region: string,
  key: string,
  etag?: string | null,
  versionId?: string | null,
};

export type ModelProjectFileConditionInput = {
  fileName?: ModelStringInput | null,
  fileType?: ModelStringInput | null,
  fileSize?: ModelIntInput | null,
  description?: ModelStringInput | null,
  uploadedByID?: ModelIDInput | null,
  uploadedAt?: ModelStringInput | null,
  projectID?: ModelIDInput | null,
  isPublic?: ModelBooleanInput | null,
  width?: ModelIntInput | null,
  height?: ModelIntInput | null,
  duration?: ModelFloatInput | null,
  thumbnailKey?: ModelStringInput | null,
  and?: Array< ModelProjectFileConditionInput | null > | null,
  or?: Array< ModelProjectFileConditionInput | null > | null,
  not?: ModelProjectFileConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  personUploadedFilesId?: ModelIDInput | null,
  projectFilesId?: ModelIDInput | null,
};

export type UpdateProjectFileInput = {
  id: string,
  fileName?: string | null,
  fileType?: string | null,
  fileSize?: number | null,
  description?: string | null,
  uploadedByID?: string | null,
  uploadedAt?: string | null,
  projectID?: string | null,
  s3Object?: S3ObjectInput | null,
  isPublic?: boolean | null,
  width?: number | null,
  height?: number | null,
  duration?: number | null,
  thumbnailKey?: string | null,
  personUploadedFilesId?: string | null,
  projectFilesId?: string | null,
};

export type DeleteProjectFileInput = {
  id: string,
};

export type CreateAnnotationInput = {
  id?: string | null,
  pageNumber: number,
  x: number,
  y: number,
  endX?: number | null,
  endY?: number | null,
  width?: number | null,
  height?: number | null,
  radius?: number | null,
  rotation?: number | null,
  strokeWidth?: number | null,
  strokeStyle?: string | null,
  color: string,
  type: AnnotationType,
  text?: string | null,
  projectFileID: string,
  createdAt?: string | null,
  createdByID: string,
  updatedAt?: string | null,
  updatedByID?: string | null,
  projectFileAnnotationsId?: string | null,
};

export type ModelAnnotationConditionInput = {
  pageNumber?: ModelIntInput | null,
  x?: ModelFloatInput | null,
  y?: ModelFloatInput | null,
  endX?: ModelFloatInput | null,
  endY?: ModelFloatInput | null,
  width?: ModelFloatInput | null,
  height?: ModelFloatInput | null,
  radius?: ModelFloatInput | null,
  rotation?: ModelFloatInput | null,
  strokeWidth?: ModelFloatInput | null,
  strokeStyle?: ModelStringInput | null,
  color?: ModelStringInput | null,
  type?: ModelAnnotationTypeInput | null,
  text?: ModelStringInput | null,
  projectFileID?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  createdByID?: ModelIDInput | null,
  updatedAt?: ModelStringInput | null,
  updatedByID?: ModelIDInput | null,
  and?: Array< ModelAnnotationConditionInput | null > | null,
  or?: Array< ModelAnnotationConditionInput | null > | null,
  not?: ModelAnnotationConditionInput | null,
  projectFileAnnotationsId?: ModelIDInput | null,
};

export type ModelAnnotationTypeInput = {
  eq?: AnnotationType | null,
  ne?: AnnotationType | null,
};

export type UpdateAnnotationInput = {
  id: string,
  pageNumber?: number | null,
  x?: number | null,
  y?: number | null,
  endX?: number | null,
  endY?: number | null,
  width?: number | null,
  height?: number | null,
  radius?: number | null,
  rotation?: number | null,
  strokeWidth?: number | null,
  strokeStyle?: string | null,
  color?: string | null,
  type?: AnnotationType | null,
  text?: string | null,
  projectFileID?: string | null,
  createdAt?: string | null,
  createdByID?: string | null,
  updatedAt?: string | null,
  updatedByID?: string | null,
  projectFileAnnotationsId?: string | null,
};

export type DeleteAnnotationInput = {
  id: string,
};

export type CreateNotificationInput = {
  id?: string | null,
  type: NotificationType,
  messageTemplate: string,
  status: NotificationStatus,
  schedule: Array< NotificationScheduleInput | null >,
  projectID?: string | null,
  projectTemplateNotificationSettingsId?: string | null,
  projectNotificationsId?: string | null,
};

export type NotificationScheduleInput = {
  date: string,
  time: string,
  isRecurring: boolean,
  frequency?: string | null,
  interval?: number | null,
  daysOfWeek?: Array< string | null > | null,
  endDate?: string | null,
  runCount?: number | null,
  maxRuns?: number | null,
};

export type ModelNotificationConditionInput = {
  type?: ModelNotificationTypeInput | null,
  messageTemplate?: ModelStringInput | null,
  status?: ModelNotificationStatusInput | null,
  projectID?: ModelIDInput | null,
  and?: Array< ModelNotificationConditionInput | null > | null,
  or?: Array< ModelNotificationConditionInput | null > | null,
  not?: ModelNotificationConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  projectTemplateNotificationSettingsId?: ModelIDInput | null,
  projectNotificationsId?: ModelIDInput | null,
};

export type ModelNotificationTypeInput = {
  eq?: NotificationType | null,
  ne?: NotificationType | null,
};

export type ModelNotificationStatusInput = {
  eq?: NotificationStatus | null,
  ne?: NotificationStatus | null,
};

export type UpdateNotificationInput = {
  id: string,
  type?: NotificationType | null,
  messageTemplate?: string | null,
  status?: NotificationStatus | null,
  schedule?: Array< NotificationScheduleInput | null > | null,
  projectID?: string | null,
  projectTemplateNotificationSettingsId?: string | null,
  projectNotificationsId?: string | null,
};

export type DeleteNotificationInput = {
  id: string,
};

export type CreateGroupChatInput = {
  id?: string | null,
  name: string,
  chatType: ChatType,
  createdAt?: string | null,
  updatedAt?: string | null,
  status: ChatStatus,
  isDeleted: boolean,
  messageLimit?: number | null,
  lastMessageAt?: string | null,
  companyID: string,
  projectID?: string | null,
  scopeItemID?: string | null,
  companyChatsId?: string | null,
  projectChatsId?: string | null,
  scopeItemChatsId?: string | null,
};

export type ModelGroupChatConditionInput = {
  name?: ModelStringInput | null,
  chatType?: ModelChatTypeInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  status?: ModelChatStatusInput | null,
  isDeleted?: ModelBooleanInput | null,
  messageLimit?: ModelIntInput | null,
  lastMessageAt?: ModelStringInput | null,
  companyID?: ModelIDInput | null,
  projectID?: ModelIDInput | null,
  scopeItemID?: ModelIDInput | null,
  and?: Array< ModelGroupChatConditionInput | null > | null,
  or?: Array< ModelGroupChatConditionInput | null > | null,
  not?: ModelGroupChatConditionInput | null,
  companyChatsId?: ModelIDInput | null,
  projectChatsId?: ModelIDInput | null,
  scopeItemChatsId?: ModelIDInput | null,
};

export type ModelChatTypeInput = {
  eq?: ChatType | null,
  ne?: ChatType | null,
};

export type ModelChatStatusInput = {
  eq?: ChatStatus | null,
  ne?: ChatStatus | null,
};

export type UpdateGroupChatInput = {
  id: string,
  name?: string | null,
  chatType?: ChatType | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  status?: ChatStatus | null,
  isDeleted?: boolean | null,
  messageLimit?: number | null,
  lastMessageAt?: string | null,
  companyID?: string | null,
  projectID?: string | null,
  scopeItemID?: string | null,
  companyChatsId?: string | null,
  projectChatsId?: string | null,
  scopeItemChatsId?: string | null,
};

export type DeleteGroupChatInput = {
  id: string,
};

export type CreateGroupChatMessageInput = {
  id?: string | null,
  content: string,
  chatID: string,
  senderID: string,
  timestamp: string,
  isEdited: boolean,
  editedAt?: string | null,
  personSentMessagesId?: string | null,
  groupChatMessagesId?: string | null,
};

export type ModelGroupChatMessageConditionInput = {
  content?: ModelStringInput | null,
  chatID?: ModelIDInput | null,
  senderID?: ModelIDInput | null,
  timestamp?: ModelStringInput | null,
  isEdited?: ModelBooleanInput | null,
  editedAt?: ModelStringInput | null,
  and?: Array< ModelGroupChatMessageConditionInput | null > | null,
  or?: Array< ModelGroupChatMessageConditionInput | null > | null,
  not?: ModelGroupChatMessageConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  personSentMessagesId?: ModelIDInput | null,
  groupChatMessagesId?: ModelIDInput | null,
};

export type UpdateGroupChatMessageInput = {
  id: string,
  content?: string | null,
  chatID?: string | null,
  senderID?: string | null,
  timestamp?: string | null,
  isEdited?: boolean | null,
  editedAt?: string | null,
  personSentMessagesId?: string | null,
  groupChatMessagesId?: string | null,
};

export type DeleteGroupChatMessageInput = {
  id: string,
};

export type CreateChatAttachmentInput = {
  id?: string | null,
  fileName: string,
  fileType: string,
  fileSize: number,
  s3Object: S3ObjectInput,
  uploadedAt: string,
  width?: number | null,
  height?: number | null,
  duration?: number | null,
  thumbnailKey?: string | null,
  messageID: string,
  groupChatMessageAttachmentsId?: string | null,
};

export type ModelChatAttachmentConditionInput = {
  fileName?: ModelStringInput | null,
  fileType?: ModelStringInput | null,
  fileSize?: ModelIntInput | null,
  uploadedAt?: ModelStringInput | null,
  width?: ModelIntInput | null,
  height?: ModelIntInput | null,
  duration?: ModelFloatInput | null,
  thumbnailKey?: ModelStringInput | null,
  messageID?: ModelIDInput | null,
  and?: Array< ModelChatAttachmentConditionInput | null > | null,
  or?: Array< ModelChatAttachmentConditionInput | null > | null,
  not?: ModelChatAttachmentConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  groupChatMessageAttachmentsId?: ModelIDInput | null,
};

export type UpdateChatAttachmentInput = {
  id: string,
  fileName?: string | null,
  fileType?: string | null,
  fileSize?: number | null,
  s3Object?: S3ObjectInput | null,
  uploadedAt?: string | null,
  width?: number | null,
  height?: number | null,
  duration?: number | null,
  thumbnailKey?: string | null,
  messageID?: string | null,
  groupChatMessageAttachmentsId?: string | null,
};

export type DeleteChatAttachmentInput = {
  id: string,
};

export type CreatePersonCompaniesInput = {
  id?: string | null,
  personId: string,
  companyId: string,
};

export type ModelPersonCompaniesConditionInput = {
  personId?: ModelIDInput | null,
  companyId?: ModelIDInput | null,
  and?: Array< ModelPersonCompaniesConditionInput | null > | null,
  or?: Array< ModelPersonCompaniesConditionInput | null > | null,
  not?: ModelPersonCompaniesConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  cognitoUsername?: ModelStringInput | null,
};

export type UpdatePersonCompaniesInput = {
  id: string,
  personId?: string | null,
  companyId?: string | null,
};

export type DeletePersonCompaniesInput = {
  id: string,
};

export type CreateProjectPeopleInput = {
  id?: string | null,
  personId: string,
  projectId: string,
};

export type ModelProjectPeopleConditionInput = {
  personId?: ModelIDInput | null,
  projectId?: ModelIDInput | null,
  and?: Array< ModelProjectPeopleConditionInput | null > | null,
  or?: Array< ModelProjectPeopleConditionInput | null > | null,
  not?: ModelProjectPeopleConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  cognitoUsername?: ModelStringInput | null,
};

export type UpdateProjectPeopleInput = {
  id: string,
  personId?: string | null,
  projectId?: string | null,
};

export type DeleteProjectPeopleInput = {
  id: string,
};

export type CreateChatParticipantsInput = {
  id?: string | null,
  personId: string,
  groupChatId: string,
};

export type ModelChatParticipantsConditionInput = {
  personId?: ModelIDInput | null,
  groupChatId?: ModelIDInput | null,
  and?: Array< ModelChatParticipantsConditionInput | null > | null,
  or?: Array< ModelChatParticipantsConditionInput | null > | null,
  not?: ModelChatParticipantsConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  cognitoUsername?: ModelStringInput | null,
};

export type UpdateChatParticipantsInput = {
  id: string,
  personId?: string | null,
  groupChatId?: string | null,
};

export type DeleteChatParticipantsInput = {
  id: string,
};

export type CreateProjectFileTagInput = {
  id?: string | null,
  tagId: string,
  projectFileId: string,
};

export type ModelProjectFileTagConditionInput = {
  tagId?: ModelIDInput | null,
  projectFileId?: ModelIDInput | null,
  and?: Array< ModelProjectFileTagConditionInput | null > | null,
  or?: Array< ModelProjectFileTagConditionInput | null > | null,
  not?: ModelProjectFileTagConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type UpdateProjectFileTagInput = {
  id: string,
  tagId?: string | null,
  projectFileId?: string | null,
};

export type DeleteProjectFileTagInput = {
  id: string,
};

export type ModelPersonFilterInput = {
  id?: ModelIDInput | null,
  cognitoUsername?: ModelStringInput | null,
  cognitoSub?: ModelStringInput | null,
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  email?: ModelStringInput | null,
  status?: ModelStringInput | null,
  phone?: ModelStringInput | null,
  invitedAt?: ModelStringInput | null,
  displayName?: ModelStringInput | null,
  jobSkills?: ModelStringInput | null,
  notes?: ModelStringInput | null,
  timezone?: ModelStringInput | null,
  language?: ModelStringInput | null,
  lastActive?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelPersonFilterInput | null > | null,
  or?: Array< ModelPersonFilterInput | null > | null,
  not?: ModelPersonFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelPersonConnection = {
  __typename: "ModelPersonConnection",
  items:  Array<Person | null >,
  nextToken?: string | null,
};

export type ModelPersonCompanyRoleFilterInput = {
  id?: ModelIDInput | null,
  personID?: ModelIDInput | null,
  companyID?: ModelIDInput | null,
  jobRoles?: ModelCompanyRoleTypeInput | null,
  isActive?: ModelBooleanInput | null,
  startDate?: ModelStringInput | null,
  endDate?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelPersonCompanyRoleFilterInput | null > | null,
  or?: Array< ModelPersonCompanyRoleFilterInput | null > | null,
  not?: ModelPersonCompanyRoleFilterInput | null,
  personCompanyRolesId?: ModelIDInput | null,
  companyPersonRolesId?: ModelIDInput | null,
};

export type ModelCompanyFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  website?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelCompanyFilterInput | null > | null,
  or?: Array< ModelCompanyFilterInput | null > | null,
  not?: ModelCompanyFilterInput | null,
};

export type ModelCompanyConnection = {
  __typename: "ModelCompanyConnection",
  items:  Array<Company | null >,
  nextToken?: string | null,
};

export type ModelProjectTemplateFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  companyID?: ModelIDInput | null,
  estimatedDuration?: ModelIntInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelProjectTemplateFilterInput | null > | null,
  or?: Array< ModelProjectTemplateFilterInput | null > | null,
  not?: ModelProjectTemplateFilterInput | null,
  companyProjectTemplatesId?: ModelIDInput | null,
  projectTemplateDefaultAddressId?: ModelIDInput | null,
};

export type ModelTemplateScopeItemFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  parentItemID?: ModelIDInput | null,
  projectTemplateID?: ModelIDInput | null,
  tags?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelTemplateScopeItemFilterInput | null > | null,
  or?: Array< ModelTemplateScopeItemFilterInput | null > | null,
  not?: ModelTemplateScopeItemFilterInput | null,
  projectTemplateScopeItemsId?: ModelIDInput | null,
};

export type ModelProjectMembershipFilterInput = {
  id?: ModelIDInput | null,
  projectID?: ModelIDInput | null,
  personID?: ModelIDInput | null,
  roles?: ModelStringInput | null,
  isActive?: ModelBooleanInput | null,
  startDate?: ModelStringInput | null,
  endDate?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelProjectMembershipFilterInput | null > | null,
  or?: Array< ModelProjectMembershipFilterInput | null > | null,
  not?: ModelProjectMembershipFilterInput | null,
  personProjectMembershipsId?: ModelIDInput | null,
  projectMembershipsId?: ModelIDInput | null,
};

export type ModelProjectFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  startDate?: ModelStringInput | null,
  endDate?: ModelStringInput | null,
  companyID?: ModelIDInput | null,
  templateID?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelProjectFilterInput | null > | null,
  or?: Array< ModelProjectFilterInput | null > | null,
  not?: ModelProjectFilterInput | null,
  companyProjectsId?: ModelIDInput | null,
  projectTemplateProjectsId?: ModelIDInput | null,
  projectAddressId?: ModelIDInput | null,
};

export type ModelScopeItemTagFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  companyID?: ModelIDInput | null,
  color?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelScopeItemTagFilterInput | null > | null,
  or?: Array< ModelScopeItemTagFilterInput | null > | null,
  not?: ModelScopeItemTagFilterInput | null,
  companyScopeItemTagsId?: ModelIDInput | null,
};

export type ModelTemplateScopeItemTagFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  companyID?: ModelIDInput | null,
  projectTemplateID?: ModelIDInput | null,
  color?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelTemplateScopeItemTagFilterInput | null > | null,
  or?: Array< ModelTemplateScopeItemTagFilterInput | null > | null,
  not?: ModelTemplateScopeItemTagFilterInput | null,
  companyTemplateScopeItemTagsId?: ModelIDInput | null,
  projectTemplateTemplateScopeItemTagsId?: ModelIDInput | null,
};

export type ModelScopeItemGroupFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  projectID?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelScopeItemGroupFilterInput | null > | null,
  or?: Array< ModelScopeItemGroupFilterInput | null > | null,
  not?: ModelScopeItemGroupFilterInput | null,
  projectScopeItemGroupsId?: ModelIDInput | null,
};

export type ModelScopeItemFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  category?: ModelStringInput | null,
  costEstimate?: ModelFloatInput | null,
  spendEstimate?: ModelFloatInput | null,
  durationEstimate?: ModelIntInput | null,
  isCompleted?: ModelBooleanInput | null,
  progress?: ModelFloatInput | null,
  tags?: ModelStringInput | null,
  parentItemID?: ModelIDInput | null,
  projectID?: ModelIDInput | null,
  groupID?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelScopeItemFilterInput | null > | null,
  or?: Array< ModelScopeItemFilterInput | null > | null,
  not?: ModelScopeItemFilterInput | null,
  projectScopeItemsId?: ModelIDInput | null,
  scopeItemGroupScopeItemsId?: ModelIDInput | null,
};

export type ModelAddressFilterInput = {
  id?: ModelIDInput | null,
  street?: ModelStringInput | null,
  city?: ModelStringInput | null,
  state?: ModelStringInput | null,
  postalCode?: ModelStringInput | null,
  country?: ModelStringInput | null,
  projectID?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelAddressFilterInput | null > | null,
  or?: Array< ModelAddressFilterInput | null > | null,
  not?: ModelAddressFilterInput | null,
};

export type ModelAddressConnection = {
  __typename: "ModelAddressConnection",
  items:  Array<Address | null >,
  nextToken?: string | null,
};

export type ModelTagFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelTagFilterInput | null > | null,
  or?: Array< ModelTagFilterInput | null > | null,
  not?: ModelTagFilterInput | null,
};

export type ModelTagConnection = {
  __typename: "ModelTagConnection",
  items:  Array<Tag | null >,
  nextToken?: string | null,
};

export type ModelProjectFileFilterInput = {
  id?: ModelIDInput | null,
  fileName?: ModelStringInput | null,
  fileType?: ModelStringInput | null,
  fileSize?: ModelIntInput | null,
  description?: ModelStringInput | null,
  uploadedByID?: ModelIDInput | null,
  uploadedAt?: ModelStringInput | null,
  projectID?: ModelIDInput | null,
  isPublic?: ModelBooleanInput | null,
  width?: ModelIntInput | null,
  height?: ModelIntInput | null,
  duration?: ModelFloatInput | null,
  thumbnailKey?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelProjectFileFilterInput | null > | null,
  or?: Array< ModelProjectFileFilterInput | null > | null,
  not?: ModelProjectFileFilterInput | null,
  personUploadedFilesId?: ModelIDInput | null,
  projectFilesId?: ModelIDInput | null,
};

export type ModelAnnotationFilterInput = {
  id?: ModelIDInput | null,
  pageNumber?: ModelIntInput | null,
  x?: ModelFloatInput | null,
  y?: ModelFloatInput | null,
  endX?: ModelFloatInput | null,
  endY?: ModelFloatInput | null,
  width?: ModelFloatInput | null,
  height?: ModelFloatInput | null,
  radius?: ModelFloatInput | null,
  rotation?: ModelFloatInput | null,
  strokeWidth?: ModelFloatInput | null,
  strokeStyle?: ModelStringInput | null,
  color?: ModelStringInput | null,
  type?: ModelAnnotationTypeInput | null,
  text?: ModelStringInput | null,
  projectFileID?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  createdByID?: ModelIDInput | null,
  updatedAt?: ModelStringInput | null,
  updatedByID?: ModelIDInput | null,
  and?: Array< ModelAnnotationFilterInput | null > | null,
  or?: Array< ModelAnnotationFilterInput | null > | null,
  not?: ModelAnnotationFilterInput | null,
  projectFileAnnotationsId?: ModelIDInput | null,
};

export type ModelNotificationFilterInput = {
  id?: ModelIDInput | null,
  type?: ModelNotificationTypeInput | null,
  messageTemplate?: ModelStringInput | null,
  status?: ModelNotificationStatusInput | null,
  projectID?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelNotificationFilterInput | null > | null,
  or?: Array< ModelNotificationFilterInput | null > | null,
  not?: ModelNotificationFilterInput | null,
  projectTemplateNotificationSettingsId?: ModelIDInput | null,
  projectNotificationsId?: ModelIDInput | null,
};

export type ModelGroupChatFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  chatType?: ModelChatTypeInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  status?: ModelChatStatusInput | null,
  isDeleted?: ModelBooleanInput | null,
  messageLimit?: ModelIntInput | null,
  lastMessageAt?: ModelStringInput | null,
  companyID?: ModelIDInput | null,
  projectID?: ModelIDInput | null,
  scopeItemID?: ModelIDInput | null,
  and?: Array< ModelGroupChatFilterInput | null > | null,
  or?: Array< ModelGroupChatFilterInput | null > | null,
  not?: ModelGroupChatFilterInput | null,
  companyChatsId?: ModelIDInput | null,
  projectChatsId?: ModelIDInput | null,
  scopeItemChatsId?: ModelIDInput | null,
};

export type ModelGroupChatMessageFilterInput = {
  id?: ModelIDInput | null,
  content?: ModelStringInput | null,
  chatID?: ModelIDInput | null,
  senderID?: ModelIDInput | null,
  timestamp?: ModelStringInput | null,
  isEdited?: ModelBooleanInput | null,
  editedAt?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelGroupChatMessageFilterInput | null > | null,
  or?: Array< ModelGroupChatMessageFilterInput | null > | null,
  not?: ModelGroupChatMessageFilterInput | null,
  personSentMessagesId?: ModelIDInput | null,
  groupChatMessagesId?: ModelIDInput | null,
};

export type ModelChatAttachmentFilterInput = {
  id?: ModelIDInput | null,
  fileName?: ModelStringInput | null,
  fileType?: ModelStringInput | null,
  fileSize?: ModelIntInput | null,
  uploadedAt?: ModelStringInput | null,
  width?: ModelIntInput | null,
  height?: ModelIntInput | null,
  duration?: ModelFloatInput | null,
  thumbnailKey?: ModelStringInput | null,
  messageID?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelChatAttachmentFilterInput | null > | null,
  or?: Array< ModelChatAttachmentFilterInput | null > | null,
  not?: ModelChatAttachmentFilterInput | null,
  groupChatMessageAttachmentsId?: ModelIDInput | null,
};

export type ModelPersonCompaniesFilterInput = {
  id?: ModelIDInput | null,
  personId?: ModelIDInput | null,
  companyId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelPersonCompaniesFilterInput | null > | null,
  or?: Array< ModelPersonCompaniesFilterInput | null > | null,
  not?: ModelPersonCompaniesFilterInput | null,
  cognitoUsername?: ModelStringInput | null,
};

export type ModelProjectPeopleFilterInput = {
  id?: ModelIDInput | null,
  personId?: ModelIDInput | null,
  projectId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelProjectPeopleFilterInput | null > | null,
  or?: Array< ModelProjectPeopleFilterInput | null > | null,
  not?: ModelProjectPeopleFilterInput | null,
  cognitoUsername?: ModelStringInput | null,
};

export type ModelChatParticipantsFilterInput = {
  id?: ModelIDInput | null,
  personId?: ModelIDInput | null,
  groupChatId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelChatParticipantsFilterInput | null > | null,
  or?: Array< ModelChatParticipantsFilterInput | null > | null,
  not?: ModelChatParticipantsFilterInput | null,
  cognitoUsername?: ModelStringInput | null,
};

export type ModelProjectFileTagFilterInput = {
  id?: ModelIDInput | null,
  tagId?: ModelIDInput | null,
  projectFileId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelProjectFileTagFilterInput | null > | null,
  or?: Array< ModelProjectFileTagFilterInput | null > | null,
  not?: ModelProjectFileTagFilterInput | null,
};

export type ModelStringKeyConditionInput = {
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelSubscriptionPersonFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  cognitoSub?: ModelSubscriptionStringInput | null,
  firstName?: ModelSubscriptionStringInput | null,
  lastName?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  status?: ModelSubscriptionStringInput | null,
  phone?: ModelSubscriptionStringInput | null,
  invitedAt?: ModelSubscriptionStringInput | null,
  displayName?: ModelSubscriptionStringInput | null,
  jobSkills?: ModelSubscriptionStringInput | null,
  notes?: ModelSubscriptionStringInput | null,
  timezone?: ModelSubscriptionStringInput | null,
  language?: ModelSubscriptionStringInput | null,
  lastActive?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionPersonFilterInput | null > | null,
  or?: Array< ModelSubscriptionPersonFilterInput | null > | null,
  personCompanyRolesId?: ModelSubscriptionIDInput | null,
  personProjectMembershipsId?: ModelSubscriptionIDInput | null,
  personUploadedFilesId?: ModelSubscriptionIDInput | null,
  personSentMessagesId?: ModelSubscriptionIDInput | null,
  cognitoUsername?: ModelStringInput | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionPersonCompanyRoleFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  personID?: ModelSubscriptionIDInput | null,
  companyID?: ModelSubscriptionIDInput | null,
  jobRoles?: ModelSubscriptionStringInput | null,
  isActive?: ModelSubscriptionBooleanInput | null,
  startDate?: ModelSubscriptionStringInput | null,
  endDate?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionPersonCompanyRoleFilterInput | null > | null,
  or?: Array< ModelSubscriptionPersonCompanyRoleFilterInput | null > | null,
};

export type ModelSubscriptionBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
};

export type ModelSubscriptionCompanyFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  website?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionCompanyFilterInput | null > | null,
  or?: Array< ModelSubscriptionCompanyFilterInput | null > | null,
  companyPersonRolesId?: ModelSubscriptionIDInput | null,
  companyProjectsId?: ModelSubscriptionIDInput | null,
  companyProjectTemplatesId?: ModelSubscriptionIDInput | null,
  companyScopeItemTagsId?: ModelSubscriptionIDInput | null,
  companyTemplateScopeItemTagsId?: ModelSubscriptionIDInput | null,
  companyChatsId?: ModelSubscriptionIDInput | null,
};

export type ModelSubscriptionProjectTemplateFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  companyID?: ModelSubscriptionIDInput | null,
  estimatedDuration?: ModelSubscriptionIntInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionProjectTemplateFilterInput | null > | null,
  or?: Array< ModelSubscriptionProjectTemplateFilterInput | null > | null,
  projectTemplateProjectsId?: ModelSubscriptionIDInput | null,
  projectTemplateScopeItemsId?: ModelSubscriptionIDInput | null,
  projectTemplateTemplateScopeItemTagsId?: ModelSubscriptionIDInput | null,
  projectTemplateNotificationSettingsId?: ModelSubscriptionIDInput | null,
  projectTemplateDefaultAddressId?: ModelSubscriptionIDInput | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionTemplateScopeItemFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  parentItemID?: ModelSubscriptionIDInput | null,
  projectTemplateID?: ModelSubscriptionIDInput | null,
  tags?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionTemplateScopeItemFilterInput | null > | null,
  or?: Array< ModelSubscriptionTemplateScopeItemFilterInput | null > | null,
};

export type ModelSubscriptionProjectMembershipFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  projectID?: ModelSubscriptionIDInput | null,
  personID?: ModelSubscriptionIDInput | null,
  roles?: ModelSubscriptionStringInput | null,
  isActive?: ModelSubscriptionBooleanInput | null,
  startDate?: ModelSubscriptionStringInput | null,
  endDate?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionProjectMembershipFilterInput | null > | null,
  or?: Array< ModelSubscriptionProjectMembershipFilterInput | null > | null,
};

export type ModelSubscriptionProjectFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  startDate?: ModelSubscriptionStringInput | null,
  endDate?: ModelSubscriptionStringInput | null,
  companyID?: ModelSubscriptionIDInput | null,
  templateID?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionProjectFilterInput | null > | null,
  or?: Array< ModelSubscriptionProjectFilterInput | null > | null,
  projectMembershipsId?: ModelSubscriptionIDInput | null,
  projectFilesId?: ModelSubscriptionIDInput | null,
  projectNotificationsId?: ModelSubscriptionIDInput | null,
  projectChatsId?: ModelSubscriptionIDInput | null,
  projectScopeItemsId?: ModelSubscriptionIDInput | null,
  projectScopeItemGroupsId?: ModelSubscriptionIDInput | null,
  projectAddressId?: ModelSubscriptionIDInput | null,
};

export type ModelSubscriptionScopeItemTagFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  companyID?: ModelSubscriptionIDInput | null,
  color?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionScopeItemTagFilterInput | null > | null,
  or?: Array< ModelSubscriptionScopeItemTagFilterInput | null > | null,
};

export type ModelSubscriptionTemplateScopeItemTagFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  companyID?: ModelSubscriptionIDInput | null,
  projectTemplateID?: ModelSubscriptionIDInput | null,
  color?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionTemplateScopeItemTagFilterInput | null > | null,
  or?: Array< ModelSubscriptionTemplateScopeItemTagFilterInput | null > | null,
};

export type ModelSubscriptionScopeItemGroupFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  projectID?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionScopeItemGroupFilterInput | null > | null,
  or?: Array< ModelSubscriptionScopeItemGroupFilterInput | null > | null,
  scopeItemGroupScopeItemsId?: ModelSubscriptionIDInput | null,
};

export type ModelSubscriptionScopeItemFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  category?: ModelSubscriptionStringInput | null,
  costEstimate?: ModelSubscriptionFloatInput | null,
  spendEstimate?: ModelSubscriptionFloatInput | null,
  durationEstimate?: ModelSubscriptionIntInput | null,
  isCompleted?: ModelSubscriptionBooleanInput | null,
  progress?: ModelSubscriptionFloatInput | null,
  tags?: ModelSubscriptionStringInput | null,
  parentItemID?: ModelSubscriptionIDInput | null,
  projectID?: ModelSubscriptionIDInput | null,
  groupID?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionScopeItemFilterInput | null > | null,
  or?: Array< ModelSubscriptionScopeItemFilterInput | null > | null,
  scopeItemChatsId?: ModelSubscriptionIDInput | null,
};

export type ModelSubscriptionFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionAddressFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  street?: ModelSubscriptionStringInput | null,
  city?: ModelSubscriptionStringInput | null,
  state?: ModelSubscriptionStringInput | null,
  postalCode?: ModelSubscriptionStringInput | null,
  country?: ModelSubscriptionStringInput | null,
  projectID?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionAddressFilterInput | null > | null,
  or?: Array< ModelSubscriptionAddressFilterInput | null > | null,
};

export type ModelSubscriptionTagFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionTagFilterInput | null > | null,
  or?: Array< ModelSubscriptionTagFilterInput | null > | null,
};

export type ModelSubscriptionProjectFileFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  fileName?: ModelSubscriptionStringInput | null,
  fileType?: ModelSubscriptionStringInput | null,
  fileSize?: ModelSubscriptionIntInput | null,
  description?: ModelSubscriptionStringInput | null,
  uploadedByID?: ModelSubscriptionIDInput | null,
  uploadedAt?: ModelSubscriptionStringInput | null,
  projectID?: ModelSubscriptionIDInput | null,
  isPublic?: ModelSubscriptionBooleanInput | null,
  width?: ModelSubscriptionIntInput | null,
  height?: ModelSubscriptionIntInput | null,
  duration?: ModelSubscriptionFloatInput | null,
  thumbnailKey?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionProjectFileFilterInput | null > | null,
  or?: Array< ModelSubscriptionProjectFileFilterInput | null > | null,
  projectFileAnnotationsId?: ModelSubscriptionIDInput | null,
};

export type ModelSubscriptionAnnotationFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  pageNumber?: ModelSubscriptionIntInput | null,
  x?: ModelSubscriptionFloatInput | null,
  y?: ModelSubscriptionFloatInput | null,
  endX?: ModelSubscriptionFloatInput | null,
  endY?: ModelSubscriptionFloatInput | null,
  width?: ModelSubscriptionFloatInput | null,
  height?: ModelSubscriptionFloatInput | null,
  radius?: ModelSubscriptionFloatInput | null,
  rotation?: ModelSubscriptionFloatInput | null,
  strokeWidth?: ModelSubscriptionFloatInput | null,
  strokeStyle?: ModelSubscriptionStringInput | null,
  color?: ModelSubscriptionStringInput | null,
  type?: ModelSubscriptionStringInput | null,
  text?: ModelSubscriptionStringInput | null,
  projectFileID?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  createdByID?: ModelSubscriptionIDInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  updatedByID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionAnnotationFilterInput | null > | null,
  or?: Array< ModelSubscriptionAnnotationFilterInput | null > | null,
};

export type ModelSubscriptionNotificationFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  type?: ModelSubscriptionStringInput | null,
  messageTemplate?: ModelSubscriptionStringInput | null,
  status?: ModelSubscriptionStringInput | null,
  projectID?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionNotificationFilterInput | null > | null,
  or?: Array< ModelSubscriptionNotificationFilterInput | null > | null,
};

export type ModelSubscriptionGroupChatFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  chatType?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  status?: ModelSubscriptionStringInput | null,
  isDeleted?: ModelSubscriptionBooleanInput | null,
  messageLimit?: ModelSubscriptionIntInput | null,
  lastMessageAt?: ModelSubscriptionStringInput | null,
  companyID?: ModelSubscriptionIDInput | null,
  projectID?: ModelSubscriptionIDInput | null,
  scopeItemID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionGroupChatFilterInput | null > | null,
  or?: Array< ModelSubscriptionGroupChatFilterInput | null > | null,
  groupChatMessagesId?: ModelSubscriptionIDInput | null,
};

export type ModelSubscriptionGroupChatMessageFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  content?: ModelSubscriptionStringInput | null,
  chatID?: ModelSubscriptionIDInput | null,
  timestamp?: ModelSubscriptionStringInput | null,
  isEdited?: ModelSubscriptionBooleanInput | null,
  editedAt?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionGroupChatMessageFilterInput | null > | null,
  or?: Array< ModelSubscriptionGroupChatMessageFilterInput | null > | null,
  groupChatMessageAttachmentsId?: ModelSubscriptionIDInput | null,
  senderID?: ModelStringInput | null,
};

export type ModelSubscriptionChatAttachmentFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  fileName?: ModelSubscriptionStringInput | null,
  fileType?: ModelSubscriptionStringInput | null,
  fileSize?: ModelSubscriptionIntInput | null,
  uploadedAt?: ModelSubscriptionStringInput | null,
  width?: ModelSubscriptionIntInput | null,
  height?: ModelSubscriptionIntInput | null,
  duration?: ModelSubscriptionFloatInput | null,
  thumbnailKey?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionChatAttachmentFilterInput | null > | null,
  or?: Array< ModelSubscriptionChatAttachmentFilterInput | null > | null,
  messageID?: ModelStringInput | null,
};

export type ModelSubscriptionPersonCompaniesFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  personId?: ModelSubscriptionIDInput | null,
  companyId?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionPersonCompaniesFilterInput | null > | null,
  or?: Array< ModelSubscriptionPersonCompaniesFilterInput | null > | null,
  cognitoUsername?: ModelStringInput | null,
};

export type ModelSubscriptionProjectPeopleFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  personId?: ModelSubscriptionIDInput | null,
  projectId?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionProjectPeopleFilterInput | null > | null,
  or?: Array< ModelSubscriptionProjectPeopleFilterInput | null > | null,
  cognitoUsername?: ModelStringInput | null,
};

export type ModelSubscriptionChatParticipantsFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  personId?: ModelSubscriptionIDInput | null,
  groupChatId?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionChatParticipantsFilterInput | null > | null,
  or?: Array< ModelSubscriptionChatParticipantsFilterInput | null > | null,
  cognitoUsername?: ModelStringInput | null,
};

export type ModelSubscriptionProjectFileTagFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  tagId?: ModelSubscriptionIDInput | null,
  projectFileId?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionProjectFileTagFilterInput | null > | null,
  or?: Array< ModelSubscriptionProjectFileTagFilterInput | null > | null,
};

export type CreatePersonMutationVariables = {
  input: CreatePersonInput,
  condition?: ModelPersonConditionInput | null,
};

export type CreatePersonMutation = {
  createPerson?:  {
    __typename: "Person",
    id: string,
    cognitoUsername?: string | null,
    cognitoSub?: string | null,
    firstName?: string | null,
    lastName?: string | null,
    email: string,
    status?: string | null,
    phone?: string | null,
    invitedAt?: string | null,
    displayName?: string | null,
    jobSkills?: Array< string | null > | null,
    companyRoles?:  {
      __typename: "ModelPersonCompanyRoleConnection",
      nextToken?: string | null,
    } | null,
    companies?:  {
      __typename: "ModelPersonCompaniesConnection",
      nextToken?: string | null,
    } | null,
    projects?:  {
      __typename: "ModelProjectPeopleConnection",
      nextToken?: string | null,
    } | null,
    projectMemberships?:  {
      __typename: "ModelProjectMembershipConnection",
      nextToken?: string | null,
    } | null,
    uploadedFiles?:  {
      __typename: "ModelProjectFileConnection",
      nextToken?: string | null,
    } | null,
    chats?:  {
      __typename: "ModelChatParticipantsConnection",
      nextToken?: string | null,
    } | null,
    sentMessages?:  {
      __typename: "ModelGroupChatMessageConnection",
      nextToken?: string | null,
    } | null,
    notes?: string | null,
    timezone?: string | null,
    language?: string | null,
    lastActive?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdatePersonMutationVariables = {
  input: UpdatePersonInput,
  condition?: ModelPersonConditionInput | null,
};

export type UpdatePersonMutation = {
  updatePerson?:  {
    __typename: "Person",
    id: string,
    cognitoUsername?: string | null,
    cognitoSub?: string | null,
    firstName?: string | null,
    lastName?: string | null,
    email: string,
    status?: string | null,
    phone?: string | null,
    invitedAt?: string | null,
    displayName?: string | null,
    jobSkills?: Array< string | null > | null,
    companyRoles?:  {
      __typename: "ModelPersonCompanyRoleConnection",
      nextToken?: string | null,
    } | null,
    companies?:  {
      __typename: "ModelPersonCompaniesConnection",
      nextToken?: string | null,
    } | null,
    projects?:  {
      __typename: "ModelProjectPeopleConnection",
      nextToken?: string | null,
    } | null,
    projectMemberships?:  {
      __typename: "ModelProjectMembershipConnection",
      nextToken?: string | null,
    } | null,
    uploadedFiles?:  {
      __typename: "ModelProjectFileConnection",
      nextToken?: string | null,
    } | null,
    chats?:  {
      __typename: "ModelChatParticipantsConnection",
      nextToken?: string | null,
    } | null,
    sentMessages?:  {
      __typename: "ModelGroupChatMessageConnection",
      nextToken?: string | null,
    } | null,
    notes?: string | null,
    timezone?: string | null,
    language?: string | null,
    lastActive?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeletePersonMutationVariables = {
  input: DeletePersonInput,
  condition?: ModelPersonConditionInput | null,
};

export type DeletePersonMutation = {
  deletePerson?:  {
    __typename: "Person",
    id: string,
    cognitoUsername?: string | null,
    cognitoSub?: string | null,
    firstName?: string | null,
    lastName?: string | null,
    email: string,
    status?: string | null,
    phone?: string | null,
    invitedAt?: string | null,
    displayName?: string | null,
    jobSkills?: Array< string | null > | null,
    companyRoles?:  {
      __typename: "ModelPersonCompanyRoleConnection",
      nextToken?: string | null,
    } | null,
    companies?:  {
      __typename: "ModelPersonCompaniesConnection",
      nextToken?: string | null,
    } | null,
    projects?:  {
      __typename: "ModelProjectPeopleConnection",
      nextToken?: string | null,
    } | null,
    projectMemberships?:  {
      __typename: "ModelProjectMembershipConnection",
      nextToken?: string | null,
    } | null,
    uploadedFiles?:  {
      __typename: "ModelProjectFileConnection",
      nextToken?: string | null,
    } | null,
    chats?:  {
      __typename: "ModelChatParticipantsConnection",
      nextToken?: string | null,
    } | null,
    sentMessages?:  {
      __typename: "ModelGroupChatMessageConnection",
      nextToken?: string | null,
    } | null,
    notes?: string | null,
    timezone?: string | null,
    language?: string | null,
    lastActive?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreatePersonCompanyRoleMutationVariables = {
  input: CreatePersonCompanyRoleInput,
  condition?: ModelPersonCompanyRoleConditionInput | null,
};

export type CreatePersonCompanyRoleMutation = {
  createPersonCompanyRole?:  {
    __typename: "PersonCompanyRole",
    id: string,
    personID: string,
    person:  {
      __typename: "Person",
      id: string,
      cognitoUsername?: string | null,
      cognitoSub?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      email: string,
      status?: string | null,
      phone?: string | null,
      invitedAt?: string | null,
      displayName?: string | null,
      jobSkills?: Array< string | null > | null,
      notes?: string | null,
      timezone?: string | null,
      language?: string | null,
      lastActive?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    companyID: string,
    company:  {
      __typename: "Company",
      id: string,
      name: string,
      website?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    jobRoles: Array< CompanyRoleType | null >,
    isActive: boolean,
    startDate?: string | null,
    endDate?: string | null,
    createdAt: string,
    updatedAt: string,
    personCompanyRolesId?: string | null,
    companyPersonRolesId?: string | null,
  } | null,
};

export type UpdatePersonCompanyRoleMutationVariables = {
  input: UpdatePersonCompanyRoleInput,
  condition?: ModelPersonCompanyRoleConditionInput | null,
};

export type UpdatePersonCompanyRoleMutation = {
  updatePersonCompanyRole?:  {
    __typename: "PersonCompanyRole",
    id: string,
    personID: string,
    person:  {
      __typename: "Person",
      id: string,
      cognitoUsername?: string | null,
      cognitoSub?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      email: string,
      status?: string | null,
      phone?: string | null,
      invitedAt?: string | null,
      displayName?: string | null,
      jobSkills?: Array< string | null > | null,
      notes?: string | null,
      timezone?: string | null,
      language?: string | null,
      lastActive?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    companyID: string,
    company:  {
      __typename: "Company",
      id: string,
      name: string,
      website?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    jobRoles: Array< CompanyRoleType | null >,
    isActive: boolean,
    startDate?: string | null,
    endDate?: string | null,
    createdAt: string,
    updatedAt: string,
    personCompanyRolesId?: string | null,
    companyPersonRolesId?: string | null,
  } | null,
};

export type DeletePersonCompanyRoleMutationVariables = {
  input: DeletePersonCompanyRoleInput,
  condition?: ModelPersonCompanyRoleConditionInput | null,
};

export type DeletePersonCompanyRoleMutation = {
  deletePersonCompanyRole?:  {
    __typename: "PersonCompanyRole",
    id: string,
    personID: string,
    person:  {
      __typename: "Person",
      id: string,
      cognitoUsername?: string | null,
      cognitoSub?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      email: string,
      status?: string | null,
      phone?: string | null,
      invitedAt?: string | null,
      displayName?: string | null,
      jobSkills?: Array< string | null > | null,
      notes?: string | null,
      timezone?: string | null,
      language?: string | null,
      lastActive?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    companyID: string,
    company:  {
      __typename: "Company",
      id: string,
      name: string,
      website?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    jobRoles: Array< CompanyRoleType | null >,
    isActive: boolean,
    startDate?: string | null,
    endDate?: string | null,
    createdAt: string,
    updatedAt: string,
    personCompanyRolesId?: string | null,
    companyPersonRolesId?: string | null,
  } | null,
};

export type CreateCompanyMutationVariables = {
  input: CreateCompanyInput,
  condition?: ModelCompanyConditionInput | null,
};

export type CreateCompanyMutation = {
  createCompany?:  {
    __typename: "Company",
    id: string,
    name: string,
    website?: string | null,
    people?:  {
      __typename: "ModelPersonCompaniesConnection",
      nextToken?: string | null,
    } | null,
    personRoles?:  {
      __typename: "ModelPersonCompanyRoleConnection",
      nextToken?: string | null,
    } | null,
    projects?:  {
      __typename: "ModelProjectConnection",
      nextToken?: string | null,
    } | null,
    projectTemplates?:  {
      __typename: "ModelProjectTemplateConnection",
      nextToken?: string | null,
    } | null,
    scopeItemTags?:  {
      __typename: "ModelScopeItemTagConnection",
      nextToken?: string | null,
    } | null,
    templateScopeItemTags?:  {
      __typename: "ModelTemplateScopeItemTagConnection",
      nextToken?: string | null,
    } | null,
    chats?:  {
      __typename: "ModelGroupChatConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateCompanyMutationVariables = {
  input: UpdateCompanyInput,
  condition?: ModelCompanyConditionInput | null,
};

export type UpdateCompanyMutation = {
  updateCompany?:  {
    __typename: "Company",
    id: string,
    name: string,
    website?: string | null,
    people?:  {
      __typename: "ModelPersonCompaniesConnection",
      nextToken?: string | null,
    } | null,
    personRoles?:  {
      __typename: "ModelPersonCompanyRoleConnection",
      nextToken?: string | null,
    } | null,
    projects?:  {
      __typename: "ModelProjectConnection",
      nextToken?: string | null,
    } | null,
    projectTemplates?:  {
      __typename: "ModelProjectTemplateConnection",
      nextToken?: string | null,
    } | null,
    scopeItemTags?:  {
      __typename: "ModelScopeItemTagConnection",
      nextToken?: string | null,
    } | null,
    templateScopeItemTags?:  {
      __typename: "ModelTemplateScopeItemTagConnection",
      nextToken?: string | null,
    } | null,
    chats?:  {
      __typename: "ModelGroupChatConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteCompanyMutationVariables = {
  input: DeleteCompanyInput,
  condition?: ModelCompanyConditionInput | null,
};

export type DeleteCompanyMutation = {
  deleteCompany?:  {
    __typename: "Company",
    id: string,
    name: string,
    website?: string | null,
    people?:  {
      __typename: "ModelPersonCompaniesConnection",
      nextToken?: string | null,
    } | null,
    personRoles?:  {
      __typename: "ModelPersonCompanyRoleConnection",
      nextToken?: string | null,
    } | null,
    projects?:  {
      __typename: "ModelProjectConnection",
      nextToken?: string | null,
    } | null,
    projectTemplates?:  {
      __typename: "ModelProjectTemplateConnection",
      nextToken?: string | null,
    } | null,
    scopeItemTags?:  {
      __typename: "ModelScopeItemTagConnection",
      nextToken?: string | null,
    } | null,
    templateScopeItemTags?:  {
      __typename: "ModelTemplateScopeItemTagConnection",
      nextToken?: string | null,
    } | null,
    chats?:  {
      __typename: "ModelGroupChatConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateProjectTemplateMutationVariables = {
  input: CreateProjectTemplateInput,
  condition?: ModelProjectTemplateConditionInput | null,
};

export type CreateProjectTemplateMutation = {
  createProjectTemplate?:  {
    __typename: "ProjectTemplate",
    id: string,
    name: string,
    description?: string | null,
    companyID: string,
    company?:  {
      __typename: "Company",
      id: string,
      name: string,
      website?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    projects?:  {
      __typename: "ModelProjectConnection",
      nextToken?: string | null,
    } | null,
    scopeItems?:  {
      __typename: "ModelTemplateScopeItemConnection",
      nextToken?: string | null,
    } | null,
    templateScopeItemTags?:  {
      __typename: "ModelTemplateScopeItemTagConnection",
      nextToken?: string | null,
    } | null,
    estimatedDuration?: number | null,
    defaultAddress?:  {
      __typename: "Address",
      id: string,
      street: string,
      city: string,
      state: string,
      postalCode: string,
      country: string,
      projectID?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    notificationSettings?:  {
      __typename: "ModelNotificationConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    companyProjectTemplatesId?: string | null,
    projectTemplateDefaultAddressId?: string | null,
  } | null,
};

export type UpdateProjectTemplateMutationVariables = {
  input: UpdateProjectTemplateInput,
  condition?: ModelProjectTemplateConditionInput | null,
};

export type UpdateProjectTemplateMutation = {
  updateProjectTemplate?:  {
    __typename: "ProjectTemplate",
    id: string,
    name: string,
    description?: string | null,
    companyID: string,
    company?:  {
      __typename: "Company",
      id: string,
      name: string,
      website?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    projects?:  {
      __typename: "ModelProjectConnection",
      nextToken?: string | null,
    } | null,
    scopeItems?:  {
      __typename: "ModelTemplateScopeItemConnection",
      nextToken?: string | null,
    } | null,
    templateScopeItemTags?:  {
      __typename: "ModelTemplateScopeItemTagConnection",
      nextToken?: string | null,
    } | null,
    estimatedDuration?: number | null,
    defaultAddress?:  {
      __typename: "Address",
      id: string,
      street: string,
      city: string,
      state: string,
      postalCode: string,
      country: string,
      projectID?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    notificationSettings?:  {
      __typename: "ModelNotificationConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    companyProjectTemplatesId?: string | null,
    projectTemplateDefaultAddressId?: string | null,
  } | null,
};

export type DeleteProjectTemplateMutationVariables = {
  input: DeleteProjectTemplateInput,
  condition?: ModelProjectTemplateConditionInput | null,
};

export type DeleteProjectTemplateMutation = {
  deleteProjectTemplate?:  {
    __typename: "ProjectTemplate",
    id: string,
    name: string,
    description?: string | null,
    companyID: string,
    company?:  {
      __typename: "Company",
      id: string,
      name: string,
      website?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    projects?:  {
      __typename: "ModelProjectConnection",
      nextToken?: string | null,
    } | null,
    scopeItems?:  {
      __typename: "ModelTemplateScopeItemConnection",
      nextToken?: string | null,
    } | null,
    templateScopeItemTags?:  {
      __typename: "ModelTemplateScopeItemTagConnection",
      nextToken?: string | null,
    } | null,
    estimatedDuration?: number | null,
    defaultAddress?:  {
      __typename: "Address",
      id: string,
      street: string,
      city: string,
      state: string,
      postalCode: string,
      country: string,
      projectID?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    notificationSettings?:  {
      __typename: "ModelNotificationConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    companyProjectTemplatesId?: string | null,
    projectTemplateDefaultAddressId?: string | null,
  } | null,
};

export type CreateTemplateScopeItemMutationVariables = {
  input: CreateTemplateScopeItemInput,
  condition?: ModelTemplateScopeItemConditionInput | null,
};

export type CreateTemplateScopeItemMutation = {
  createTemplateScopeItem?:  {
    __typename: "TemplateScopeItem",
    id: string,
    name: string,
    description?: string | null,
    parentItemID?: string | null,
    parentItem?:  {
      __typename: "TemplateScopeItem",
      id: string,
      name: string,
      description?: string | null,
      parentItemID?: string | null,
      projectTemplateID: string,
      tags?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
      projectTemplateScopeItemsId?: string | null,
    } | null,
    childItems?:  {
      __typename: "ModelTemplateScopeItemConnection",
      nextToken?: string | null,
    } | null,
    projectTemplateID: string,
    projectTemplate?:  {
      __typename: "ProjectTemplate",
      id: string,
      name: string,
      description?: string | null,
      companyID: string,
      estimatedDuration?: number | null,
      createdAt: string,
      updatedAt: string,
      companyProjectTemplatesId?: string | null,
      projectTemplateDefaultAddressId?: string | null,
    } | null,
    tags?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
    projectTemplateScopeItemsId?: string | null,
  } | null,
};

export type UpdateTemplateScopeItemMutationVariables = {
  input: UpdateTemplateScopeItemInput,
  condition?: ModelTemplateScopeItemConditionInput | null,
};

export type UpdateTemplateScopeItemMutation = {
  updateTemplateScopeItem?:  {
    __typename: "TemplateScopeItem",
    id: string,
    name: string,
    description?: string | null,
    parentItemID?: string | null,
    parentItem?:  {
      __typename: "TemplateScopeItem",
      id: string,
      name: string,
      description?: string | null,
      parentItemID?: string | null,
      projectTemplateID: string,
      tags?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
      projectTemplateScopeItemsId?: string | null,
    } | null,
    childItems?:  {
      __typename: "ModelTemplateScopeItemConnection",
      nextToken?: string | null,
    } | null,
    projectTemplateID: string,
    projectTemplate?:  {
      __typename: "ProjectTemplate",
      id: string,
      name: string,
      description?: string | null,
      companyID: string,
      estimatedDuration?: number | null,
      createdAt: string,
      updatedAt: string,
      companyProjectTemplatesId?: string | null,
      projectTemplateDefaultAddressId?: string | null,
    } | null,
    tags?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
    projectTemplateScopeItemsId?: string | null,
  } | null,
};

export type DeleteTemplateScopeItemMutationVariables = {
  input: DeleteTemplateScopeItemInput,
  condition?: ModelTemplateScopeItemConditionInput | null,
};

export type DeleteTemplateScopeItemMutation = {
  deleteTemplateScopeItem?:  {
    __typename: "TemplateScopeItem",
    id: string,
    name: string,
    description?: string | null,
    parentItemID?: string | null,
    parentItem?:  {
      __typename: "TemplateScopeItem",
      id: string,
      name: string,
      description?: string | null,
      parentItemID?: string | null,
      projectTemplateID: string,
      tags?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
      projectTemplateScopeItemsId?: string | null,
    } | null,
    childItems?:  {
      __typename: "ModelTemplateScopeItemConnection",
      nextToken?: string | null,
    } | null,
    projectTemplateID: string,
    projectTemplate?:  {
      __typename: "ProjectTemplate",
      id: string,
      name: string,
      description?: string | null,
      companyID: string,
      estimatedDuration?: number | null,
      createdAt: string,
      updatedAt: string,
      companyProjectTemplatesId?: string | null,
      projectTemplateDefaultAddressId?: string | null,
    } | null,
    tags?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
    projectTemplateScopeItemsId?: string | null,
  } | null,
};

export type CreateProjectMembershipMutationVariables = {
  input: CreateProjectMembershipInput,
  condition?: ModelProjectMembershipConditionInput | null,
};

export type CreateProjectMembershipMutation = {
  createProjectMembership?:  {
    __typename: "ProjectMembership",
    id: string,
    projectID: string,
    project:  {
      __typename: "Project",
      id: string,
      name: string,
      description?: string | null,
      startDate?: string | null,
      endDate?: string | null,
      companyID: string,
      templateID?: string | null,
      createdAt: string,
      updatedAt: string,
      companyProjectsId?: string | null,
      projectTemplateProjectsId?: string | null,
      projectAddressId?: string | null,
    },
    personID: string,
    person:  {
      __typename: "Person",
      id: string,
      cognitoUsername?: string | null,
      cognitoSub?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      email: string,
      status?: string | null,
      phone?: string | null,
      invitedAt?: string | null,
      displayName?: string | null,
      jobSkills?: Array< string | null > | null,
      notes?: string | null,
      timezone?: string | null,
      language?: string | null,
      lastActive?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    roles: Array< string | null >,
    isActive: boolean,
    startDate?: string | null,
    endDate?: string | null,
    createdAt: string,
    updatedAt: string,
    personProjectMembershipsId?: string | null,
    projectMembershipsId?: string | null,
  } | null,
};

export type UpdateProjectMembershipMutationVariables = {
  input: UpdateProjectMembershipInput,
  condition?: ModelProjectMembershipConditionInput | null,
};

export type UpdateProjectMembershipMutation = {
  updateProjectMembership?:  {
    __typename: "ProjectMembership",
    id: string,
    projectID: string,
    project:  {
      __typename: "Project",
      id: string,
      name: string,
      description?: string | null,
      startDate?: string | null,
      endDate?: string | null,
      companyID: string,
      templateID?: string | null,
      createdAt: string,
      updatedAt: string,
      companyProjectsId?: string | null,
      projectTemplateProjectsId?: string | null,
      projectAddressId?: string | null,
    },
    personID: string,
    person:  {
      __typename: "Person",
      id: string,
      cognitoUsername?: string | null,
      cognitoSub?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      email: string,
      status?: string | null,
      phone?: string | null,
      invitedAt?: string | null,
      displayName?: string | null,
      jobSkills?: Array< string | null > | null,
      notes?: string | null,
      timezone?: string | null,
      language?: string | null,
      lastActive?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    roles: Array< string | null >,
    isActive: boolean,
    startDate?: string | null,
    endDate?: string | null,
    createdAt: string,
    updatedAt: string,
    personProjectMembershipsId?: string | null,
    projectMembershipsId?: string | null,
  } | null,
};

export type DeleteProjectMembershipMutationVariables = {
  input: DeleteProjectMembershipInput,
  condition?: ModelProjectMembershipConditionInput | null,
};

export type DeleteProjectMembershipMutation = {
  deleteProjectMembership?:  {
    __typename: "ProjectMembership",
    id: string,
    projectID: string,
    project:  {
      __typename: "Project",
      id: string,
      name: string,
      description?: string | null,
      startDate?: string | null,
      endDate?: string | null,
      companyID: string,
      templateID?: string | null,
      createdAt: string,
      updatedAt: string,
      companyProjectsId?: string | null,
      projectTemplateProjectsId?: string | null,
      projectAddressId?: string | null,
    },
    personID: string,
    person:  {
      __typename: "Person",
      id: string,
      cognitoUsername?: string | null,
      cognitoSub?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      email: string,
      status?: string | null,
      phone?: string | null,
      invitedAt?: string | null,
      displayName?: string | null,
      jobSkills?: Array< string | null > | null,
      notes?: string | null,
      timezone?: string | null,
      language?: string | null,
      lastActive?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    roles: Array< string | null >,
    isActive: boolean,
    startDate?: string | null,
    endDate?: string | null,
    createdAt: string,
    updatedAt: string,
    personProjectMembershipsId?: string | null,
    projectMembershipsId?: string | null,
  } | null,
};

export type CreateProjectMutationVariables = {
  input: CreateProjectInput,
  condition?: ModelProjectConditionInput | null,
};

export type CreateProjectMutation = {
  createProject?:  {
    __typename: "Project",
    id: string,
    name: string,
    description?: string | null,
    startDate?: string | null,
    endDate?: string | null,
    companyID: string,
    company?:  {
      __typename: "Company",
      id: string,
      name: string,
      website?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    templateID?: string | null,
    template?:  {
      __typename: "ProjectTemplate",
      id: string,
      name: string,
      description?: string | null,
      companyID: string,
      estimatedDuration?: number | null,
      createdAt: string,
      updatedAt: string,
      companyProjectTemplatesId?: string | null,
      projectTemplateDefaultAddressId?: string | null,
    } | null,
    people?:  {
      __typename: "ModelProjectPeopleConnection",
      nextToken?: string | null,
    } | null,
    memberships?:  {
      __typename: "ModelProjectMembershipConnection",
      nextToken?: string | null,
    } | null,
    files?:  {
      __typename: "ModelProjectFileConnection",
      nextToken?: string | null,
    } | null,
    address?:  {
      __typename: "Address",
      id: string,
      street: string,
      city: string,
      state: string,
      postalCode: string,
      country: string,
      projectID?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    notifications?:  {
      __typename: "ModelNotificationConnection",
      nextToken?: string | null,
    } | null,
    chats?:  {
      __typename: "ModelGroupChatConnection",
      nextToken?: string | null,
    } | null,
    scopeItems?:  {
      __typename: "ModelScopeItemConnection",
      nextToken?: string | null,
    } | null,
    scopeItemGroups?:  {
      __typename: "ModelScopeItemGroupConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    companyProjectsId?: string | null,
    projectTemplateProjectsId?: string | null,
    projectAddressId?: string | null,
  } | null,
};

export type UpdateProjectMutationVariables = {
  input: UpdateProjectInput,
  condition?: ModelProjectConditionInput | null,
};

export type UpdateProjectMutation = {
  updateProject?:  {
    __typename: "Project",
    id: string,
    name: string,
    description?: string | null,
    startDate?: string | null,
    endDate?: string | null,
    companyID: string,
    company?:  {
      __typename: "Company",
      id: string,
      name: string,
      website?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    templateID?: string | null,
    template?:  {
      __typename: "ProjectTemplate",
      id: string,
      name: string,
      description?: string | null,
      companyID: string,
      estimatedDuration?: number | null,
      createdAt: string,
      updatedAt: string,
      companyProjectTemplatesId?: string | null,
      projectTemplateDefaultAddressId?: string | null,
    } | null,
    people?:  {
      __typename: "ModelProjectPeopleConnection",
      nextToken?: string | null,
    } | null,
    memberships?:  {
      __typename: "ModelProjectMembershipConnection",
      nextToken?: string | null,
    } | null,
    files?:  {
      __typename: "ModelProjectFileConnection",
      nextToken?: string | null,
    } | null,
    address?:  {
      __typename: "Address",
      id: string,
      street: string,
      city: string,
      state: string,
      postalCode: string,
      country: string,
      projectID?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    notifications?:  {
      __typename: "ModelNotificationConnection",
      nextToken?: string | null,
    } | null,
    chats?:  {
      __typename: "ModelGroupChatConnection",
      nextToken?: string | null,
    } | null,
    scopeItems?:  {
      __typename: "ModelScopeItemConnection",
      nextToken?: string | null,
    } | null,
    scopeItemGroups?:  {
      __typename: "ModelScopeItemGroupConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    companyProjectsId?: string | null,
    projectTemplateProjectsId?: string | null,
    projectAddressId?: string | null,
  } | null,
};

export type DeleteProjectMutationVariables = {
  input: DeleteProjectInput,
  condition?: ModelProjectConditionInput | null,
};

export type DeleteProjectMutation = {
  deleteProject?:  {
    __typename: "Project",
    id: string,
    name: string,
    description?: string | null,
    startDate?: string | null,
    endDate?: string | null,
    companyID: string,
    company?:  {
      __typename: "Company",
      id: string,
      name: string,
      website?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    templateID?: string | null,
    template?:  {
      __typename: "ProjectTemplate",
      id: string,
      name: string,
      description?: string | null,
      companyID: string,
      estimatedDuration?: number | null,
      createdAt: string,
      updatedAt: string,
      companyProjectTemplatesId?: string | null,
      projectTemplateDefaultAddressId?: string | null,
    } | null,
    people?:  {
      __typename: "ModelProjectPeopleConnection",
      nextToken?: string | null,
    } | null,
    memberships?:  {
      __typename: "ModelProjectMembershipConnection",
      nextToken?: string | null,
    } | null,
    files?:  {
      __typename: "ModelProjectFileConnection",
      nextToken?: string | null,
    } | null,
    address?:  {
      __typename: "Address",
      id: string,
      street: string,
      city: string,
      state: string,
      postalCode: string,
      country: string,
      projectID?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    notifications?:  {
      __typename: "ModelNotificationConnection",
      nextToken?: string | null,
    } | null,
    chats?:  {
      __typename: "ModelGroupChatConnection",
      nextToken?: string | null,
    } | null,
    scopeItems?:  {
      __typename: "ModelScopeItemConnection",
      nextToken?: string | null,
    } | null,
    scopeItemGroups?:  {
      __typename: "ModelScopeItemGroupConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    companyProjectsId?: string | null,
    projectTemplateProjectsId?: string | null,
    projectAddressId?: string | null,
  } | null,
};

export type CreateScopeItemTagMutationVariables = {
  input: CreateScopeItemTagInput,
  condition?: ModelScopeItemTagConditionInput | null,
};

export type CreateScopeItemTagMutation = {
  createScopeItemTag?:  {
    __typename: "ScopeItemTag",
    id: string,
    name: string,
    description?: string | null,
    companyID: string,
    company?:  {
      __typename: "Company",
      id: string,
      name: string,
      website?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    color?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    companyScopeItemTagsId?: string | null,
  } | null,
};

export type UpdateScopeItemTagMutationVariables = {
  input: UpdateScopeItemTagInput,
  condition?: ModelScopeItemTagConditionInput | null,
};

export type UpdateScopeItemTagMutation = {
  updateScopeItemTag?:  {
    __typename: "ScopeItemTag",
    id: string,
    name: string,
    description?: string | null,
    companyID: string,
    company?:  {
      __typename: "Company",
      id: string,
      name: string,
      website?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    color?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    companyScopeItemTagsId?: string | null,
  } | null,
};

export type DeleteScopeItemTagMutationVariables = {
  input: DeleteScopeItemTagInput,
  condition?: ModelScopeItemTagConditionInput | null,
};

export type DeleteScopeItemTagMutation = {
  deleteScopeItemTag?:  {
    __typename: "ScopeItemTag",
    id: string,
    name: string,
    description?: string | null,
    companyID: string,
    company?:  {
      __typename: "Company",
      id: string,
      name: string,
      website?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    color?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    companyScopeItemTagsId?: string | null,
  } | null,
};

export type CreateTemplateScopeItemTagMutationVariables = {
  input: CreateTemplateScopeItemTagInput,
  condition?: ModelTemplateScopeItemTagConditionInput | null,
};

export type CreateTemplateScopeItemTagMutation = {
  createTemplateScopeItemTag?:  {
    __typename: "TemplateScopeItemTag",
    id: string,
    name: string,
    description?: string | null,
    companyID: string,
    company?:  {
      __typename: "Company",
      id: string,
      name: string,
      website?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    projectTemplateID: string,
    projectTemplate?:  {
      __typename: "ProjectTemplate",
      id: string,
      name: string,
      description?: string | null,
      companyID: string,
      estimatedDuration?: number | null,
      createdAt: string,
      updatedAt: string,
      companyProjectTemplatesId?: string | null,
      projectTemplateDefaultAddressId?: string | null,
    } | null,
    color?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    companyTemplateScopeItemTagsId?: string | null,
    projectTemplateTemplateScopeItemTagsId?: string | null,
  } | null,
};

export type UpdateTemplateScopeItemTagMutationVariables = {
  input: UpdateTemplateScopeItemTagInput,
  condition?: ModelTemplateScopeItemTagConditionInput | null,
};

export type UpdateTemplateScopeItemTagMutation = {
  updateTemplateScopeItemTag?:  {
    __typename: "TemplateScopeItemTag",
    id: string,
    name: string,
    description?: string | null,
    companyID: string,
    company?:  {
      __typename: "Company",
      id: string,
      name: string,
      website?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    projectTemplateID: string,
    projectTemplate?:  {
      __typename: "ProjectTemplate",
      id: string,
      name: string,
      description?: string | null,
      companyID: string,
      estimatedDuration?: number | null,
      createdAt: string,
      updatedAt: string,
      companyProjectTemplatesId?: string | null,
      projectTemplateDefaultAddressId?: string | null,
    } | null,
    color?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    companyTemplateScopeItemTagsId?: string | null,
    projectTemplateTemplateScopeItemTagsId?: string | null,
  } | null,
};

export type DeleteTemplateScopeItemTagMutationVariables = {
  input: DeleteTemplateScopeItemTagInput,
  condition?: ModelTemplateScopeItemTagConditionInput | null,
};

export type DeleteTemplateScopeItemTagMutation = {
  deleteTemplateScopeItemTag?:  {
    __typename: "TemplateScopeItemTag",
    id: string,
    name: string,
    description?: string | null,
    companyID: string,
    company?:  {
      __typename: "Company",
      id: string,
      name: string,
      website?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    projectTemplateID: string,
    projectTemplate?:  {
      __typename: "ProjectTemplate",
      id: string,
      name: string,
      description?: string | null,
      companyID: string,
      estimatedDuration?: number | null,
      createdAt: string,
      updatedAt: string,
      companyProjectTemplatesId?: string | null,
      projectTemplateDefaultAddressId?: string | null,
    } | null,
    color?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    companyTemplateScopeItemTagsId?: string | null,
    projectTemplateTemplateScopeItemTagsId?: string | null,
  } | null,
};

export type CreateScopeItemGroupMutationVariables = {
  input: CreateScopeItemGroupInput,
  condition?: ModelScopeItemGroupConditionInput | null,
};

export type CreateScopeItemGroupMutation = {
  createScopeItemGroup?:  {
    __typename: "ScopeItemGroup",
    id: string,
    name: string,
    description?: string | null,
    projectID: string,
    project?:  {
      __typename: "Project",
      id: string,
      name: string,
      description?: string | null,
      startDate?: string | null,
      endDate?: string | null,
      companyID: string,
      templateID?: string | null,
      createdAt: string,
      updatedAt: string,
      companyProjectsId?: string | null,
      projectTemplateProjectsId?: string | null,
      projectAddressId?: string | null,
    } | null,
    scopeItems?:  {
      __typename: "ModelScopeItemConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    projectScopeItemGroupsId?: string | null,
  } | null,
};

export type UpdateScopeItemGroupMutationVariables = {
  input: UpdateScopeItemGroupInput,
  condition?: ModelScopeItemGroupConditionInput | null,
};

export type UpdateScopeItemGroupMutation = {
  updateScopeItemGroup?:  {
    __typename: "ScopeItemGroup",
    id: string,
    name: string,
    description?: string | null,
    projectID: string,
    project?:  {
      __typename: "Project",
      id: string,
      name: string,
      description?: string | null,
      startDate?: string | null,
      endDate?: string | null,
      companyID: string,
      templateID?: string | null,
      createdAt: string,
      updatedAt: string,
      companyProjectsId?: string | null,
      projectTemplateProjectsId?: string | null,
      projectAddressId?: string | null,
    } | null,
    scopeItems?:  {
      __typename: "ModelScopeItemConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    projectScopeItemGroupsId?: string | null,
  } | null,
};

export type DeleteScopeItemGroupMutationVariables = {
  input: DeleteScopeItemGroupInput,
  condition?: ModelScopeItemGroupConditionInput | null,
};

export type DeleteScopeItemGroupMutation = {
  deleteScopeItemGroup?:  {
    __typename: "ScopeItemGroup",
    id: string,
    name: string,
    description?: string | null,
    projectID: string,
    project?:  {
      __typename: "Project",
      id: string,
      name: string,
      description?: string | null,
      startDate?: string | null,
      endDate?: string | null,
      companyID: string,
      templateID?: string | null,
      createdAt: string,
      updatedAt: string,
      companyProjectsId?: string | null,
      projectTemplateProjectsId?: string | null,
      projectAddressId?: string | null,
    } | null,
    scopeItems?:  {
      __typename: "ModelScopeItemConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    projectScopeItemGroupsId?: string | null,
  } | null,
};

export type CreateScopeItemMutationVariables = {
  input: CreateScopeItemInput,
  condition?: ModelScopeItemConditionInput | null,
};

export type CreateScopeItemMutation = {
  createScopeItem?:  {
    __typename: "ScopeItem",
    id: string,
    name: string,
    description?: string | null,
    category?: string | null,
    costEstimate?: number | null,
    spendEstimate?: number | null,
    durationEstimate?: number | null,
    isCompleted?: boolean | null,
    progress?: number | null,
    tags?: Array< string | null > | null,
    parentItemID?: string | null,
    parentItem?:  {
      __typename: "ScopeItem",
      id: string,
      name: string,
      description?: string | null,
      category?: string | null,
      costEstimate?: number | null,
      spendEstimate?: number | null,
      durationEstimate?: number | null,
      isCompleted?: boolean | null,
      progress?: number | null,
      tags?: Array< string | null > | null,
      parentItemID?: string | null,
      projectID: string,
      groupID?: string | null,
      createdAt: string,
      updatedAt: string,
      projectScopeItemsId?: string | null,
      scopeItemGroupScopeItemsId?: string | null,
    } | null,
    childItems?:  {
      __typename: "ModelScopeItemConnection",
      nextToken?: string | null,
    } | null,
    projectID: string,
    project?:  {
      __typename: "Project",
      id: string,
      name: string,
      description?: string | null,
      startDate?: string | null,
      endDate?: string | null,
      companyID: string,
      templateID?: string | null,
      createdAt: string,
      updatedAt: string,
      companyProjectsId?: string | null,
      projectTemplateProjectsId?: string | null,
      projectAddressId?: string | null,
    } | null,
    groupID?: string | null,
    group?:  {
      __typename: "ScopeItemGroup",
      id: string,
      name: string,
      description?: string | null,
      projectID: string,
      createdAt: string,
      updatedAt: string,
      projectScopeItemGroupsId?: string | null,
    } | null,
    chats?:  {
      __typename: "ModelGroupChatConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    projectScopeItemsId?: string | null,
    scopeItemGroupScopeItemsId?: string | null,
  } | null,
};

export type UpdateScopeItemMutationVariables = {
  input: UpdateScopeItemInput,
  condition?: ModelScopeItemConditionInput | null,
};

export type UpdateScopeItemMutation = {
  updateScopeItem?:  {
    __typename: "ScopeItem",
    id: string,
    name: string,
    description?: string | null,
    category?: string | null,
    costEstimate?: number | null,
    spendEstimate?: number | null,
    durationEstimate?: number | null,
    isCompleted?: boolean | null,
    progress?: number | null,
    tags?: Array< string | null > | null,
    parentItemID?: string | null,
    parentItem?:  {
      __typename: "ScopeItem",
      id: string,
      name: string,
      description?: string | null,
      category?: string | null,
      costEstimate?: number | null,
      spendEstimate?: number | null,
      durationEstimate?: number | null,
      isCompleted?: boolean | null,
      progress?: number | null,
      tags?: Array< string | null > | null,
      parentItemID?: string | null,
      projectID: string,
      groupID?: string | null,
      createdAt: string,
      updatedAt: string,
      projectScopeItemsId?: string | null,
      scopeItemGroupScopeItemsId?: string | null,
    } | null,
    childItems?:  {
      __typename: "ModelScopeItemConnection",
      nextToken?: string | null,
    } | null,
    projectID: string,
    project?:  {
      __typename: "Project",
      id: string,
      name: string,
      description?: string | null,
      startDate?: string | null,
      endDate?: string | null,
      companyID: string,
      templateID?: string | null,
      createdAt: string,
      updatedAt: string,
      companyProjectsId?: string | null,
      projectTemplateProjectsId?: string | null,
      projectAddressId?: string | null,
    } | null,
    groupID?: string | null,
    group?:  {
      __typename: "ScopeItemGroup",
      id: string,
      name: string,
      description?: string | null,
      projectID: string,
      createdAt: string,
      updatedAt: string,
      projectScopeItemGroupsId?: string | null,
    } | null,
    chats?:  {
      __typename: "ModelGroupChatConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    projectScopeItemsId?: string | null,
    scopeItemGroupScopeItemsId?: string | null,
  } | null,
};

export type DeleteScopeItemMutationVariables = {
  input: DeleteScopeItemInput,
  condition?: ModelScopeItemConditionInput | null,
};

export type DeleteScopeItemMutation = {
  deleteScopeItem?:  {
    __typename: "ScopeItem",
    id: string,
    name: string,
    description?: string | null,
    category?: string | null,
    costEstimate?: number | null,
    spendEstimate?: number | null,
    durationEstimate?: number | null,
    isCompleted?: boolean | null,
    progress?: number | null,
    tags?: Array< string | null > | null,
    parentItemID?: string | null,
    parentItem?:  {
      __typename: "ScopeItem",
      id: string,
      name: string,
      description?: string | null,
      category?: string | null,
      costEstimate?: number | null,
      spendEstimate?: number | null,
      durationEstimate?: number | null,
      isCompleted?: boolean | null,
      progress?: number | null,
      tags?: Array< string | null > | null,
      parentItemID?: string | null,
      projectID: string,
      groupID?: string | null,
      createdAt: string,
      updatedAt: string,
      projectScopeItemsId?: string | null,
      scopeItemGroupScopeItemsId?: string | null,
    } | null,
    childItems?:  {
      __typename: "ModelScopeItemConnection",
      nextToken?: string | null,
    } | null,
    projectID: string,
    project?:  {
      __typename: "Project",
      id: string,
      name: string,
      description?: string | null,
      startDate?: string | null,
      endDate?: string | null,
      companyID: string,
      templateID?: string | null,
      createdAt: string,
      updatedAt: string,
      companyProjectsId?: string | null,
      projectTemplateProjectsId?: string | null,
      projectAddressId?: string | null,
    } | null,
    groupID?: string | null,
    group?:  {
      __typename: "ScopeItemGroup",
      id: string,
      name: string,
      description?: string | null,
      projectID: string,
      createdAt: string,
      updatedAt: string,
      projectScopeItemGroupsId?: string | null,
    } | null,
    chats?:  {
      __typename: "ModelGroupChatConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    projectScopeItemsId?: string | null,
    scopeItemGroupScopeItemsId?: string | null,
  } | null,
};

export type CreateAddressMutationVariables = {
  input: CreateAddressInput,
  condition?: ModelAddressConditionInput | null,
};

export type CreateAddressMutation = {
  createAddress?:  {
    __typename: "Address",
    id: string,
    street: string,
    city: string,
    state: string,
    postalCode: string,
    country: string,
    projectID?: string | null,
    project?:  {
      __typename: "Project",
      id: string,
      name: string,
      description?: string | null,
      startDate?: string | null,
      endDate?: string | null,
      companyID: string,
      templateID?: string | null,
      createdAt: string,
      updatedAt: string,
      companyProjectsId?: string | null,
      projectTemplateProjectsId?: string | null,
      projectAddressId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateAddressMutationVariables = {
  input: UpdateAddressInput,
  condition?: ModelAddressConditionInput | null,
};

export type UpdateAddressMutation = {
  updateAddress?:  {
    __typename: "Address",
    id: string,
    street: string,
    city: string,
    state: string,
    postalCode: string,
    country: string,
    projectID?: string | null,
    project?:  {
      __typename: "Project",
      id: string,
      name: string,
      description?: string | null,
      startDate?: string | null,
      endDate?: string | null,
      companyID: string,
      templateID?: string | null,
      createdAt: string,
      updatedAt: string,
      companyProjectsId?: string | null,
      projectTemplateProjectsId?: string | null,
      projectAddressId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteAddressMutationVariables = {
  input: DeleteAddressInput,
  condition?: ModelAddressConditionInput | null,
};

export type DeleteAddressMutation = {
  deleteAddress?:  {
    __typename: "Address",
    id: string,
    street: string,
    city: string,
    state: string,
    postalCode: string,
    country: string,
    projectID?: string | null,
    project?:  {
      __typename: "Project",
      id: string,
      name: string,
      description?: string | null,
      startDate?: string | null,
      endDate?: string | null,
      companyID: string,
      templateID?: string | null,
      createdAt: string,
      updatedAt: string,
      companyProjectsId?: string | null,
      projectTemplateProjectsId?: string | null,
      projectAddressId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateTagMutationVariables = {
  input: CreateTagInput,
  condition?: ModelTagConditionInput | null,
};

export type CreateTagMutation = {
  createTag?:  {
    __typename: "Tag",
    id: string,
    name: string,
    files?:  {
      __typename: "ModelProjectFileTagConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateTagMutationVariables = {
  input: UpdateTagInput,
  condition?: ModelTagConditionInput | null,
};

export type UpdateTagMutation = {
  updateTag?:  {
    __typename: "Tag",
    id: string,
    name: string,
    files?:  {
      __typename: "ModelProjectFileTagConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteTagMutationVariables = {
  input: DeleteTagInput,
  condition?: ModelTagConditionInput | null,
};

export type DeleteTagMutation = {
  deleteTag?:  {
    __typename: "Tag",
    id: string,
    name: string,
    files?:  {
      __typename: "ModelProjectFileTagConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateProjectFileMutationVariables = {
  input: CreateProjectFileInput,
  condition?: ModelProjectFileConditionInput | null,
};

export type CreateProjectFileMutation = {
  createProjectFile?:  {
    __typename: "ProjectFile",
    id: string,
    fileName: string,
    fileType: string,
    fileSize: number,
    description?: string | null,
    uploadedByID: string,
    uploadedBy?:  {
      __typename: "Person",
      id: string,
      cognitoUsername?: string | null,
      cognitoSub?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      email: string,
      status?: string | null,
      phone?: string | null,
      invitedAt?: string | null,
      displayName?: string | null,
      jobSkills?: Array< string | null > | null,
      notes?: string | null,
      timezone?: string | null,
      language?: string | null,
      lastActive?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    uploadedAt: string,
    projectID: string,
    project?:  {
      __typename: "Project",
      id: string,
      name: string,
      description?: string | null,
      startDate?: string | null,
      endDate?: string | null,
      companyID: string,
      templateID?: string | null,
      createdAt: string,
      updatedAt: string,
      companyProjectsId?: string | null,
      projectTemplateProjectsId?: string | null,
      projectAddressId?: string | null,
    } | null,
    s3Object:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
      etag?: string | null,
      versionId?: string | null,
    },
    isPublic: boolean,
    width?: number | null,
    height?: number | null,
    duration?: number | null,
    thumbnailKey?: string | null,
    tags?:  {
      __typename: "ModelProjectFileTagConnection",
      nextToken?: string | null,
    } | null,
    annotations?:  {
      __typename: "ModelAnnotationConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    personUploadedFilesId?: string | null,
    projectFilesId?: string | null,
  } | null,
};

export type UpdateProjectFileMutationVariables = {
  input: UpdateProjectFileInput,
  condition?: ModelProjectFileConditionInput | null,
};

export type UpdateProjectFileMutation = {
  updateProjectFile?:  {
    __typename: "ProjectFile",
    id: string,
    fileName: string,
    fileType: string,
    fileSize: number,
    description?: string | null,
    uploadedByID: string,
    uploadedBy?:  {
      __typename: "Person",
      id: string,
      cognitoUsername?: string | null,
      cognitoSub?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      email: string,
      status?: string | null,
      phone?: string | null,
      invitedAt?: string | null,
      displayName?: string | null,
      jobSkills?: Array< string | null > | null,
      notes?: string | null,
      timezone?: string | null,
      language?: string | null,
      lastActive?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    uploadedAt: string,
    projectID: string,
    project?:  {
      __typename: "Project",
      id: string,
      name: string,
      description?: string | null,
      startDate?: string | null,
      endDate?: string | null,
      companyID: string,
      templateID?: string | null,
      createdAt: string,
      updatedAt: string,
      companyProjectsId?: string | null,
      projectTemplateProjectsId?: string | null,
      projectAddressId?: string | null,
    } | null,
    s3Object:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
      etag?: string | null,
      versionId?: string | null,
    },
    isPublic: boolean,
    width?: number | null,
    height?: number | null,
    duration?: number | null,
    thumbnailKey?: string | null,
    tags?:  {
      __typename: "ModelProjectFileTagConnection",
      nextToken?: string | null,
    } | null,
    annotations?:  {
      __typename: "ModelAnnotationConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    personUploadedFilesId?: string | null,
    projectFilesId?: string | null,
  } | null,
};

export type DeleteProjectFileMutationVariables = {
  input: DeleteProjectFileInput,
  condition?: ModelProjectFileConditionInput | null,
};

export type DeleteProjectFileMutation = {
  deleteProjectFile?:  {
    __typename: "ProjectFile",
    id: string,
    fileName: string,
    fileType: string,
    fileSize: number,
    description?: string | null,
    uploadedByID: string,
    uploadedBy?:  {
      __typename: "Person",
      id: string,
      cognitoUsername?: string | null,
      cognitoSub?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      email: string,
      status?: string | null,
      phone?: string | null,
      invitedAt?: string | null,
      displayName?: string | null,
      jobSkills?: Array< string | null > | null,
      notes?: string | null,
      timezone?: string | null,
      language?: string | null,
      lastActive?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    uploadedAt: string,
    projectID: string,
    project?:  {
      __typename: "Project",
      id: string,
      name: string,
      description?: string | null,
      startDate?: string | null,
      endDate?: string | null,
      companyID: string,
      templateID?: string | null,
      createdAt: string,
      updatedAt: string,
      companyProjectsId?: string | null,
      projectTemplateProjectsId?: string | null,
      projectAddressId?: string | null,
    } | null,
    s3Object:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
      etag?: string | null,
      versionId?: string | null,
    },
    isPublic: boolean,
    width?: number | null,
    height?: number | null,
    duration?: number | null,
    thumbnailKey?: string | null,
    tags?:  {
      __typename: "ModelProjectFileTagConnection",
      nextToken?: string | null,
    } | null,
    annotations?:  {
      __typename: "ModelAnnotationConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    personUploadedFilesId?: string | null,
    projectFilesId?: string | null,
  } | null,
};

export type CreateAnnotationMutationVariables = {
  input: CreateAnnotationInput,
  condition?: ModelAnnotationConditionInput | null,
};

export type CreateAnnotationMutation = {
  createAnnotation?:  {
    __typename: "Annotation",
    id: string,
    pageNumber: number,
    x: number,
    y: number,
    endX?: number | null,
    endY?: number | null,
    width?: number | null,
    height?: number | null,
    radius?: number | null,
    rotation?: number | null,
    strokeWidth?: number | null,
    strokeStyle?: string | null,
    color: string,
    type: AnnotationType,
    text?: string | null,
    projectFileID: string,
    projectFile:  {
      __typename: "ProjectFile",
      id: string,
      fileName: string,
      fileType: string,
      fileSize: number,
      description?: string | null,
      uploadedByID: string,
      uploadedAt: string,
      projectID: string,
      isPublic: boolean,
      width?: number | null,
      height?: number | null,
      duration?: number | null,
      thumbnailKey?: string | null,
      createdAt: string,
      updatedAt: string,
      personUploadedFilesId?: string | null,
      projectFilesId?: string | null,
    },
    createdAt: string,
    createdByID: string,
    updatedAt?: string | null,
    updatedByID?: string | null,
    projectFileAnnotationsId?: string | null,
  } | null,
};

export type UpdateAnnotationMutationVariables = {
  input: UpdateAnnotationInput,
  condition?: ModelAnnotationConditionInput | null,
};

export type UpdateAnnotationMutation = {
  updateAnnotation?:  {
    __typename: "Annotation",
    id: string,
    pageNumber: number,
    x: number,
    y: number,
    endX?: number | null,
    endY?: number | null,
    width?: number | null,
    height?: number | null,
    radius?: number | null,
    rotation?: number | null,
    strokeWidth?: number | null,
    strokeStyle?: string | null,
    color: string,
    type: AnnotationType,
    text?: string | null,
    projectFileID: string,
    projectFile:  {
      __typename: "ProjectFile",
      id: string,
      fileName: string,
      fileType: string,
      fileSize: number,
      description?: string | null,
      uploadedByID: string,
      uploadedAt: string,
      projectID: string,
      isPublic: boolean,
      width?: number | null,
      height?: number | null,
      duration?: number | null,
      thumbnailKey?: string | null,
      createdAt: string,
      updatedAt: string,
      personUploadedFilesId?: string | null,
      projectFilesId?: string | null,
    },
    createdAt: string,
    createdByID: string,
    updatedAt?: string | null,
    updatedByID?: string | null,
    projectFileAnnotationsId?: string | null,
  } | null,
};

export type DeleteAnnotationMutationVariables = {
  input: DeleteAnnotationInput,
  condition?: ModelAnnotationConditionInput | null,
};

export type DeleteAnnotationMutation = {
  deleteAnnotation?:  {
    __typename: "Annotation",
    id: string,
    pageNumber: number,
    x: number,
    y: number,
    endX?: number | null,
    endY?: number | null,
    width?: number | null,
    height?: number | null,
    radius?: number | null,
    rotation?: number | null,
    strokeWidth?: number | null,
    strokeStyle?: string | null,
    color: string,
    type: AnnotationType,
    text?: string | null,
    projectFileID: string,
    projectFile:  {
      __typename: "ProjectFile",
      id: string,
      fileName: string,
      fileType: string,
      fileSize: number,
      description?: string | null,
      uploadedByID: string,
      uploadedAt: string,
      projectID: string,
      isPublic: boolean,
      width?: number | null,
      height?: number | null,
      duration?: number | null,
      thumbnailKey?: string | null,
      createdAt: string,
      updatedAt: string,
      personUploadedFilesId?: string | null,
      projectFilesId?: string | null,
    },
    createdAt: string,
    createdByID: string,
    updatedAt?: string | null,
    updatedByID?: string | null,
    projectFileAnnotationsId?: string | null,
  } | null,
};

export type CreateNotificationMutationVariables = {
  input: CreateNotificationInput,
  condition?: ModelNotificationConditionInput | null,
};

export type CreateNotificationMutation = {
  createNotification?:  {
    __typename: "Notification",
    id: string,
    type: NotificationType,
    messageTemplate: string,
    status: NotificationStatus,
    schedule:  Array< {
      __typename: "NotificationSchedule",
      date: string,
      time: string,
      isRecurring: boolean,
      frequency?: string | null,
      interval?: number | null,
      daysOfWeek?: Array< string | null > | null,
      endDate?: string | null,
      runCount?: number | null,
      maxRuns?: number | null,
    } | null >,
    projectID?: string | null,
    project?:  {
      __typename: "Project",
      id: string,
      name: string,
      description?: string | null,
      startDate?: string | null,
      endDate?: string | null,
      companyID: string,
      templateID?: string | null,
      createdAt: string,
      updatedAt: string,
      companyProjectsId?: string | null,
      projectTemplateProjectsId?: string | null,
      projectAddressId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    projectTemplateNotificationSettingsId?: string | null,
    projectNotificationsId?: string | null,
  } | null,
};

export type UpdateNotificationMutationVariables = {
  input: UpdateNotificationInput,
  condition?: ModelNotificationConditionInput | null,
};

export type UpdateNotificationMutation = {
  updateNotification?:  {
    __typename: "Notification",
    id: string,
    type: NotificationType,
    messageTemplate: string,
    status: NotificationStatus,
    schedule:  Array< {
      __typename: "NotificationSchedule",
      date: string,
      time: string,
      isRecurring: boolean,
      frequency?: string | null,
      interval?: number | null,
      daysOfWeek?: Array< string | null > | null,
      endDate?: string | null,
      runCount?: number | null,
      maxRuns?: number | null,
    } | null >,
    projectID?: string | null,
    project?:  {
      __typename: "Project",
      id: string,
      name: string,
      description?: string | null,
      startDate?: string | null,
      endDate?: string | null,
      companyID: string,
      templateID?: string | null,
      createdAt: string,
      updatedAt: string,
      companyProjectsId?: string | null,
      projectTemplateProjectsId?: string | null,
      projectAddressId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    projectTemplateNotificationSettingsId?: string | null,
    projectNotificationsId?: string | null,
  } | null,
};

export type DeleteNotificationMutationVariables = {
  input: DeleteNotificationInput,
  condition?: ModelNotificationConditionInput | null,
};

export type DeleteNotificationMutation = {
  deleteNotification?:  {
    __typename: "Notification",
    id: string,
    type: NotificationType,
    messageTemplate: string,
    status: NotificationStatus,
    schedule:  Array< {
      __typename: "NotificationSchedule",
      date: string,
      time: string,
      isRecurring: boolean,
      frequency?: string | null,
      interval?: number | null,
      daysOfWeek?: Array< string | null > | null,
      endDate?: string | null,
      runCount?: number | null,
      maxRuns?: number | null,
    } | null >,
    projectID?: string | null,
    project?:  {
      __typename: "Project",
      id: string,
      name: string,
      description?: string | null,
      startDate?: string | null,
      endDate?: string | null,
      companyID: string,
      templateID?: string | null,
      createdAt: string,
      updatedAt: string,
      companyProjectsId?: string | null,
      projectTemplateProjectsId?: string | null,
      projectAddressId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    projectTemplateNotificationSettingsId?: string | null,
    projectNotificationsId?: string | null,
  } | null,
};

export type CreateGroupChatMutationVariables = {
  input: CreateGroupChatInput,
  condition?: ModelGroupChatConditionInput | null,
};

export type CreateGroupChatMutation = {
  createGroupChat?:  {
    __typename: "GroupChat",
    id: string,
    name: string,
    chatType: ChatType,
    messages?:  {
      __typename: "ModelGroupChatMessageConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    status: ChatStatus,
    isDeleted: boolean,
    messageLimit?: number | null,
    lastMessageAt?: string | null,
    companyID: string,
    company?:  {
      __typename: "Company",
      id: string,
      name: string,
      website?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    projectID?: string | null,
    project?:  {
      __typename: "Project",
      id: string,
      name: string,
      description?: string | null,
      startDate?: string | null,
      endDate?: string | null,
      companyID: string,
      templateID?: string | null,
      createdAt: string,
      updatedAt: string,
      companyProjectsId?: string | null,
      projectTemplateProjectsId?: string | null,
      projectAddressId?: string | null,
    } | null,
    scopeItemID?: string | null,
    scopeItem?:  {
      __typename: "ScopeItem",
      id: string,
      name: string,
      description?: string | null,
      category?: string | null,
      costEstimate?: number | null,
      spendEstimate?: number | null,
      durationEstimate?: number | null,
      isCompleted?: boolean | null,
      progress?: number | null,
      tags?: Array< string | null > | null,
      parentItemID?: string | null,
      projectID: string,
      groupID?: string | null,
      createdAt: string,
      updatedAt: string,
      projectScopeItemsId?: string | null,
      scopeItemGroupScopeItemsId?: string | null,
    } | null,
    participants?:  {
      __typename: "ModelChatParticipantsConnection",
      nextToken?: string | null,
    } | null,
    companyChatsId?: string | null,
    projectChatsId?: string | null,
    scopeItemChatsId?: string | null,
  } | null,
};

export type UpdateGroupChatMutationVariables = {
  input: UpdateGroupChatInput,
  condition?: ModelGroupChatConditionInput | null,
};

export type UpdateGroupChatMutation = {
  updateGroupChat?:  {
    __typename: "GroupChat",
    id: string,
    name: string,
    chatType: ChatType,
    messages?:  {
      __typename: "ModelGroupChatMessageConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    status: ChatStatus,
    isDeleted: boolean,
    messageLimit?: number | null,
    lastMessageAt?: string | null,
    companyID: string,
    company?:  {
      __typename: "Company",
      id: string,
      name: string,
      website?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    projectID?: string | null,
    project?:  {
      __typename: "Project",
      id: string,
      name: string,
      description?: string | null,
      startDate?: string | null,
      endDate?: string | null,
      companyID: string,
      templateID?: string | null,
      createdAt: string,
      updatedAt: string,
      companyProjectsId?: string | null,
      projectTemplateProjectsId?: string | null,
      projectAddressId?: string | null,
    } | null,
    scopeItemID?: string | null,
    scopeItem?:  {
      __typename: "ScopeItem",
      id: string,
      name: string,
      description?: string | null,
      category?: string | null,
      costEstimate?: number | null,
      spendEstimate?: number | null,
      durationEstimate?: number | null,
      isCompleted?: boolean | null,
      progress?: number | null,
      tags?: Array< string | null > | null,
      parentItemID?: string | null,
      projectID: string,
      groupID?: string | null,
      createdAt: string,
      updatedAt: string,
      projectScopeItemsId?: string | null,
      scopeItemGroupScopeItemsId?: string | null,
    } | null,
    participants?:  {
      __typename: "ModelChatParticipantsConnection",
      nextToken?: string | null,
    } | null,
    companyChatsId?: string | null,
    projectChatsId?: string | null,
    scopeItemChatsId?: string | null,
  } | null,
};

export type DeleteGroupChatMutationVariables = {
  input: DeleteGroupChatInput,
  condition?: ModelGroupChatConditionInput | null,
};

export type DeleteGroupChatMutation = {
  deleteGroupChat?:  {
    __typename: "GroupChat",
    id: string,
    name: string,
    chatType: ChatType,
    messages?:  {
      __typename: "ModelGroupChatMessageConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    status: ChatStatus,
    isDeleted: boolean,
    messageLimit?: number | null,
    lastMessageAt?: string | null,
    companyID: string,
    company?:  {
      __typename: "Company",
      id: string,
      name: string,
      website?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    projectID?: string | null,
    project?:  {
      __typename: "Project",
      id: string,
      name: string,
      description?: string | null,
      startDate?: string | null,
      endDate?: string | null,
      companyID: string,
      templateID?: string | null,
      createdAt: string,
      updatedAt: string,
      companyProjectsId?: string | null,
      projectTemplateProjectsId?: string | null,
      projectAddressId?: string | null,
    } | null,
    scopeItemID?: string | null,
    scopeItem?:  {
      __typename: "ScopeItem",
      id: string,
      name: string,
      description?: string | null,
      category?: string | null,
      costEstimate?: number | null,
      spendEstimate?: number | null,
      durationEstimate?: number | null,
      isCompleted?: boolean | null,
      progress?: number | null,
      tags?: Array< string | null > | null,
      parentItemID?: string | null,
      projectID: string,
      groupID?: string | null,
      createdAt: string,
      updatedAt: string,
      projectScopeItemsId?: string | null,
      scopeItemGroupScopeItemsId?: string | null,
    } | null,
    participants?:  {
      __typename: "ModelChatParticipantsConnection",
      nextToken?: string | null,
    } | null,
    companyChatsId?: string | null,
    projectChatsId?: string | null,
    scopeItemChatsId?: string | null,
  } | null,
};

export type CreateGroupChatMessageMutationVariables = {
  input: CreateGroupChatMessageInput,
  condition?: ModelGroupChatMessageConditionInput | null,
};

export type CreateGroupChatMessageMutation = {
  createGroupChatMessage?:  {
    __typename: "GroupChatMessage",
    id: string,
    content: string,
    chatID: string,
    chat:  {
      __typename: "GroupChat",
      id: string,
      name: string,
      chatType: ChatType,
      createdAt: string,
      updatedAt: string,
      status: ChatStatus,
      isDeleted: boolean,
      messageLimit?: number | null,
      lastMessageAt?: string | null,
      companyID: string,
      projectID?: string | null,
      scopeItemID?: string | null,
      companyChatsId?: string | null,
      projectChatsId?: string | null,
      scopeItemChatsId?: string | null,
    },
    senderID: string,
    sender:  {
      __typename: "Person",
      id: string,
      cognitoUsername?: string | null,
      cognitoSub?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      email: string,
      status?: string | null,
      phone?: string | null,
      invitedAt?: string | null,
      displayName?: string | null,
      jobSkills?: Array< string | null > | null,
      notes?: string | null,
      timezone?: string | null,
      language?: string | null,
      lastActive?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    timestamp: string,
    isEdited: boolean,
    editedAt?: string | null,
    attachments?:  {
      __typename: "ModelChatAttachmentConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    personSentMessagesId?: string | null,
    groupChatMessagesId?: string | null,
  } | null,
};

export type UpdateGroupChatMessageMutationVariables = {
  input: UpdateGroupChatMessageInput,
  condition?: ModelGroupChatMessageConditionInput | null,
};

export type UpdateGroupChatMessageMutation = {
  updateGroupChatMessage?:  {
    __typename: "GroupChatMessage",
    id: string,
    content: string,
    chatID: string,
    chat:  {
      __typename: "GroupChat",
      id: string,
      name: string,
      chatType: ChatType,
      createdAt: string,
      updatedAt: string,
      status: ChatStatus,
      isDeleted: boolean,
      messageLimit?: number | null,
      lastMessageAt?: string | null,
      companyID: string,
      projectID?: string | null,
      scopeItemID?: string | null,
      companyChatsId?: string | null,
      projectChatsId?: string | null,
      scopeItemChatsId?: string | null,
    },
    senderID: string,
    sender:  {
      __typename: "Person",
      id: string,
      cognitoUsername?: string | null,
      cognitoSub?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      email: string,
      status?: string | null,
      phone?: string | null,
      invitedAt?: string | null,
      displayName?: string | null,
      jobSkills?: Array< string | null > | null,
      notes?: string | null,
      timezone?: string | null,
      language?: string | null,
      lastActive?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    timestamp: string,
    isEdited: boolean,
    editedAt?: string | null,
    attachments?:  {
      __typename: "ModelChatAttachmentConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    personSentMessagesId?: string | null,
    groupChatMessagesId?: string | null,
  } | null,
};

export type DeleteGroupChatMessageMutationVariables = {
  input: DeleteGroupChatMessageInput,
  condition?: ModelGroupChatMessageConditionInput | null,
};

export type DeleteGroupChatMessageMutation = {
  deleteGroupChatMessage?:  {
    __typename: "GroupChatMessage",
    id: string,
    content: string,
    chatID: string,
    chat:  {
      __typename: "GroupChat",
      id: string,
      name: string,
      chatType: ChatType,
      createdAt: string,
      updatedAt: string,
      status: ChatStatus,
      isDeleted: boolean,
      messageLimit?: number | null,
      lastMessageAt?: string | null,
      companyID: string,
      projectID?: string | null,
      scopeItemID?: string | null,
      companyChatsId?: string | null,
      projectChatsId?: string | null,
      scopeItemChatsId?: string | null,
    },
    senderID: string,
    sender:  {
      __typename: "Person",
      id: string,
      cognitoUsername?: string | null,
      cognitoSub?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      email: string,
      status?: string | null,
      phone?: string | null,
      invitedAt?: string | null,
      displayName?: string | null,
      jobSkills?: Array< string | null > | null,
      notes?: string | null,
      timezone?: string | null,
      language?: string | null,
      lastActive?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    timestamp: string,
    isEdited: boolean,
    editedAt?: string | null,
    attachments?:  {
      __typename: "ModelChatAttachmentConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    personSentMessagesId?: string | null,
    groupChatMessagesId?: string | null,
  } | null,
};

export type CreateChatAttachmentMutationVariables = {
  input: CreateChatAttachmentInput,
  condition?: ModelChatAttachmentConditionInput | null,
};

export type CreateChatAttachmentMutation = {
  createChatAttachment?:  {
    __typename: "ChatAttachment",
    id: string,
    fileName: string,
    fileType: string,
    fileSize: number,
    s3Object:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
      etag?: string | null,
      versionId?: string | null,
    },
    uploadedAt: string,
    width?: number | null,
    height?: number | null,
    duration?: number | null,
    thumbnailKey?: string | null,
    messageID: string,
    message:  {
      __typename: "GroupChatMessage",
      id: string,
      content: string,
      chatID: string,
      senderID: string,
      timestamp: string,
      isEdited: boolean,
      editedAt?: string | null,
      createdAt: string,
      updatedAt: string,
      personSentMessagesId?: string | null,
      groupChatMessagesId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    groupChatMessageAttachmentsId?: string | null,
  } | null,
};

export type UpdateChatAttachmentMutationVariables = {
  input: UpdateChatAttachmentInput,
  condition?: ModelChatAttachmentConditionInput | null,
};

export type UpdateChatAttachmentMutation = {
  updateChatAttachment?:  {
    __typename: "ChatAttachment",
    id: string,
    fileName: string,
    fileType: string,
    fileSize: number,
    s3Object:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
      etag?: string | null,
      versionId?: string | null,
    },
    uploadedAt: string,
    width?: number | null,
    height?: number | null,
    duration?: number | null,
    thumbnailKey?: string | null,
    messageID: string,
    message:  {
      __typename: "GroupChatMessage",
      id: string,
      content: string,
      chatID: string,
      senderID: string,
      timestamp: string,
      isEdited: boolean,
      editedAt?: string | null,
      createdAt: string,
      updatedAt: string,
      personSentMessagesId?: string | null,
      groupChatMessagesId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    groupChatMessageAttachmentsId?: string | null,
  } | null,
};

export type DeleteChatAttachmentMutationVariables = {
  input: DeleteChatAttachmentInput,
  condition?: ModelChatAttachmentConditionInput | null,
};

export type DeleteChatAttachmentMutation = {
  deleteChatAttachment?:  {
    __typename: "ChatAttachment",
    id: string,
    fileName: string,
    fileType: string,
    fileSize: number,
    s3Object:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
      etag?: string | null,
      versionId?: string | null,
    },
    uploadedAt: string,
    width?: number | null,
    height?: number | null,
    duration?: number | null,
    thumbnailKey?: string | null,
    messageID: string,
    message:  {
      __typename: "GroupChatMessage",
      id: string,
      content: string,
      chatID: string,
      senderID: string,
      timestamp: string,
      isEdited: boolean,
      editedAt?: string | null,
      createdAt: string,
      updatedAt: string,
      personSentMessagesId?: string | null,
      groupChatMessagesId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    groupChatMessageAttachmentsId?: string | null,
  } | null,
};

export type CreatePersonCompaniesMutationVariables = {
  input: CreatePersonCompaniesInput,
  condition?: ModelPersonCompaniesConditionInput | null,
};

export type CreatePersonCompaniesMutation = {
  createPersonCompanies?:  {
    __typename: "PersonCompanies",
    id: string,
    personId: string,
    companyId: string,
    person:  {
      __typename: "Person",
      id: string,
      cognitoUsername?: string | null,
      cognitoSub?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      email: string,
      status?: string | null,
      phone?: string | null,
      invitedAt?: string | null,
      displayName?: string | null,
      jobSkills?: Array< string | null > | null,
      notes?: string | null,
      timezone?: string | null,
      language?: string | null,
      lastActive?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    company:  {
      __typename: "Company",
      id: string,
      name: string,
      website?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    cognitoUsername?: string | null,
  } | null,
};

export type UpdatePersonCompaniesMutationVariables = {
  input: UpdatePersonCompaniesInput,
  condition?: ModelPersonCompaniesConditionInput | null,
};

export type UpdatePersonCompaniesMutation = {
  updatePersonCompanies?:  {
    __typename: "PersonCompanies",
    id: string,
    personId: string,
    companyId: string,
    person:  {
      __typename: "Person",
      id: string,
      cognitoUsername?: string | null,
      cognitoSub?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      email: string,
      status?: string | null,
      phone?: string | null,
      invitedAt?: string | null,
      displayName?: string | null,
      jobSkills?: Array< string | null > | null,
      notes?: string | null,
      timezone?: string | null,
      language?: string | null,
      lastActive?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    company:  {
      __typename: "Company",
      id: string,
      name: string,
      website?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    cognitoUsername?: string | null,
  } | null,
};

export type DeletePersonCompaniesMutationVariables = {
  input: DeletePersonCompaniesInput,
  condition?: ModelPersonCompaniesConditionInput | null,
};

export type DeletePersonCompaniesMutation = {
  deletePersonCompanies?:  {
    __typename: "PersonCompanies",
    id: string,
    personId: string,
    companyId: string,
    person:  {
      __typename: "Person",
      id: string,
      cognitoUsername?: string | null,
      cognitoSub?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      email: string,
      status?: string | null,
      phone?: string | null,
      invitedAt?: string | null,
      displayName?: string | null,
      jobSkills?: Array< string | null > | null,
      notes?: string | null,
      timezone?: string | null,
      language?: string | null,
      lastActive?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    company:  {
      __typename: "Company",
      id: string,
      name: string,
      website?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    cognitoUsername?: string | null,
  } | null,
};

export type CreateProjectPeopleMutationVariables = {
  input: CreateProjectPeopleInput,
  condition?: ModelProjectPeopleConditionInput | null,
};

export type CreateProjectPeopleMutation = {
  createProjectPeople?:  {
    __typename: "ProjectPeople",
    id: string,
    personId: string,
    projectId: string,
    person:  {
      __typename: "Person",
      id: string,
      cognitoUsername?: string | null,
      cognitoSub?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      email: string,
      status?: string | null,
      phone?: string | null,
      invitedAt?: string | null,
      displayName?: string | null,
      jobSkills?: Array< string | null > | null,
      notes?: string | null,
      timezone?: string | null,
      language?: string | null,
      lastActive?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    project:  {
      __typename: "Project",
      id: string,
      name: string,
      description?: string | null,
      startDate?: string | null,
      endDate?: string | null,
      companyID: string,
      templateID?: string | null,
      createdAt: string,
      updatedAt: string,
      companyProjectsId?: string | null,
      projectTemplateProjectsId?: string | null,
      projectAddressId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    cognitoUsername?: string | null,
  } | null,
};

export type UpdateProjectPeopleMutationVariables = {
  input: UpdateProjectPeopleInput,
  condition?: ModelProjectPeopleConditionInput | null,
};

export type UpdateProjectPeopleMutation = {
  updateProjectPeople?:  {
    __typename: "ProjectPeople",
    id: string,
    personId: string,
    projectId: string,
    person:  {
      __typename: "Person",
      id: string,
      cognitoUsername?: string | null,
      cognitoSub?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      email: string,
      status?: string | null,
      phone?: string | null,
      invitedAt?: string | null,
      displayName?: string | null,
      jobSkills?: Array< string | null > | null,
      notes?: string | null,
      timezone?: string | null,
      language?: string | null,
      lastActive?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    project:  {
      __typename: "Project",
      id: string,
      name: string,
      description?: string | null,
      startDate?: string | null,
      endDate?: string | null,
      companyID: string,
      templateID?: string | null,
      createdAt: string,
      updatedAt: string,
      companyProjectsId?: string | null,
      projectTemplateProjectsId?: string | null,
      projectAddressId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    cognitoUsername?: string | null,
  } | null,
};

export type DeleteProjectPeopleMutationVariables = {
  input: DeleteProjectPeopleInput,
  condition?: ModelProjectPeopleConditionInput | null,
};

export type DeleteProjectPeopleMutation = {
  deleteProjectPeople?:  {
    __typename: "ProjectPeople",
    id: string,
    personId: string,
    projectId: string,
    person:  {
      __typename: "Person",
      id: string,
      cognitoUsername?: string | null,
      cognitoSub?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      email: string,
      status?: string | null,
      phone?: string | null,
      invitedAt?: string | null,
      displayName?: string | null,
      jobSkills?: Array< string | null > | null,
      notes?: string | null,
      timezone?: string | null,
      language?: string | null,
      lastActive?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    project:  {
      __typename: "Project",
      id: string,
      name: string,
      description?: string | null,
      startDate?: string | null,
      endDate?: string | null,
      companyID: string,
      templateID?: string | null,
      createdAt: string,
      updatedAt: string,
      companyProjectsId?: string | null,
      projectTemplateProjectsId?: string | null,
      projectAddressId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    cognitoUsername?: string | null,
  } | null,
};

export type CreateChatParticipantsMutationVariables = {
  input: CreateChatParticipantsInput,
  condition?: ModelChatParticipantsConditionInput | null,
};

export type CreateChatParticipantsMutation = {
  createChatParticipants?:  {
    __typename: "ChatParticipants",
    id: string,
    personId: string,
    groupChatId: string,
    person:  {
      __typename: "Person",
      id: string,
      cognitoUsername?: string | null,
      cognitoSub?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      email: string,
      status?: string | null,
      phone?: string | null,
      invitedAt?: string | null,
      displayName?: string | null,
      jobSkills?: Array< string | null > | null,
      notes?: string | null,
      timezone?: string | null,
      language?: string | null,
      lastActive?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    groupChat:  {
      __typename: "GroupChat",
      id: string,
      name: string,
      chatType: ChatType,
      createdAt: string,
      updatedAt: string,
      status: ChatStatus,
      isDeleted: boolean,
      messageLimit?: number | null,
      lastMessageAt?: string | null,
      companyID: string,
      projectID?: string | null,
      scopeItemID?: string | null,
      companyChatsId?: string | null,
      projectChatsId?: string | null,
      scopeItemChatsId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    cognitoUsername?: string | null,
  } | null,
};

export type UpdateChatParticipantsMutationVariables = {
  input: UpdateChatParticipantsInput,
  condition?: ModelChatParticipantsConditionInput | null,
};

export type UpdateChatParticipantsMutation = {
  updateChatParticipants?:  {
    __typename: "ChatParticipants",
    id: string,
    personId: string,
    groupChatId: string,
    person:  {
      __typename: "Person",
      id: string,
      cognitoUsername?: string | null,
      cognitoSub?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      email: string,
      status?: string | null,
      phone?: string | null,
      invitedAt?: string | null,
      displayName?: string | null,
      jobSkills?: Array< string | null > | null,
      notes?: string | null,
      timezone?: string | null,
      language?: string | null,
      lastActive?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    groupChat:  {
      __typename: "GroupChat",
      id: string,
      name: string,
      chatType: ChatType,
      createdAt: string,
      updatedAt: string,
      status: ChatStatus,
      isDeleted: boolean,
      messageLimit?: number | null,
      lastMessageAt?: string | null,
      companyID: string,
      projectID?: string | null,
      scopeItemID?: string | null,
      companyChatsId?: string | null,
      projectChatsId?: string | null,
      scopeItemChatsId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    cognitoUsername?: string | null,
  } | null,
};

export type DeleteChatParticipantsMutationVariables = {
  input: DeleteChatParticipantsInput,
  condition?: ModelChatParticipantsConditionInput | null,
};

export type DeleteChatParticipantsMutation = {
  deleteChatParticipants?:  {
    __typename: "ChatParticipants",
    id: string,
    personId: string,
    groupChatId: string,
    person:  {
      __typename: "Person",
      id: string,
      cognitoUsername?: string | null,
      cognitoSub?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      email: string,
      status?: string | null,
      phone?: string | null,
      invitedAt?: string | null,
      displayName?: string | null,
      jobSkills?: Array< string | null > | null,
      notes?: string | null,
      timezone?: string | null,
      language?: string | null,
      lastActive?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    groupChat:  {
      __typename: "GroupChat",
      id: string,
      name: string,
      chatType: ChatType,
      createdAt: string,
      updatedAt: string,
      status: ChatStatus,
      isDeleted: boolean,
      messageLimit?: number | null,
      lastMessageAt?: string | null,
      companyID: string,
      projectID?: string | null,
      scopeItemID?: string | null,
      companyChatsId?: string | null,
      projectChatsId?: string | null,
      scopeItemChatsId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    cognitoUsername?: string | null,
  } | null,
};

export type CreateProjectFileTagMutationVariables = {
  input: CreateProjectFileTagInput,
  condition?: ModelProjectFileTagConditionInput | null,
};

export type CreateProjectFileTagMutation = {
  createProjectFileTag?:  {
    __typename: "ProjectFileTag",
    id: string,
    tagId: string,
    projectFileId: string,
    tag:  {
      __typename: "Tag",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    },
    projectFile:  {
      __typename: "ProjectFile",
      id: string,
      fileName: string,
      fileType: string,
      fileSize: number,
      description?: string | null,
      uploadedByID: string,
      uploadedAt: string,
      projectID: string,
      isPublic: boolean,
      width?: number | null,
      height?: number | null,
      duration?: number | null,
      thumbnailKey?: string | null,
      createdAt: string,
      updatedAt: string,
      personUploadedFilesId?: string | null,
      projectFilesId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateProjectFileTagMutationVariables = {
  input: UpdateProjectFileTagInput,
  condition?: ModelProjectFileTagConditionInput | null,
};

export type UpdateProjectFileTagMutation = {
  updateProjectFileTag?:  {
    __typename: "ProjectFileTag",
    id: string,
    tagId: string,
    projectFileId: string,
    tag:  {
      __typename: "Tag",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    },
    projectFile:  {
      __typename: "ProjectFile",
      id: string,
      fileName: string,
      fileType: string,
      fileSize: number,
      description?: string | null,
      uploadedByID: string,
      uploadedAt: string,
      projectID: string,
      isPublic: boolean,
      width?: number | null,
      height?: number | null,
      duration?: number | null,
      thumbnailKey?: string | null,
      createdAt: string,
      updatedAt: string,
      personUploadedFilesId?: string | null,
      projectFilesId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteProjectFileTagMutationVariables = {
  input: DeleteProjectFileTagInput,
  condition?: ModelProjectFileTagConditionInput | null,
};

export type DeleteProjectFileTagMutation = {
  deleteProjectFileTag?:  {
    __typename: "ProjectFileTag",
    id: string,
    tagId: string,
    projectFileId: string,
    tag:  {
      __typename: "Tag",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    },
    projectFile:  {
      __typename: "ProjectFile",
      id: string,
      fileName: string,
      fileType: string,
      fileSize: number,
      description?: string | null,
      uploadedByID: string,
      uploadedAt: string,
      projectID: string,
      isPublic: boolean,
      width?: number | null,
      height?: number | null,
      duration?: number | null,
      thumbnailKey?: string | null,
      createdAt: string,
      updatedAt: string,
      personUploadedFilesId?: string | null,
      projectFilesId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetPersonQueryVariables = {
  id: string,
};

export type GetPersonQuery = {
  getPerson?:  {
    __typename: "Person",
    id: string,
    cognitoUsername?: string | null,
    cognitoSub?: string | null,
    firstName?: string | null,
    lastName?: string | null,
    email: string,
    status?: string | null,
    phone?: string | null,
    invitedAt?: string | null,
    displayName?: string | null,
    jobSkills?: Array< string | null > | null,
    companyRoles?:  {
      __typename: "ModelPersonCompanyRoleConnection",
      nextToken?: string | null,
    } | null,
    companies?:  {
      __typename: "ModelPersonCompaniesConnection",
      nextToken?: string | null,
    } | null,
    projects?:  {
      __typename: "ModelProjectPeopleConnection",
      nextToken?: string | null,
    } | null,
    projectMemberships?:  {
      __typename: "ModelProjectMembershipConnection",
      nextToken?: string | null,
    } | null,
    uploadedFiles?:  {
      __typename: "ModelProjectFileConnection",
      nextToken?: string | null,
    } | null,
    chats?:  {
      __typename: "ModelChatParticipantsConnection",
      nextToken?: string | null,
    } | null,
    sentMessages?:  {
      __typename: "ModelGroupChatMessageConnection",
      nextToken?: string | null,
    } | null,
    notes?: string | null,
    timezone?: string | null,
    language?: string | null,
    lastActive?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListPeopleQueryVariables = {
  id?: string | null,
  filter?: ModelPersonFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListPeopleQuery = {
  listPeople?:  {
    __typename: "ModelPersonConnection",
    items:  Array< {
      __typename: "Person",
      id: string,
      cognitoUsername?: string | null,
      cognitoSub?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      email: string,
      status?: string | null,
      phone?: string | null,
      invitedAt?: string | null,
      displayName?: string | null,
      jobSkills?: Array< string | null > | null,
      notes?: string | null,
      timezone?: string | null,
      language?: string | null,
      lastActive?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetPersonCompanyRoleQueryVariables = {
  id: string,
};

export type GetPersonCompanyRoleQuery = {
  getPersonCompanyRole?:  {
    __typename: "PersonCompanyRole",
    id: string,
    personID: string,
    person:  {
      __typename: "Person",
      id: string,
      cognitoUsername?: string | null,
      cognitoSub?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      email: string,
      status?: string | null,
      phone?: string | null,
      invitedAt?: string | null,
      displayName?: string | null,
      jobSkills?: Array< string | null > | null,
      notes?: string | null,
      timezone?: string | null,
      language?: string | null,
      lastActive?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    companyID: string,
    company:  {
      __typename: "Company",
      id: string,
      name: string,
      website?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    jobRoles: Array< CompanyRoleType | null >,
    isActive: boolean,
    startDate?: string | null,
    endDate?: string | null,
    createdAt: string,
    updatedAt: string,
    personCompanyRolesId?: string | null,
    companyPersonRolesId?: string | null,
  } | null,
};

export type ListPersonCompanyRolesQueryVariables = {
  id?: string | null,
  filter?: ModelPersonCompanyRoleFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListPersonCompanyRolesQuery = {
  listPersonCompanyRoles?:  {
    __typename: "ModelPersonCompanyRoleConnection",
    items:  Array< {
      __typename: "PersonCompanyRole",
      id: string,
      personID: string,
      companyID: string,
      jobRoles: Array< CompanyRoleType | null >,
      isActive: boolean,
      startDate?: string | null,
      endDate?: string | null,
      createdAt: string,
      updatedAt: string,
      personCompanyRolesId?: string | null,
      companyPersonRolesId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetCompanyQueryVariables = {
  id: string,
};

export type GetCompanyQuery = {
  getCompany?:  {
    __typename: "Company",
    id: string,
    name: string,
    website?: string | null,
    people?:  {
      __typename: "ModelPersonCompaniesConnection",
      nextToken?: string | null,
    } | null,
    personRoles?:  {
      __typename: "ModelPersonCompanyRoleConnection",
      nextToken?: string | null,
    } | null,
    projects?:  {
      __typename: "ModelProjectConnection",
      nextToken?: string | null,
    } | null,
    projectTemplates?:  {
      __typename: "ModelProjectTemplateConnection",
      nextToken?: string | null,
    } | null,
    scopeItemTags?:  {
      __typename: "ModelScopeItemTagConnection",
      nextToken?: string | null,
    } | null,
    templateScopeItemTags?:  {
      __typename: "ModelTemplateScopeItemTagConnection",
      nextToken?: string | null,
    } | null,
    chats?:  {
      __typename: "ModelGroupChatConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListCompaniesQueryVariables = {
  id?: string | null,
  filter?: ModelCompanyFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListCompaniesQuery = {
  listCompanies?:  {
    __typename: "ModelCompanyConnection",
    items:  Array< {
      __typename: "Company",
      id: string,
      name: string,
      website?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetProjectTemplateQueryVariables = {
  id: string,
};

export type GetProjectTemplateQuery = {
  getProjectTemplate?:  {
    __typename: "ProjectTemplate",
    id: string,
    name: string,
    description?: string | null,
    companyID: string,
    company?:  {
      __typename: "Company",
      id: string,
      name: string,
      website?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    projects?:  {
      __typename: "ModelProjectConnection",
      nextToken?: string | null,
    } | null,
    scopeItems?:  {
      __typename: "ModelTemplateScopeItemConnection",
      nextToken?: string | null,
    } | null,
    templateScopeItemTags?:  {
      __typename: "ModelTemplateScopeItemTagConnection",
      nextToken?: string | null,
    } | null,
    estimatedDuration?: number | null,
    defaultAddress?:  {
      __typename: "Address",
      id: string,
      street: string,
      city: string,
      state: string,
      postalCode: string,
      country: string,
      projectID?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    notificationSettings?:  {
      __typename: "ModelNotificationConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    companyProjectTemplatesId?: string | null,
    projectTemplateDefaultAddressId?: string | null,
  } | null,
};

export type ListProjectTemplatesQueryVariables = {
  id?: string | null,
  filter?: ModelProjectTemplateFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListProjectTemplatesQuery = {
  listProjectTemplates?:  {
    __typename: "ModelProjectTemplateConnection",
    items:  Array< {
      __typename: "ProjectTemplate",
      id: string,
      name: string,
      description?: string | null,
      companyID: string,
      estimatedDuration?: number | null,
      createdAt: string,
      updatedAt: string,
      companyProjectTemplatesId?: string | null,
      projectTemplateDefaultAddressId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetTemplateScopeItemQueryVariables = {
  id: string,
};

export type GetTemplateScopeItemQuery = {
  getTemplateScopeItem?:  {
    __typename: "TemplateScopeItem",
    id: string,
    name: string,
    description?: string | null,
    parentItemID?: string | null,
    parentItem?:  {
      __typename: "TemplateScopeItem",
      id: string,
      name: string,
      description?: string | null,
      parentItemID?: string | null,
      projectTemplateID: string,
      tags?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
      projectTemplateScopeItemsId?: string | null,
    } | null,
    childItems?:  {
      __typename: "ModelTemplateScopeItemConnection",
      nextToken?: string | null,
    } | null,
    projectTemplateID: string,
    projectTemplate?:  {
      __typename: "ProjectTemplate",
      id: string,
      name: string,
      description?: string | null,
      companyID: string,
      estimatedDuration?: number | null,
      createdAt: string,
      updatedAt: string,
      companyProjectTemplatesId?: string | null,
      projectTemplateDefaultAddressId?: string | null,
    } | null,
    tags?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
    projectTemplateScopeItemsId?: string | null,
  } | null,
};

export type ListTemplateScopeItemsQueryVariables = {
  id?: string | null,
  filter?: ModelTemplateScopeItemFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListTemplateScopeItemsQuery = {
  listTemplateScopeItems?:  {
    __typename: "ModelTemplateScopeItemConnection",
    items:  Array< {
      __typename: "TemplateScopeItem",
      id: string,
      name: string,
      description?: string | null,
      parentItemID?: string | null,
      projectTemplateID: string,
      tags?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
      projectTemplateScopeItemsId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetProjectMembershipQueryVariables = {
  id: string,
};

export type GetProjectMembershipQuery = {
  getProjectMembership?:  {
    __typename: "ProjectMembership",
    id: string,
    projectID: string,
    project:  {
      __typename: "Project",
      id: string,
      name: string,
      description?: string | null,
      startDate?: string | null,
      endDate?: string | null,
      companyID: string,
      templateID?: string | null,
      createdAt: string,
      updatedAt: string,
      companyProjectsId?: string | null,
      projectTemplateProjectsId?: string | null,
      projectAddressId?: string | null,
    },
    personID: string,
    person:  {
      __typename: "Person",
      id: string,
      cognitoUsername?: string | null,
      cognitoSub?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      email: string,
      status?: string | null,
      phone?: string | null,
      invitedAt?: string | null,
      displayName?: string | null,
      jobSkills?: Array< string | null > | null,
      notes?: string | null,
      timezone?: string | null,
      language?: string | null,
      lastActive?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    roles: Array< string | null >,
    isActive: boolean,
    startDate?: string | null,
    endDate?: string | null,
    createdAt: string,
    updatedAt: string,
    personProjectMembershipsId?: string | null,
    projectMembershipsId?: string | null,
  } | null,
};

export type ListProjectMembershipsQueryVariables = {
  id?: string | null,
  filter?: ModelProjectMembershipFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListProjectMembershipsQuery = {
  listProjectMemberships?:  {
    __typename: "ModelProjectMembershipConnection",
    items:  Array< {
      __typename: "ProjectMembership",
      id: string,
      projectID: string,
      personID: string,
      roles: Array< string | null >,
      isActive: boolean,
      startDate?: string | null,
      endDate?: string | null,
      createdAt: string,
      updatedAt: string,
      personProjectMembershipsId?: string | null,
      projectMembershipsId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetProjectQueryVariables = {
  id: string,
};

export type GetProjectQuery = {
  getProject?:  {
    __typename: "Project",
    id: string,
    name: string,
    description?: string | null,
    startDate?: string | null,
    endDate?: string | null,
    companyID: string,
    company?:  {
      __typename: "Company",
      id: string,
      name: string,
      website?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    templateID?: string | null,
    template?:  {
      __typename: "ProjectTemplate",
      id: string,
      name: string,
      description?: string | null,
      companyID: string,
      estimatedDuration?: number | null,
      createdAt: string,
      updatedAt: string,
      companyProjectTemplatesId?: string | null,
      projectTemplateDefaultAddressId?: string | null,
    } | null,
    people?:  {
      __typename: "ModelProjectPeopleConnection",
      nextToken?: string | null,
    } | null,
    memberships?:  {
      __typename: "ModelProjectMembershipConnection",
      nextToken?: string | null,
    } | null,
    files?:  {
      __typename: "ModelProjectFileConnection",
      nextToken?: string | null,
    } | null,
    address?:  {
      __typename: "Address",
      id: string,
      street: string,
      city: string,
      state: string,
      postalCode: string,
      country: string,
      projectID?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    notifications?:  {
      __typename: "ModelNotificationConnection",
      nextToken?: string | null,
    } | null,
    chats?:  {
      __typename: "ModelGroupChatConnection",
      nextToken?: string | null,
    } | null,
    scopeItems?:  {
      __typename: "ModelScopeItemConnection",
      nextToken?: string | null,
    } | null,
    scopeItemGroups?:  {
      __typename: "ModelScopeItemGroupConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    companyProjectsId?: string | null,
    projectTemplateProjectsId?: string | null,
    projectAddressId?: string | null,
  } | null,
};

export type ListProjectsQueryVariables = {
  id?: string | null,
  filter?: ModelProjectFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListProjectsQuery = {
  listProjects?:  {
    __typename: "ModelProjectConnection",
    items:  Array< {
      __typename: "Project",
      id: string,
      name: string,
      description?: string | null,
      startDate?: string | null,
      endDate?: string | null,
      companyID: string,
      templateID?: string | null,
      createdAt: string,
      updatedAt: string,
      companyProjectsId?: string | null,
      projectTemplateProjectsId?: string | null,
      projectAddressId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetScopeItemTagQueryVariables = {
  id: string,
};

export type GetScopeItemTagQuery = {
  getScopeItemTag?:  {
    __typename: "ScopeItemTag",
    id: string,
    name: string,
    description?: string | null,
    companyID: string,
    company?:  {
      __typename: "Company",
      id: string,
      name: string,
      website?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    color?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    companyScopeItemTagsId?: string | null,
  } | null,
};

export type ListScopeItemTagsQueryVariables = {
  id?: string | null,
  filter?: ModelScopeItemTagFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListScopeItemTagsQuery = {
  listScopeItemTags?:  {
    __typename: "ModelScopeItemTagConnection",
    items:  Array< {
      __typename: "ScopeItemTag",
      id: string,
      name: string,
      description?: string | null,
      companyID: string,
      color?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      companyScopeItemTagsId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetTemplateScopeItemTagQueryVariables = {
  id: string,
};

export type GetTemplateScopeItemTagQuery = {
  getTemplateScopeItemTag?:  {
    __typename: "TemplateScopeItemTag",
    id: string,
    name: string,
    description?: string | null,
    companyID: string,
    company?:  {
      __typename: "Company",
      id: string,
      name: string,
      website?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    projectTemplateID: string,
    projectTemplate?:  {
      __typename: "ProjectTemplate",
      id: string,
      name: string,
      description?: string | null,
      companyID: string,
      estimatedDuration?: number | null,
      createdAt: string,
      updatedAt: string,
      companyProjectTemplatesId?: string | null,
      projectTemplateDefaultAddressId?: string | null,
    } | null,
    color?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    companyTemplateScopeItemTagsId?: string | null,
    projectTemplateTemplateScopeItemTagsId?: string | null,
  } | null,
};

export type ListTemplateScopeItemTagsQueryVariables = {
  id?: string | null,
  filter?: ModelTemplateScopeItemTagFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListTemplateScopeItemTagsQuery = {
  listTemplateScopeItemTags?:  {
    __typename: "ModelTemplateScopeItemTagConnection",
    items:  Array< {
      __typename: "TemplateScopeItemTag",
      id: string,
      name: string,
      description?: string | null,
      companyID: string,
      projectTemplateID: string,
      color?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      companyTemplateScopeItemTagsId?: string | null,
      projectTemplateTemplateScopeItemTagsId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetScopeItemGroupQueryVariables = {
  id: string,
};

export type GetScopeItemGroupQuery = {
  getScopeItemGroup?:  {
    __typename: "ScopeItemGroup",
    id: string,
    name: string,
    description?: string | null,
    projectID: string,
    project?:  {
      __typename: "Project",
      id: string,
      name: string,
      description?: string | null,
      startDate?: string | null,
      endDate?: string | null,
      companyID: string,
      templateID?: string | null,
      createdAt: string,
      updatedAt: string,
      companyProjectsId?: string | null,
      projectTemplateProjectsId?: string | null,
      projectAddressId?: string | null,
    } | null,
    scopeItems?:  {
      __typename: "ModelScopeItemConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    projectScopeItemGroupsId?: string | null,
  } | null,
};

export type ListScopeItemGroupsQueryVariables = {
  id?: string | null,
  filter?: ModelScopeItemGroupFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListScopeItemGroupsQuery = {
  listScopeItemGroups?:  {
    __typename: "ModelScopeItemGroupConnection",
    items:  Array< {
      __typename: "ScopeItemGroup",
      id: string,
      name: string,
      description?: string | null,
      projectID: string,
      createdAt: string,
      updatedAt: string,
      projectScopeItemGroupsId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetScopeItemQueryVariables = {
  id: string,
};

export type GetScopeItemQuery = {
  getScopeItem?:  {
    __typename: "ScopeItem",
    id: string,
    name: string,
    description?: string | null,
    category?: string | null,
    costEstimate?: number | null,
    spendEstimate?: number | null,
    durationEstimate?: number | null,
    isCompleted?: boolean | null,
    progress?: number | null,
    tags?: Array< string | null > | null,
    parentItemID?: string | null,
    parentItem?:  {
      __typename: "ScopeItem",
      id: string,
      name: string,
      description?: string | null,
      category?: string | null,
      costEstimate?: number | null,
      spendEstimate?: number | null,
      durationEstimate?: number | null,
      isCompleted?: boolean | null,
      progress?: number | null,
      tags?: Array< string | null > | null,
      parentItemID?: string | null,
      projectID: string,
      groupID?: string | null,
      createdAt: string,
      updatedAt: string,
      projectScopeItemsId?: string | null,
      scopeItemGroupScopeItemsId?: string | null,
    } | null,
    childItems?:  {
      __typename: "ModelScopeItemConnection",
      nextToken?: string | null,
    } | null,
    projectID: string,
    project?:  {
      __typename: "Project",
      id: string,
      name: string,
      description?: string | null,
      startDate?: string | null,
      endDate?: string | null,
      companyID: string,
      templateID?: string | null,
      createdAt: string,
      updatedAt: string,
      companyProjectsId?: string | null,
      projectTemplateProjectsId?: string | null,
      projectAddressId?: string | null,
    } | null,
    groupID?: string | null,
    group?:  {
      __typename: "ScopeItemGroup",
      id: string,
      name: string,
      description?: string | null,
      projectID: string,
      createdAt: string,
      updatedAt: string,
      projectScopeItemGroupsId?: string | null,
    } | null,
    chats?:  {
      __typename: "ModelGroupChatConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    projectScopeItemsId?: string | null,
    scopeItemGroupScopeItemsId?: string | null,
  } | null,
};

export type ListScopeItemsQueryVariables = {
  id?: string | null,
  filter?: ModelScopeItemFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListScopeItemsQuery = {
  listScopeItems?:  {
    __typename: "ModelScopeItemConnection",
    items:  Array< {
      __typename: "ScopeItem",
      id: string,
      name: string,
      description?: string | null,
      category?: string | null,
      costEstimate?: number | null,
      spendEstimate?: number | null,
      durationEstimate?: number | null,
      isCompleted?: boolean | null,
      progress?: number | null,
      tags?: Array< string | null > | null,
      parentItemID?: string | null,
      projectID: string,
      groupID?: string | null,
      createdAt: string,
      updatedAt: string,
      projectScopeItemsId?: string | null,
      scopeItemGroupScopeItemsId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetAddressQueryVariables = {
  id: string,
};

export type GetAddressQuery = {
  getAddress?:  {
    __typename: "Address",
    id: string,
    street: string,
    city: string,
    state: string,
    postalCode: string,
    country: string,
    projectID?: string | null,
    project?:  {
      __typename: "Project",
      id: string,
      name: string,
      description?: string | null,
      startDate?: string | null,
      endDate?: string | null,
      companyID: string,
      templateID?: string | null,
      createdAt: string,
      updatedAt: string,
      companyProjectsId?: string | null,
      projectTemplateProjectsId?: string | null,
      projectAddressId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListAddressesQueryVariables = {
  id?: string | null,
  filter?: ModelAddressFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListAddressesQuery = {
  listAddresses?:  {
    __typename: "ModelAddressConnection",
    items:  Array< {
      __typename: "Address",
      id: string,
      street: string,
      city: string,
      state: string,
      postalCode: string,
      country: string,
      projectID?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetTagQueryVariables = {
  id: string,
};

export type GetTagQuery = {
  getTag?:  {
    __typename: "Tag",
    id: string,
    name: string,
    files?:  {
      __typename: "ModelProjectFileTagConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListTagsQueryVariables = {
  id?: string | null,
  filter?: ModelTagFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListTagsQuery = {
  listTags?:  {
    __typename: "ModelTagConnection",
    items:  Array< {
      __typename: "Tag",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetProjectFileQueryVariables = {
  id: string,
};

export type GetProjectFileQuery = {
  getProjectFile?:  {
    __typename: "ProjectFile",
    id: string,
    fileName: string,
    fileType: string,
    fileSize: number,
    description?: string | null,
    uploadedByID: string,
    uploadedBy?:  {
      __typename: "Person",
      id: string,
      cognitoUsername?: string | null,
      cognitoSub?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      email: string,
      status?: string | null,
      phone?: string | null,
      invitedAt?: string | null,
      displayName?: string | null,
      jobSkills?: Array< string | null > | null,
      notes?: string | null,
      timezone?: string | null,
      language?: string | null,
      lastActive?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    uploadedAt: string,
    projectID: string,
    project?:  {
      __typename: "Project",
      id: string,
      name: string,
      description?: string | null,
      startDate?: string | null,
      endDate?: string | null,
      companyID: string,
      templateID?: string | null,
      createdAt: string,
      updatedAt: string,
      companyProjectsId?: string | null,
      projectTemplateProjectsId?: string | null,
      projectAddressId?: string | null,
    } | null,
    s3Object:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
      etag?: string | null,
      versionId?: string | null,
    },
    isPublic: boolean,
    width?: number | null,
    height?: number | null,
    duration?: number | null,
    thumbnailKey?: string | null,
    tags?:  {
      __typename: "ModelProjectFileTagConnection",
      nextToken?: string | null,
    } | null,
    annotations?:  {
      __typename: "ModelAnnotationConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    personUploadedFilesId?: string | null,
    projectFilesId?: string | null,
  } | null,
};

export type ListProjectFilesQueryVariables = {
  id?: string | null,
  filter?: ModelProjectFileFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListProjectFilesQuery = {
  listProjectFiles?:  {
    __typename: "ModelProjectFileConnection",
    items:  Array< {
      __typename: "ProjectFile",
      id: string,
      fileName: string,
      fileType: string,
      fileSize: number,
      description?: string | null,
      uploadedByID: string,
      uploadedAt: string,
      projectID: string,
      isPublic: boolean,
      width?: number | null,
      height?: number | null,
      duration?: number | null,
      thumbnailKey?: string | null,
      createdAt: string,
      updatedAt: string,
      personUploadedFilesId?: string | null,
      projectFilesId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetAnnotationQueryVariables = {
  id: string,
};

export type GetAnnotationQuery = {
  getAnnotation?:  {
    __typename: "Annotation",
    id: string,
    pageNumber: number,
    x: number,
    y: number,
    endX?: number | null,
    endY?: number | null,
    width?: number | null,
    height?: number | null,
    radius?: number | null,
    rotation?: number | null,
    strokeWidth?: number | null,
    strokeStyle?: string | null,
    color: string,
    type: AnnotationType,
    text?: string | null,
    projectFileID: string,
    projectFile:  {
      __typename: "ProjectFile",
      id: string,
      fileName: string,
      fileType: string,
      fileSize: number,
      description?: string | null,
      uploadedByID: string,
      uploadedAt: string,
      projectID: string,
      isPublic: boolean,
      width?: number | null,
      height?: number | null,
      duration?: number | null,
      thumbnailKey?: string | null,
      createdAt: string,
      updatedAt: string,
      personUploadedFilesId?: string | null,
      projectFilesId?: string | null,
    },
    createdAt: string,
    createdByID: string,
    updatedAt?: string | null,
    updatedByID?: string | null,
    projectFileAnnotationsId?: string | null,
  } | null,
};

export type ListAnnotationsQueryVariables = {
  id?: string | null,
  filter?: ModelAnnotationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListAnnotationsQuery = {
  listAnnotations?:  {
    __typename: "ModelAnnotationConnection",
    items:  Array< {
      __typename: "Annotation",
      id: string,
      pageNumber: number,
      x: number,
      y: number,
      endX?: number | null,
      endY?: number | null,
      width?: number | null,
      height?: number | null,
      radius?: number | null,
      rotation?: number | null,
      strokeWidth?: number | null,
      strokeStyle?: string | null,
      color: string,
      type: AnnotationType,
      text?: string | null,
      projectFileID: string,
      createdAt: string,
      createdByID: string,
      updatedAt?: string | null,
      updatedByID?: string | null,
      projectFileAnnotationsId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetNotificationQueryVariables = {
  id: string,
};

export type GetNotificationQuery = {
  getNotification?:  {
    __typename: "Notification",
    id: string,
    type: NotificationType,
    messageTemplate: string,
    status: NotificationStatus,
    schedule:  Array< {
      __typename: "NotificationSchedule",
      date: string,
      time: string,
      isRecurring: boolean,
      frequency?: string | null,
      interval?: number | null,
      daysOfWeek?: Array< string | null > | null,
      endDate?: string | null,
      runCount?: number | null,
      maxRuns?: number | null,
    } | null >,
    projectID?: string | null,
    project?:  {
      __typename: "Project",
      id: string,
      name: string,
      description?: string | null,
      startDate?: string | null,
      endDate?: string | null,
      companyID: string,
      templateID?: string | null,
      createdAt: string,
      updatedAt: string,
      companyProjectsId?: string | null,
      projectTemplateProjectsId?: string | null,
      projectAddressId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    projectTemplateNotificationSettingsId?: string | null,
    projectNotificationsId?: string | null,
  } | null,
};

export type ListNotificationsQueryVariables = {
  id?: string | null,
  filter?: ModelNotificationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListNotificationsQuery = {
  listNotifications?:  {
    __typename: "ModelNotificationConnection",
    items:  Array< {
      __typename: "Notification",
      id: string,
      type: NotificationType,
      messageTemplate: string,
      status: NotificationStatus,
      projectID?: string | null,
      createdAt: string,
      updatedAt: string,
      projectTemplateNotificationSettingsId?: string | null,
      projectNotificationsId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetGroupChatQueryVariables = {
  id: string,
};

export type GetGroupChatQuery = {
  getGroupChat?:  {
    __typename: "GroupChat",
    id: string,
    name: string,
    chatType: ChatType,
    messages?:  {
      __typename: "ModelGroupChatMessageConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    status: ChatStatus,
    isDeleted: boolean,
    messageLimit?: number | null,
    lastMessageAt?: string | null,
    companyID: string,
    company?:  {
      __typename: "Company",
      id: string,
      name: string,
      website?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    projectID?: string | null,
    project?:  {
      __typename: "Project",
      id: string,
      name: string,
      description?: string | null,
      startDate?: string | null,
      endDate?: string | null,
      companyID: string,
      templateID?: string | null,
      createdAt: string,
      updatedAt: string,
      companyProjectsId?: string | null,
      projectTemplateProjectsId?: string | null,
      projectAddressId?: string | null,
    } | null,
    scopeItemID?: string | null,
    scopeItem?:  {
      __typename: "ScopeItem",
      id: string,
      name: string,
      description?: string | null,
      category?: string | null,
      costEstimate?: number | null,
      spendEstimate?: number | null,
      durationEstimate?: number | null,
      isCompleted?: boolean | null,
      progress?: number | null,
      tags?: Array< string | null > | null,
      parentItemID?: string | null,
      projectID: string,
      groupID?: string | null,
      createdAt: string,
      updatedAt: string,
      projectScopeItemsId?: string | null,
      scopeItemGroupScopeItemsId?: string | null,
    } | null,
    participants?:  {
      __typename: "ModelChatParticipantsConnection",
      nextToken?: string | null,
    } | null,
    companyChatsId?: string | null,
    projectChatsId?: string | null,
    scopeItemChatsId?: string | null,
  } | null,
};

export type ListGroupChatsQueryVariables = {
  id?: string | null,
  filter?: ModelGroupChatFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListGroupChatsQuery = {
  listGroupChats?:  {
    __typename: "ModelGroupChatConnection",
    items:  Array< {
      __typename: "GroupChat",
      id: string,
      name: string,
      chatType: ChatType,
      createdAt: string,
      updatedAt: string,
      status: ChatStatus,
      isDeleted: boolean,
      messageLimit?: number | null,
      lastMessageAt?: string | null,
      companyID: string,
      projectID?: string | null,
      scopeItemID?: string | null,
      companyChatsId?: string | null,
      projectChatsId?: string | null,
      scopeItemChatsId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetGroupChatMessageQueryVariables = {
  id: string,
};

export type GetGroupChatMessageQuery = {
  getGroupChatMessage?:  {
    __typename: "GroupChatMessage",
    id: string,
    content: string,
    chatID: string,
    chat:  {
      __typename: "GroupChat",
      id: string,
      name: string,
      chatType: ChatType,
      createdAt: string,
      updatedAt: string,
      status: ChatStatus,
      isDeleted: boolean,
      messageLimit?: number | null,
      lastMessageAt?: string | null,
      companyID: string,
      projectID?: string | null,
      scopeItemID?: string | null,
      companyChatsId?: string | null,
      projectChatsId?: string | null,
      scopeItemChatsId?: string | null,
    },
    senderID: string,
    sender:  {
      __typename: "Person",
      id: string,
      cognitoUsername?: string | null,
      cognitoSub?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      email: string,
      status?: string | null,
      phone?: string | null,
      invitedAt?: string | null,
      displayName?: string | null,
      jobSkills?: Array< string | null > | null,
      notes?: string | null,
      timezone?: string | null,
      language?: string | null,
      lastActive?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    timestamp: string,
    isEdited: boolean,
    editedAt?: string | null,
    attachments?:  {
      __typename: "ModelChatAttachmentConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    personSentMessagesId?: string | null,
    groupChatMessagesId?: string | null,
  } | null,
};

export type ListGroupChatMessagesQueryVariables = {
  id?: string | null,
  filter?: ModelGroupChatMessageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListGroupChatMessagesQuery = {
  listGroupChatMessages?:  {
    __typename: "ModelGroupChatMessageConnection",
    items:  Array< {
      __typename: "GroupChatMessage",
      id: string,
      content: string,
      chatID: string,
      senderID: string,
      timestamp: string,
      isEdited: boolean,
      editedAt?: string | null,
      createdAt: string,
      updatedAt: string,
      personSentMessagesId?: string | null,
      groupChatMessagesId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetChatAttachmentQueryVariables = {
  id: string,
};

export type GetChatAttachmentQuery = {
  getChatAttachment?:  {
    __typename: "ChatAttachment",
    id: string,
    fileName: string,
    fileType: string,
    fileSize: number,
    s3Object:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
      etag?: string | null,
      versionId?: string | null,
    },
    uploadedAt: string,
    width?: number | null,
    height?: number | null,
    duration?: number | null,
    thumbnailKey?: string | null,
    messageID: string,
    message:  {
      __typename: "GroupChatMessage",
      id: string,
      content: string,
      chatID: string,
      senderID: string,
      timestamp: string,
      isEdited: boolean,
      editedAt?: string | null,
      createdAt: string,
      updatedAt: string,
      personSentMessagesId?: string | null,
      groupChatMessagesId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    groupChatMessageAttachmentsId?: string | null,
  } | null,
};

export type ListChatAttachmentsQueryVariables = {
  id?: string | null,
  filter?: ModelChatAttachmentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListChatAttachmentsQuery = {
  listChatAttachments?:  {
    __typename: "ModelChatAttachmentConnection",
    items:  Array< {
      __typename: "ChatAttachment",
      id: string,
      fileName: string,
      fileType: string,
      fileSize: number,
      uploadedAt: string,
      width?: number | null,
      height?: number | null,
      duration?: number | null,
      thumbnailKey?: string | null,
      messageID: string,
      createdAt: string,
      updatedAt: string,
      groupChatMessageAttachmentsId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetPersonCompaniesQueryVariables = {
  id: string,
};

export type GetPersonCompaniesQuery = {
  getPersonCompanies?:  {
    __typename: "PersonCompanies",
    id: string,
    personId: string,
    companyId: string,
    person:  {
      __typename: "Person",
      id: string,
      cognitoUsername?: string | null,
      cognitoSub?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      email: string,
      status?: string | null,
      phone?: string | null,
      invitedAt?: string | null,
      displayName?: string | null,
      jobSkills?: Array< string | null > | null,
      notes?: string | null,
      timezone?: string | null,
      language?: string | null,
      lastActive?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    company:  {
      __typename: "Company",
      id: string,
      name: string,
      website?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    cognitoUsername?: string | null,
  } | null,
};

export type ListPersonCompaniesQueryVariables = {
  filter?: ModelPersonCompaniesFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPersonCompaniesQuery = {
  listPersonCompanies?:  {
    __typename: "ModelPersonCompaniesConnection",
    items:  Array< {
      __typename: "PersonCompanies",
      id: string,
      personId: string,
      companyId: string,
      createdAt: string,
      updatedAt: string,
      cognitoUsername?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetProjectPeopleQueryVariables = {
  id: string,
};

export type GetProjectPeopleQuery = {
  getProjectPeople?:  {
    __typename: "ProjectPeople",
    id: string,
    personId: string,
    projectId: string,
    person:  {
      __typename: "Person",
      id: string,
      cognitoUsername?: string | null,
      cognitoSub?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      email: string,
      status?: string | null,
      phone?: string | null,
      invitedAt?: string | null,
      displayName?: string | null,
      jobSkills?: Array< string | null > | null,
      notes?: string | null,
      timezone?: string | null,
      language?: string | null,
      lastActive?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    project:  {
      __typename: "Project",
      id: string,
      name: string,
      description?: string | null,
      startDate?: string | null,
      endDate?: string | null,
      companyID: string,
      templateID?: string | null,
      createdAt: string,
      updatedAt: string,
      companyProjectsId?: string | null,
      projectTemplateProjectsId?: string | null,
      projectAddressId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    cognitoUsername?: string | null,
  } | null,
};

export type ListProjectPeopleQueryVariables = {
  filter?: ModelProjectPeopleFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListProjectPeopleQuery = {
  listProjectPeople?:  {
    __typename: "ModelProjectPeopleConnection",
    items:  Array< {
      __typename: "ProjectPeople",
      id: string,
      personId: string,
      projectId: string,
      createdAt: string,
      updatedAt: string,
      cognitoUsername?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetChatParticipantsQueryVariables = {
  id: string,
};

export type GetChatParticipantsQuery = {
  getChatParticipants?:  {
    __typename: "ChatParticipants",
    id: string,
    personId: string,
    groupChatId: string,
    person:  {
      __typename: "Person",
      id: string,
      cognitoUsername?: string | null,
      cognitoSub?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      email: string,
      status?: string | null,
      phone?: string | null,
      invitedAt?: string | null,
      displayName?: string | null,
      jobSkills?: Array< string | null > | null,
      notes?: string | null,
      timezone?: string | null,
      language?: string | null,
      lastActive?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    groupChat:  {
      __typename: "GroupChat",
      id: string,
      name: string,
      chatType: ChatType,
      createdAt: string,
      updatedAt: string,
      status: ChatStatus,
      isDeleted: boolean,
      messageLimit?: number | null,
      lastMessageAt?: string | null,
      companyID: string,
      projectID?: string | null,
      scopeItemID?: string | null,
      companyChatsId?: string | null,
      projectChatsId?: string | null,
      scopeItemChatsId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    cognitoUsername?: string | null,
  } | null,
};

export type ListChatParticipantsQueryVariables = {
  filter?: ModelChatParticipantsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListChatParticipantsQuery = {
  listChatParticipants?:  {
    __typename: "ModelChatParticipantsConnection",
    items:  Array< {
      __typename: "ChatParticipants",
      id: string,
      personId: string,
      groupChatId: string,
      createdAt: string,
      updatedAt: string,
      cognitoUsername?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetProjectFileTagQueryVariables = {
  id: string,
};

export type GetProjectFileTagQuery = {
  getProjectFileTag?:  {
    __typename: "ProjectFileTag",
    id: string,
    tagId: string,
    projectFileId: string,
    tag:  {
      __typename: "Tag",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    },
    projectFile:  {
      __typename: "ProjectFile",
      id: string,
      fileName: string,
      fileType: string,
      fileSize: number,
      description?: string | null,
      uploadedByID: string,
      uploadedAt: string,
      projectID: string,
      isPublic: boolean,
      width?: number | null,
      height?: number | null,
      duration?: number | null,
      thumbnailKey?: string | null,
      createdAt: string,
      updatedAt: string,
      personUploadedFilesId?: string | null,
      projectFilesId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListProjectFileTagsQueryVariables = {
  filter?: ModelProjectFileTagFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListProjectFileTagsQuery = {
  listProjectFileTags?:  {
    __typename: "ModelProjectFileTagConnection",
    items:  Array< {
      __typename: "ProjectFileTag",
      id: string,
      tagId: string,
      projectFileId: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type PeopleByCognitoUsernameQueryVariables = {
  cognitoUsername: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelPersonFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type PeopleByCognitoUsernameQuery = {
  peopleByCognitoUsername?:  {
    __typename: "ModelPersonConnection",
    items:  Array< {
      __typename: "Person",
      id: string,
      cognitoUsername?: string | null,
      cognitoSub?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      email: string,
      status?: string | null,
      phone?: string | null,
      invitedAt?: string | null,
      displayName?: string | null,
      jobSkills?: Array< string | null > | null,
      notes?: string | null,
      timezone?: string | null,
      language?: string | null,
      lastActive?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type PeopleByCognitoSubQueryVariables = {
  cognitoSub: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelPersonFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type PeopleByCognitoSubQuery = {
  peopleByCognitoSub?:  {
    __typename: "ModelPersonConnection",
    items:  Array< {
      __typename: "Person",
      id: string,
      cognitoUsername?: string | null,
      cognitoSub?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      email: string,
      status?: string | null,
      phone?: string | null,
      invitedAt?: string | null,
      displayName?: string | null,
      jobSkills?: Array< string | null > | null,
      notes?: string | null,
      timezone?: string | null,
      language?: string | null,
      lastActive?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type PersonCompanyRolesByPersonIDQueryVariables = {
  personID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelPersonCompanyRoleFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type PersonCompanyRolesByPersonIDQuery = {
  personCompanyRolesByPersonID?:  {
    __typename: "ModelPersonCompanyRoleConnection",
    items:  Array< {
      __typename: "PersonCompanyRole",
      id: string,
      personID: string,
      companyID: string,
      jobRoles: Array< CompanyRoleType | null >,
      isActive: boolean,
      startDate?: string | null,
      endDate?: string | null,
      createdAt: string,
      updatedAt: string,
      personCompanyRolesId?: string | null,
      companyPersonRolesId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type PersonCompanyRolesByCompanyIDQueryVariables = {
  companyID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelPersonCompanyRoleFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type PersonCompanyRolesByCompanyIDQuery = {
  personCompanyRolesByCompanyID?:  {
    __typename: "ModelPersonCompanyRoleConnection",
    items:  Array< {
      __typename: "PersonCompanyRole",
      id: string,
      personID: string,
      companyID: string,
      jobRoles: Array< CompanyRoleType | null >,
      isActive: boolean,
      startDate?: string | null,
      endDate?: string | null,
      createdAt: string,
      updatedAt: string,
      personCompanyRolesId?: string | null,
      companyPersonRolesId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ProjectTemplatesByCompanyIDQueryVariables = {
  companyID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelProjectTemplateFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ProjectTemplatesByCompanyIDQuery = {
  projectTemplatesByCompanyID?:  {
    __typename: "ModelProjectTemplateConnection",
    items:  Array< {
      __typename: "ProjectTemplate",
      id: string,
      name: string,
      description?: string | null,
      companyID: string,
      estimatedDuration?: number | null,
      createdAt: string,
      updatedAt: string,
      companyProjectTemplatesId?: string | null,
      projectTemplateDefaultAddressId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type TemplateScopeItemsByParentItemIDQueryVariables = {
  parentItemID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelTemplateScopeItemFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type TemplateScopeItemsByParentItemIDQuery = {
  templateScopeItemsByParentItemID?:  {
    __typename: "ModelTemplateScopeItemConnection",
    items:  Array< {
      __typename: "TemplateScopeItem",
      id: string,
      name: string,
      description?: string | null,
      parentItemID?: string | null,
      projectTemplateID: string,
      tags?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
      projectTemplateScopeItemsId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type TemplateScopeItemsByProjectTemplateIDQueryVariables = {
  projectTemplateID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelTemplateScopeItemFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type TemplateScopeItemsByProjectTemplateIDQuery = {
  templateScopeItemsByProjectTemplateID?:  {
    __typename: "ModelTemplateScopeItemConnection",
    items:  Array< {
      __typename: "TemplateScopeItem",
      id: string,
      name: string,
      description?: string | null,
      parentItemID?: string | null,
      projectTemplateID: string,
      tags?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
      projectTemplateScopeItemsId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ProjectMembershipsByProjectIDQueryVariables = {
  projectID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelProjectMembershipFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ProjectMembershipsByProjectIDQuery = {
  projectMembershipsByProjectID?:  {
    __typename: "ModelProjectMembershipConnection",
    items:  Array< {
      __typename: "ProjectMembership",
      id: string,
      projectID: string,
      personID: string,
      roles: Array< string | null >,
      isActive: boolean,
      startDate?: string | null,
      endDate?: string | null,
      createdAt: string,
      updatedAt: string,
      personProjectMembershipsId?: string | null,
      projectMembershipsId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ProjectMembershipsByPersonIDQueryVariables = {
  personID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelProjectMembershipFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ProjectMembershipsByPersonIDQuery = {
  projectMembershipsByPersonID?:  {
    __typename: "ModelProjectMembershipConnection",
    items:  Array< {
      __typename: "ProjectMembership",
      id: string,
      projectID: string,
      personID: string,
      roles: Array< string | null >,
      isActive: boolean,
      startDate?: string | null,
      endDate?: string | null,
      createdAt: string,
      updatedAt: string,
      personProjectMembershipsId?: string | null,
      projectMembershipsId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ProjectsByCompanyIDQueryVariables = {
  companyID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelProjectFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ProjectsByCompanyIDQuery = {
  projectsByCompanyID?:  {
    __typename: "ModelProjectConnection",
    items:  Array< {
      __typename: "Project",
      id: string,
      name: string,
      description?: string | null,
      startDate?: string | null,
      endDate?: string | null,
      companyID: string,
      templateID?: string | null,
      createdAt: string,
      updatedAt: string,
      companyProjectsId?: string | null,
      projectTemplateProjectsId?: string | null,
      projectAddressId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ProjectsByTemplateIDQueryVariables = {
  templateID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelProjectFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ProjectsByTemplateIDQuery = {
  projectsByTemplateID?:  {
    __typename: "ModelProjectConnection",
    items:  Array< {
      __typename: "Project",
      id: string,
      name: string,
      description?: string | null,
      startDate?: string | null,
      endDate?: string | null,
      companyID: string,
      templateID?: string | null,
      createdAt: string,
      updatedAt: string,
      companyProjectsId?: string | null,
      projectTemplateProjectsId?: string | null,
      projectAddressId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ScopeItemTagsByCompanyIDQueryVariables = {
  companyID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelScopeItemTagFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ScopeItemTagsByCompanyIDQuery = {
  scopeItemTagsByCompanyID?:  {
    __typename: "ModelScopeItemTagConnection",
    items:  Array< {
      __typename: "ScopeItemTag",
      id: string,
      name: string,
      description?: string | null,
      companyID: string,
      color?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      companyScopeItemTagsId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type TemplateScopeItemTagsByCompanyIDQueryVariables = {
  companyID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelTemplateScopeItemTagFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type TemplateScopeItemTagsByCompanyIDQuery = {
  templateScopeItemTagsByCompanyID?:  {
    __typename: "ModelTemplateScopeItemTagConnection",
    items:  Array< {
      __typename: "TemplateScopeItemTag",
      id: string,
      name: string,
      description?: string | null,
      companyID: string,
      projectTemplateID: string,
      color?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      companyTemplateScopeItemTagsId?: string | null,
      projectTemplateTemplateScopeItemTagsId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type TemplateScopeItemTagsByProjectTemplateIDQueryVariables = {
  projectTemplateID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelTemplateScopeItemTagFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type TemplateScopeItemTagsByProjectTemplateIDQuery = {
  templateScopeItemTagsByProjectTemplateID?:  {
    __typename: "ModelTemplateScopeItemTagConnection",
    items:  Array< {
      __typename: "TemplateScopeItemTag",
      id: string,
      name: string,
      description?: string | null,
      companyID: string,
      projectTemplateID: string,
      color?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      companyTemplateScopeItemTagsId?: string | null,
      projectTemplateTemplateScopeItemTagsId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ScopeItemGroupsByProjectIDQueryVariables = {
  projectID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelScopeItemGroupFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ScopeItemGroupsByProjectIDQuery = {
  scopeItemGroupsByProjectID?:  {
    __typename: "ModelScopeItemGroupConnection",
    items:  Array< {
      __typename: "ScopeItemGroup",
      id: string,
      name: string,
      description?: string | null,
      projectID: string,
      createdAt: string,
      updatedAt: string,
      projectScopeItemGroupsId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ScopeItemsByParentItemIDQueryVariables = {
  parentItemID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelScopeItemFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ScopeItemsByParentItemIDQuery = {
  scopeItemsByParentItemID?:  {
    __typename: "ModelScopeItemConnection",
    items:  Array< {
      __typename: "ScopeItem",
      id: string,
      name: string,
      description?: string | null,
      category?: string | null,
      costEstimate?: number | null,
      spendEstimate?: number | null,
      durationEstimate?: number | null,
      isCompleted?: boolean | null,
      progress?: number | null,
      tags?: Array< string | null > | null,
      parentItemID?: string | null,
      projectID: string,
      groupID?: string | null,
      createdAt: string,
      updatedAt: string,
      projectScopeItemsId?: string | null,
      scopeItemGroupScopeItemsId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ScopeItemsByProjectIDQueryVariables = {
  projectID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelScopeItemFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ScopeItemsByProjectIDQuery = {
  scopeItemsByProjectID?:  {
    __typename: "ModelScopeItemConnection",
    items:  Array< {
      __typename: "ScopeItem",
      id: string,
      name: string,
      description?: string | null,
      category?: string | null,
      costEstimate?: number | null,
      spendEstimate?: number | null,
      durationEstimate?: number | null,
      isCompleted?: boolean | null,
      progress?: number | null,
      tags?: Array< string | null > | null,
      parentItemID?: string | null,
      projectID: string,
      groupID?: string | null,
      createdAt: string,
      updatedAt: string,
      projectScopeItemsId?: string | null,
      scopeItemGroupScopeItemsId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ScopeItemsByGroupIDQueryVariables = {
  groupID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelScopeItemFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ScopeItemsByGroupIDQuery = {
  scopeItemsByGroupID?:  {
    __typename: "ModelScopeItemConnection",
    items:  Array< {
      __typename: "ScopeItem",
      id: string,
      name: string,
      description?: string | null,
      category?: string | null,
      costEstimate?: number | null,
      spendEstimate?: number | null,
      durationEstimate?: number | null,
      isCompleted?: boolean | null,
      progress?: number | null,
      tags?: Array< string | null > | null,
      parentItemID?: string | null,
      projectID: string,
      groupID?: string | null,
      createdAt: string,
      updatedAt: string,
      projectScopeItemsId?: string | null,
      scopeItemGroupScopeItemsId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type AddressesByProjectIDQueryVariables = {
  projectID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelAddressFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type AddressesByProjectIDQuery = {
  addressesByProjectID?:  {
    __typename: "ModelAddressConnection",
    items:  Array< {
      __typename: "Address",
      id: string,
      street: string,
      city: string,
      state: string,
      postalCode: string,
      country: string,
      projectID?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ProjectFilesByUploadedByIDAndUploadedAtQueryVariables = {
  uploadedByID: string,
  uploadedAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelProjectFileFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ProjectFilesByUploadedByIDAndUploadedAtQuery = {
  projectFilesByUploadedByIDAndUploadedAt?:  {
    __typename: "ModelProjectFileConnection",
    items:  Array< {
      __typename: "ProjectFile",
      id: string,
      fileName: string,
      fileType: string,
      fileSize: number,
      description?: string | null,
      uploadedByID: string,
      uploadedAt: string,
      projectID: string,
      isPublic: boolean,
      width?: number | null,
      height?: number | null,
      duration?: number | null,
      thumbnailKey?: string | null,
      createdAt: string,
      updatedAt: string,
      personUploadedFilesId?: string | null,
      projectFilesId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ProjectFilesByProjectIDAndUploadedAtQueryVariables = {
  projectID: string,
  uploadedAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelProjectFileFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ProjectFilesByProjectIDAndUploadedAtQuery = {
  projectFilesByProjectIDAndUploadedAt?:  {
    __typename: "ModelProjectFileConnection",
    items:  Array< {
      __typename: "ProjectFile",
      id: string,
      fileName: string,
      fileType: string,
      fileSize: number,
      description?: string | null,
      uploadedByID: string,
      uploadedAt: string,
      projectID: string,
      isPublic: boolean,
      width?: number | null,
      height?: number | null,
      duration?: number | null,
      thumbnailKey?: string | null,
      createdAt: string,
      updatedAt: string,
      personUploadedFilesId?: string | null,
      projectFilesId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type AnnotationsByProjectFileIDQueryVariables = {
  projectFileID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelAnnotationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type AnnotationsByProjectFileIDQuery = {
  annotationsByProjectFileID?:  {
    __typename: "ModelAnnotationConnection",
    items:  Array< {
      __typename: "Annotation",
      id: string,
      pageNumber: number,
      x: number,
      y: number,
      endX?: number | null,
      endY?: number | null,
      width?: number | null,
      height?: number | null,
      radius?: number | null,
      rotation?: number | null,
      strokeWidth?: number | null,
      strokeStyle?: string | null,
      color: string,
      type: AnnotationType,
      text?: string | null,
      projectFileID: string,
      createdAt: string,
      createdByID: string,
      updatedAt?: string | null,
      updatedByID?: string | null,
      projectFileAnnotationsId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type AnnotationsByCreatedByIDQueryVariables = {
  createdByID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelAnnotationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type AnnotationsByCreatedByIDQuery = {
  annotationsByCreatedByID?:  {
    __typename: "ModelAnnotationConnection",
    items:  Array< {
      __typename: "Annotation",
      id: string,
      pageNumber: number,
      x: number,
      y: number,
      endX?: number | null,
      endY?: number | null,
      width?: number | null,
      height?: number | null,
      radius?: number | null,
      rotation?: number | null,
      strokeWidth?: number | null,
      strokeStyle?: string | null,
      color: string,
      type: AnnotationType,
      text?: string | null,
      projectFileID: string,
      createdAt: string,
      createdByID: string,
      updatedAt?: string | null,
      updatedByID?: string | null,
      projectFileAnnotationsId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type AnnotationsByUpdatedByIDQueryVariables = {
  updatedByID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelAnnotationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type AnnotationsByUpdatedByIDQuery = {
  annotationsByUpdatedByID?:  {
    __typename: "ModelAnnotationConnection",
    items:  Array< {
      __typename: "Annotation",
      id: string,
      pageNumber: number,
      x: number,
      y: number,
      endX?: number | null,
      endY?: number | null,
      width?: number | null,
      height?: number | null,
      radius?: number | null,
      rotation?: number | null,
      strokeWidth?: number | null,
      strokeStyle?: string | null,
      color: string,
      type: AnnotationType,
      text?: string | null,
      projectFileID: string,
      createdAt: string,
      createdByID: string,
      updatedAt?: string | null,
      updatedByID?: string | null,
      projectFileAnnotationsId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type NotificationsByProjectIDQueryVariables = {
  projectID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelNotificationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type NotificationsByProjectIDQuery = {
  notificationsByProjectID?:  {
    __typename: "ModelNotificationConnection",
    items:  Array< {
      __typename: "Notification",
      id: string,
      type: NotificationType,
      messageTemplate: string,
      status: NotificationStatus,
      projectID?: string | null,
      createdAt: string,
      updatedAt: string,
      projectTemplateNotificationSettingsId?: string | null,
      projectNotificationsId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GroupChatsByCompanyIDQueryVariables = {
  companyID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelGroupChatFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type GroupChatsByCompanyIDQuery = {
  groupChatsByCompanyID?:  {
    __typename: "ModelGroupChatConnection",
    items:  Array< {
      __typename: "GroupChat",
      id: string,
      name: string,
      chatType: ChatType,
      createdAt: string,
      updatedAt: string,
      status: ChatStatus,
      isDeleted: boolean,
      messageLimit?: number | null,
      lastMessageAt?: string | null,
      companyID: string,
      projectID?: string | null,
      scopeItemID?: string | null,
      companyChatsId?: string | null,
      projectChatsId?: string | null,
      scopeItemChatsId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GroupChatsByProjectIDQueryVariables = {
  projectID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelGroupChatFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type GroupChatsByProjectIDQuery = {
  groupChatsByProjectID?:  {
    __typename: "ModelGroupChatConnection",
    items:  Array< {
      __typename: "GroupChat",
      id: string,
      name: string,
      chatType: ChatType,
      createdAt: string,
      updatedAt: string,
      status: ChatStatus,
      isDeleted: boolean,
      messageLimit?: number | null,
      lastMessageAt?: string | null,
      companyID: string,
      projectID?: string | null,
      scopeItemID?: string | null,
      companyChatsId?: string | null,
      projectChatsId?: string | null,
      scopeItemChatsId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GroupChatsByScopeItemIDQueryVariables = {
  scopeItemID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelGroupChatFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type GroupChatsByScopeItemIDQuery = {
  groupChatsByScopeItemID?:  {
    __typename: "ModelGroupChatConnection",
    items:  Array< {
      __typename: "GroupChat",
      id: string,
      name: string,
      chatType: ChatType,
      createdAt: string,
      updatedAt: string,
      status: ChatStatus,
      isDeleted: boolean,
      messageLimit?: number | null,
      lastMessageAt?: string | null,
      companyID: string,
      projectID?: string | null,
      scopeItemID?: string | null,
      companyChatsId?: string | null,
      projectChatsId?: string | null,
      scopeItemChatsId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GroupChatMessagesByChatIDAndTimestampQueryVariables = {
  chatID: string,
  timestamp?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelGroupChatMessageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type GroupChatMessagesByChatIDAndTimestampQuery = {
  groupChatMessagesByChatIDAndTimestamp?:  {
    __typename: "ModelGroupChatMessageConnection",
    items:  Array< {
      __typename: "GroupChatMessage",
      id: string,
      content: string,
      chatID: string,
      senderID: string,
      timestamp: string,
      isEdited: boolean,
      editedAt?: string | null,
      createdAt: string,
      updatedAt: string,
      personSentMessagesId?: string | null,
      groupChatMessagesId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GroupChatMessagesBySenderIDQueryVariables = {
  senderID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelGroupChatMessageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type GroupChatMessagesBySenderIDQuery = {
  groupChatMessagesBySenderID?:  {
    __typename: "ModelGroupChatMessageConnection",
    items:  Array< {
      __typename: "GroupChatMessage",
      id: string,
      content: string,
      chatID: string,
      senderID: string,
      timestamp: string,
      isEdited: boolean,
      editedAt?: string | null,
      createdAt: string,
      updatedAt: string,
      personSentMessagesId?: string | null,
      groupChatMessagesId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ChatAttachmentsByMessageIDQueryVariables = {
  messageID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelChatAttachmentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ChatAttachmentsByMessageIDQuery = {
  chatAttachmentsByMessageID?:  {
    __typename: "ModelChatAttachmentConnection",
    items:  Array< {
      __typename: "ChatAttachment",
      id: string,
      fileName: string,
      fileType: string,
      fileSize: number,
      uploadedAt: string,
      width?: number | null,
      height?: number | null,
      duration?: number | null,
      thumbnailKey?: string | null,
      messageID: string,
      createdAt: string,
      updatedAt: string,
      groupChatMessageAttachmentsId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type PersonCompaniesByPersonIdQueryVariables = {
  personId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelPersonCompaniesFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type PersonCompaniesByPersonIdQuery = {
  personCompaniesByPersonId?:  {
    __typename: "ModelPersonCompaniesConnection",
    items:  Array< {
      __typename: "PersonCompanies",
      id: string,
      personId: string,
      companyId: string,
      createdAt: string,
      updatedAt: string,
      cognitoUsername?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type PersonCompaniesByCompanyIdQueryVariables = {
  companyId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelPersonCompaniesFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type PersonCompaniesByCompanyIdQuery = {
  personCompaniesByCompanyId?:  {
    __typename: "ModelPersonCompaniesConnection",
    items:  Array< {
      __typename: "PersonCompanies",
      id: string,
      personId: string,
      companyId: string,
      createdAt: string,
      updatedAt: string,
      cognitoUsername?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ProjectPeopleByPersonIdQueryVariables = {
  personId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelProjectPeopleFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ProjectPeopleByPersonIdQuery = {
  projectPeopleByPersonId?:  {
    __typename: "ModelProjectPeopleConnection",
    items:  Array< {
      __typename: "ProjectPeople",
      id: string,
      personId: string,
      projectId: string,
      createdAt: string,
      updatedAt: string,
      cognitoUsername?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ProjectPeopleByProjectIdQueryVariables = {
  projectId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelProjectPeopleFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ProjectPeopleByProjectIdQuery = {
  projectPeopleByProjectId?:  {
    __typename: "ModelProjectPeopleConnection",
    items:  Array< {
      __typename: "ProjectPeople",
      id: string,
      personId: string,
      projectId: string,
      createdAt: string,
      updatedAt: string,
      cognitoUsername?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ChatParticipantsByPersonIdQueryVariables = {
  personId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelChatParticipantsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ChatParticipantsByPersonIdQuery = {
  chatParticipantsByPersonId?:  {
    __typename: "ModelChatParticipantsConnection",
    items:  Array< {
      __typename: "ChatParticipants",
      id: string,
      personId: string,
      groupChatId: string,
      createdAt: string,
      updatedAt: string,
      cognitoUsername?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ChatParticipantsByGroupChatIdQueryVariables = {
  groupChatId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelChatParticipantsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ChatParticipantsByGroupChatIdQuery = {
  chatParticipantsByGroupChatId?:  {
    __typename: "ModelChatParticipantsConnection",
    items:  Array< {
      __typename: "ChatParticipants",
      id: string,
      personId: string,
      groupChatId: string,
      createdAt: string,
      updatedAt: string,
      cognitoUsername?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ProjectFileTagsByTagIdQueryVariables = {
  tagId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelProjectFileTagFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ProjectFileTagsByTagIdQuery = {
  projectFileTagsByTagId?:  {
    __typename: "ModelProjectFileTagConnection",
    items:  Array< {
      __typename: "ProjectFileTag",
      id: string,
      tagId: string,
      projectFileId: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ProjectFileTagsByProjectFileIdQueryVariables = {
  projectFileId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelProjectFileTagFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ProjectFileTagsByProjectFileIdQuery = {
  projectFileTagsByProjectFileId?:  {
    __typename: "ModelProjectFileTagConnection",
    items:  Array< {
      __typename: "ProjectFileTag",
      id: string,
      tagId: string,
      projectFileId: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreatePersonSubscriptionVariables = {
  filter?: ModelSubscriptionPersonFilterInput | null,
  cognitoUsername?: string | null,
};

export type OnCreatePersonSubscription = {
  onCreatePerson?:  {
    __typename: "Person",
    id: string,
    cognitoUsername?: string | null,
    cognitoSub?: string | null,
    firstName?: string | null,
    lastName?: string | null,
    email: string,
    status?: string | null,
    phone?: string | null,
    invitedAt?: string | null,
    displayName?: string | null,
    jobSkills?: Array< string | null > | null,
    companyRoles?:  {
      __typename: "ModelPersonCompanyRoleConnection",
      nextToken?: string | null,
    } | null,
    companies?:  {
      __typename: "ModelPersonCompaniesConnection",
      nextToken?: string | null,
    } | null,
    projects?:  {
      __typename: "ModelProjectPeopleConnection",
      nextToken?: string | null,
    } | null,
    projectMemberships?:  {
      __typename: "ModelProjectMembershipConnection",
      nextToken?: string | null,
    } | null,
    uploadedFiles?:  {
      __typename: "ModelProjectFileConnection",
      nextToken?: string | null,
    } | null,
    chats?:  {
      __typename: "ModelChatParticipantsConnection",
      nextToken?: string | null,
    } | null,
    sentMessages?:  {
      __typename: "ModelGroupChatMessageConnection",
      nextToken?: string | null,
    } | null,
    notes?: string | null,
    timezone?: string | null,
    language?: string | null,
    lastActive?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdatePersonSubscriptionVariables = {
  filter?: ModelSubscriptionPersonFilterInput | null,
  cognitoUsername?: string | null,
};

export type OnUpdatePersonSubscription = {
  onUpdatePerson?:  {
    __typename: "Person",
    id: string,
    cognitoUsername?: string | null,
    cognitoSub?: string | null,
    firstName?: string | null,
    lastName?: string | null,
    email: string,
    status?: string | null,
    phone?: string | null,
    invitedAt?: string | null,
    displayName?: string | null,
    jobSkills?: Array< string | null > | null,
    companyRoles?:  {
      __typename: "ModelPersonCompanyRoleConnection",
      nextToken?: string | null,
    } | null,
    companies?:  {
      __typename: "ModelPersonCompaniesConnection",
      nextToken?: string | null,
    } | null,
    projects?:  {
      __typename: "ModelProjectPeopleConnection",
      nextToken?: string | null,
    } | null,
    projectMemberships?:  {
      __typename: "ModelProjectMembershipConnection",
      nextToken?: string | null,
    } | null,
    uploadedFiles?:  {
      __typename: "ModelProjectFileConnection",
      nextToken?: string | null,
    } | null,
    chats?:  {
      __typename: "ModelChatParticipantsConnection",
      nextToken?: string | null,
    } | null,
    sentMessages?:  {
      __typename: "ModelGroupChatMessageConnection",
      nextToken?: string | null,
    } | null,
    notes?: string | null,
    timezone?: string | null,
    language?: string | null,
    lastActive?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeletePersonSubscriptionVariables = {
  filter?: ModelSubscriptionPersonFilterInput | null,
  cognitoUsername?: string | null,
};

export type OnDeletePersonSubscription = {
  onDeletePerson?:  {
    __typename: "Person",
    id: string,
    cognitoUsername?: string | null,
    cognitoSub?: string | null,
    firstName?: string | null,
    lastName?: string | null,
    email: string,
    status?: string | null,
    phone?: string | null,
    invitedAt?: string | null,
    displayName?: string | null,
    jobSkills?: Array< string | null > | null,
    companyRoles?:  {
      __typename: "ModelPersonCompanyRoleConnection",
      nextToken?: string | null,
    } | null,
    companies?:  {
      __typename: "ModelPersonCompaniesConnection",
      nextToken?: string | null,
    } | null,
    projects?:  {
      __typename: "ModelProjectPeopleConnection",
      nextToken?: string | null,
    } | null,
    projectMemberships?:  {
      __typename: "ModelProjectMembershipConnection",
      nextToken?: string | null,
    } | null,
    uploadedFiles?:  {
      __typename: "ModelProjectFileConnection",
      nextToken?: string | null,
    } | null,
    chats?:  {
      __typename: "ModelChatParticipantsConnection",
      nextToken?: string | null,
    } | null,
    sentMessages?:  {
      __typename: "ModelGroupChatMessageConnection",
      nextToken?: string | null,
    } | null,
    notes?: string | null,
    timezone?: string | null,
    language?: string | null,
    lastActive?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreatePersonCompanyRoleSubscriptionVariables = {
  filter?: ModelSubscriptionPersonCompanyRoleFilterInput | null,
};

export type OnCreatePersonCompanyRoleSubscription = {
  onCreatePersonCompanyRole?:  {
    __typename: "PersonCompanyRole",
    id: string,
    personID: string,
    person:  {
      __typename: "Person",
      id: string,
      cognitoUsername?: string | null,
      cognitoSub?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      email: string,
      status?: string | null,
      phone?: string | null,
      invitedAt?: string | null,
      displayName?: string | null,
      jobSkills?: Array< string | null > | null,
      notes?: string | null,
      timezone?: string | null,
      language?: string | null,
      lastActive?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    companyID: string,
    company:  {
      __typename: "Company",
      id: string,
      name: string,
      website?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    jobRoles: Array< CompanyRoleType | null >,
    isActive: boolean,
    startDate?: string | null,
    endDate?: string | null,
    createdAt: string,
    updatedAt: string,
    personCompanyRolesId?: string | null,
    companyPersonRolesId?: string | null,
  } | null,
};

export type OnUpdatePersonCompanyRoleSubscriptionVariables = {
  filter?: ModelSubscriptionPersonCompanyRoleFilterInput | null,
};

export type OnUpdatePersonCompanyRoleSubscription = {
  onUpdatePersonCompanyRole?:  {
    __typename: "PersonCompanyRole",
    id: string,
    personID: string,
    person:  {
      __typename: "Person",
      id: string,
      cognitoUsername?: string | null,
      cognitoSub?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      email: string,
      status?: string | null,
      phone?: string | null,
      invitedAt?: string | null,
      displayName?: string | null,
      jobSkills?: Array< string | null > | null,
      notes?: string | null,
      timezone?: string | null,
      language?: string | null,
      lastActive?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    companyID: string,
    company:  {
      __typename: "Company",
      id: string,
      name: string,
      website?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    jobRoles: Array< CompanyRoleType | null >,
    isActive: boolean,
    startDate?: string | null,
    endDate?: string | null,
    createdAt: string,
    updatedAt: string,
    personCompanyRolesId?: string | null,
    companyPersonRolesId?: string | null,
  } | null,
};

export type OnDeletePersonCompanyRoleSubscriptionVariables = {
  filter?: ModelSubscriptionPersonCompanyRoleFilterInput | null,
};

export type OnDeletePersonCompanyRoleSubscription = {
  onDeletePersonCompanyRole?:  {
    __typename: "PersonCompanyRole",
    id: string,
    personID: string,
    person:  {
      __typename: "Person",
      id: string,
      cognitoUsername?: string | null,
      cognitoSub?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      email: string,
      status?: string | null,
      phone?: string | null,
      invitedAt?: string | null,
      displayName?: string | null,
      jobSkills?: Array< string | null > | null,
      notes?: string | null,
      timezone?: string | null,
      language?: string | null,
      lastActive?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    companyID: string,
    company:  {
      __typename: "Company",
      id: string,
      name: string,
      website?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    jobRoles: Array< CompanyRoleType | null >,
    isActive: boolean,
    startDate?: string | null,
    endDate?: string | null,
    createdAt: string,
    updatedAt: string,
    personCompanyRolesId?: string | null,
    companyPersonRolesId?: string | null,
  } | null,
};

export type OnCreateCompanySubscriptionVariables = {
  filter?: ModelSubscriptionCompanyFilterInput | null,
};

export type OnCreateCompanySubscription = {
  onCreateCompany?:  {
    __typename: "Company",
    id: string,
    name: string,
    website?: string | null,
    people?:  {
      __typename: "ModelPersonCompaniesConnection",
      nextToken?: string | null,
    } | null,
    personRoles?:  {
      __typename: "ModelPersonCompanyRoleConnection",
      nextToken?: string | null,
    } | null,
    projects?:  {
      __typename: "ModelProjectConnection",
      nextToken?: string | null,
    } | null,
    projectTemplates?:  {
      __typename: "ModelProjectTemplateConnection",
      nextToken?: string | null,
    } | null,
    scopeItemTags?:  {
      __typename: "ModelScopeItemTagConnection",
      nextToken?: string | null,
    } | null,
    templateScopeItemTags?:  {
      __typename: "ModelTemplateScopeItemTagConnection",
      nextToken?: string | null,
    } | null,
    chats?:  {
      __typename: "ModelGroupChatConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateCompanySubscriptionVariables = {
  filter?: ModelSubscriptionCompanyFilterInput | null,
};

export type OnUpdateCompanySubscription = {
  onUpdateCompany?:  {
    __typename: "Company",
    id: string,
    name: string,
    website?: string | null,
    people?:  {
      __typename: "ModelPersonCompaniesConnection",
      nextToken?: string | null,
    } | null,
    personRoles?:  {
      __typename: "ModelPersonCompanyRoleConnection",
      nextToken?: string | null,
    } | null,
    projects?:  {
      __typename: "ModelProjectConnection",
      nextToken?: string | null,
    } | null,
    projectTemplates?:  {
      __typename: "ModelProjectTemplateConnection",
      nextToken?: string | null,
    } | null,
    scopeItemTags?:  {
      __typename: "ModelScopeItemTagConnection",
      nextToken?: string | null,
    } | null,
    templateScopeItemTags?:  {
      __typename: "ModelTemplateScopeItemTagConnection",
      nextToken?: string | null,
    } | null,
    chats?:  {
      __typename: "ModelGroupChatConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteCompanySubscriptionVariables = {
  filter?: ModelSubscriptionCompanyFilterInput | null,
};

export type OnDeleteCompanySubscription = {
  onDeleteCompany?:  {
    __typename: "Company",
    id: string,
    name: string,
    website?: string | null,
    people?:  {
      __typename: "ModelPersonCompaniesConnection",
      nextToken?: string | null,
    } | null,
    personRoles?:  {
      __typename: "ModelPersonCompanyRoleConnection",
      nextToken?: string | null,
    } | null,
    projects?:  {
      __typename: "ModelProjectConnection",
      nextToken?: string | null,
    } | null,
    projectTemplates?:  {
      __typename: "ModelProjectTemplateConnection",
      nextToken?: string | null,
    } | null,
    scopeItemTags?:  {
      __typename: "ModelScopeItemTagConnection",
      nextToken?: string | null,
    } | null,
    templateScopeItemTags?:  {
      __typename: "ModelTemplateScopeItemTagConnection",
      nextToken?: string | null,
    } | null,
    chats?:  {
      __typename: "ModelGroupChatConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateProjectTemplateSubscriptionVariables = {
  filter?: ModelSubscriptionProjectTemplateFilterInput | null,
};

export type OnCreateProjectTemplateSubscription = {
  onCreateProjectTemplate?:  {
    __typename: "ProjectTemplate",
    id: string,
    name: string,
    description?: string | null,
    companyID: string,
    company?:  {
      __typename: "Company",
      id: string,
      name: string,
      website?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    projects?:  {
      __typename: "ModelProjectConnection",
      nextToken?: string | null,
    } | null,
    scopeItems?:  {
      __typename: "ModelTemplateScopeItemConnection",
      nextToken?: string | null,
    } | null,
    templateScopeItemTags?:  {
      __typename: "ModelTemplateScopeItemTagConnection",
      nextToken?: string | null,
    } | null,
    estimatedDuration?: number | null,
    defaultAddress?:  {
      __typename: "Address",
      id: string,
      street: string,
      city: string,
      state: string,
      postalCode: string,
      country: string,
      projectID?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    notificationSettings?:  {
      __typename: "ModelNotificationConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    companyProjectTemplatesId?: string | null,
    projectTemplateDefaultAddressId?: string | null,
  } | null,
};

export type OnUpdateProjectTemplateSubscriptionVariables = {
  filter?: ModelSubscriptionProjectTemplateFilterInput | null,
};

export type OnUpdateProjectTemplateSubscription = {
  onUpdateProjectTemplate?:  {
    __typename: "ProjectTemplate",
    id: string,
    name: string,
    description?: string | null,
    companyID: string,
    company?:  {
      __typename: "Company",
      id: string,
      name: string,
      website?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    projects?:  {
      __typename: "ModelProjectConnection",
      nextToken?: string | null,
    } | null,
    scopeItems?:  {
      __typename: "ModelTemplateScopeItemConnection",
      nextToken?: string | null,
    } | null,
    templateScopeItemTags?:  {
      __typename: "ModelTemplateScopeItemTagConnection",
      nextToken?: string | null,
    } | null,
    estimatedDuration?: number | null,
    defaultAddress?:  {
      __typename: "Address",
      id: string,
      street: string,
      city: string,
      state: string,
      postalCode: string,
      country: string,
      projectID?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    notificationSettings?:  {
      __typename: "ModelNotificationConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    companyProjectTemplatesId?: string | null,
    projectTemplateDefaultAddressId?: string | null,
  } | null,
};

export type OnDeleteProjectTemplateSubscriptionVariables = {
  filter?: ModelSubscriptionProjectTemplateFilterInput | null,
};

export type OnDeleteProjectTemplateSubscription = {
  onDeleteProjectTemplate?:  {
    __typename: "ProjectTemplate",
    id: string,
    name: string,
    description?: string | null,
    companyID: string,
    company?:  {
      __typename: "Company",
      id: string,
      name: string,
      website?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    projects?:  {
      __typename: "ModelProjectConnection",
      nextToken?: string | null,
    } | null,
    scopeItems?:  {
      __typename: "ModelTemplateScopeItemConnection",
      nextToken?: string | null,
    } | null,
    templateScopeItemTags?:  {
      __typename: "ModelTemplateScopeItemTagConnection",
      nextToken?: string | null,
    } | null,
    estimatedDuration?: number | null,
    defaultAddress?:  {
      __typename: "Address",
      id: string,
      street: string,
      city: string,
      state: string,
      postalCode: string,
      country: string,
      projectID?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    notificationSettings?:  {
      __typename: "ModelNotificationConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    companyProjectTemplatesId?: string | null,
    projectTemplateDefaultAddressId?: string | null,
  } | null,
};

export type OnCreateTemplateScopeItemSubscriptionVariables = {
  filter?: ModelSubscriptionTemplateScopeItemFilterInput | null,
};

export type OnCreateTemplateScopeItemSubscription = {
  onCreateTemplateScopeItem?:  {
    __typename: "TemplateScopeItem",
    id: string,
    name: string,
    description?: string | null,
    parentItemID?: string | null,
    parentItem?:  {
      __typename: "TemplateScopeItem",
      id: string,
      name: string,
      description?: string | null,
      parentItemID?: string | null,
      projectTemplateID: string,
      tags?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
      projectTemplateScopeItemsId?: string | null,
    } | null,
    childItems?:  {
      __typename: "ModelTemplateScopeItemConnection",
      nextToken?: string | null,
    } | null,
    projectTemplateID: string,
    projectTemplate?:  {
      __typename: "ProjectTemplate",
      id: string,
      name: string,
      description?: string | null,
      companyID: string,
      estimatedDuration?: number | null,
      createdAt: string,
      updatedAt: string,
      companyProjectTemplatesId?: string | null,
      projectTemplateDefaultAddressId?: string | null,
    } | null,
    tags?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
    projectTemplateScopeItemsId?: string | null,
  } | null,
};

export type OnUpdateTemplateScopeItemSubscriptionVariables = {
  filter?: ModelSubscriptionTemplateScopeItemFilterInput | null,
};

export type OnUpdateTemplateScopeItemSubscription = {
  onUpdateTemplateScopeItem?:  {
    __typename: "TemplateScopeItem",
    id: string,
    name: string,
    description?: string | null,
    parentItemID?: string | null,
    parentItem?:  {
      __typename: "TemplateScopeItem",
      id: string,
      name: string,
      description?: string | null,
      parentItemID?: string | null,
      projectTemplateID: string,
      tags?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
      projectTemplateScopeItemsId?: string | null,
    } | null,
    childItems?:  {
      __typename: "ModelTemplateScopeItemConnection",
      nextToken?: string | null,
    } | null,
    projectTemplateID: string,
    projectTemplate?:  {
      __typename: "ProjectTemplate",
      id: string,
      name: string,
      description?: string | null,
      companyID: string,
      estimatedDuration?: number | null,
      createdAt: string,
      updatedAt: string,
      companyProjectTemplatesId?: string | null,
      projectTemplateDefaultAddressId?: string | null,
    } | null,
    tags?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
    projectTemplateScopeItemsId?: string | null,
  } | null,
};

export type OnDeleteTemplateScopeItemSubscriptionVariables = {
  filter?: ModelSubscriptionTemplateScopeItemFilterInput | null,
};

export type OnDeleteTemplateScopeItemSubscription = {
  onDeleteTemplateScopeItem?:  {
    __typename: "TemplateScopeItem",
    id: string,
    name: string,
    description?: string | null,
    parentItemID?: string | null,
    parentItem?:  {
      __typename: "TemplateScopeItem",
      id: string,
      name: string,
      description?: string | null,
      parentItemID?: string | null,
      projectTemplateID: string,
      tags?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
      projectTemplateScopeItemsId?: string | null,
    } | null,
    childItems?:  {
      __typename: "ModelTemplateScopeItemConnection",
      nextToken?: string | null,
    } | null,
    projectTemplateID: string,
    projectTemplate?:  {
      __typename: "ProjectTemplate",
      id: string,
      name: string,
      description?: string | null,
      companyID: string,
      estimatedDuration?: number | null,
      createdAt: string,
      updatedAt: string,
      companyProjectTemplatesId?: string | null,
      projectTemplateDefaultAddressId?: string | null,
    } | null,
    tags?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
    projectTemplateScopeItemsId?: string | null,
  } | null,
};

export type OnCreateProjectMembershipSubscriptionVariables = {
  filter?: ModelSubscriptionProjectMembershipFilterInput | null,
};

export type OnCreateProjectMembershipSubscription = {
  onCreateProjectMembership?:  {
    __typename: "ProjectMembership",
    id: string,
    projectID: string,
    project:  {
      __typename: "Project",
      id: string,
      name: string,
      description?: string | null,
      startDate?: string | null,
      endDate?: string | null,
      companyID: string,
      templateID?: string | null,
      createdAt: string,
      updatedAt: string,
      companyProjectsId?: string | null,
      projectTemplateProjectsId?: string | null,
      projectAddressId?: string | null,
    },
    personID: string,
    person:  {
      __typename: "Person",
      id: string,
      cognitoUsername?: string | null,
      cognitoSub?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      email: string,
      status?: string | null,
      phone?: string | null,
      invitedAt?: string | null,
      displayName?: string | null,
      jobSkills?: Array< string | null > | null,
      notes?: string | null,
      timezone?: string | null,
      language?: string | null,
      lastActive?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    roles: Array< string | null >,
    isActive: boolean,
    startDate?: string | null,
    endDate?: string | null,
    createdAt: string,
    updatedAt: string,
    personProjectMembershipsId?: string | null,
    projectMembershipsId?: string | null,
  } | null,
};

export type OnUpdateProjectMembershipSubscriptionVariables = {
  filter?: ModelSubscriptionProjectMembershipFilterInput | null,
};

export type OnUpdateProjectMembershipSubscription = {
  onUpdateProjectMembership?:  {
    __typename: "ProjectMembership",
    id: string,
    projectID: string,
    project:  {
      __typename: "Project",
      id: string,
      name: string,
      description?: string | null,
      startDate?: string | null,
      endDate?: string | null,
      companyID: string,
      templateID?: string | null,
      createdAt: string,
      updatedAt: string,
      companyProjectsId?: string | null,
      projectTemplateProjectsId?: string | null,
      projectAddressId?: string | null,
    },
    personID: string,
    person:  {
      __typename: "Person",
      id: string,
      cognitoUsername?: string | null,
      cognitoSub?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      email: string,
      status?: string | null,
      phone?: string | null,
      invitedAt?: string | null,
      displayName?: string | null,
      jobSkills?: Array< string | null > | null,
      notes?: string | null,
      timezone?: string | null,
      language?: string | null,
      lastActive?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    roles: Array< string | null >,
    isActive: boolean,
    startDate?: string | null,
    endDate?: string | null,
    createdAt: string,
    updatedAt: string,
    personProjectMembershipsId?: string | null,
    projectMembershipsId?: string | null,
  } | null,
};

export type OnDeleteProjectMembershipSubscriptionVariables = {
  filter?: ModelSubscriptionProjectMembershipFilterInput | null,
};

export type OnDeleteProjectMembershipSubscription = {
  onDeleteProjectMembership?:  {
    __typename: "ProjectMembership",
    id: string,
    projectID: string,
    project:  {
      __typename: "Project",
      id: string,
      name: string,
      description?: string | null,
      startDate?: string | null,
      endDate?: string | null,
      companyID: string,
      templateID?: string | null,
      createdAt: string,
      updatedAt: string,
      companyProjectsId?: string | null,
      projectTemplateProjectsId?: string | null,
      projectAddressId?: string | null,
    },
    personID: string,
    person:  {
      __typename: "Person",
      id: string,
      cognitoUsername?: string | null,
      cognitoSub?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      email: string,
      status?: string | null,
      phone?: string | null,
      invitedAt?: string | null,
      displayName?: string | null,
      jobSkills?: Array< string | null > | null,
      notes?: string | null,
      timezone?: string | null,
      language?: string | null,
      lastActive?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    roles: Array< string | null >,
    isActive: boolean,
    startDate?: string | null,
    endDate?: string | null,
    createdAt: string,
    updatedAt: string,
    personProjectMembershipsId?: string | null,
    projectMembershipsId?: string | null,
  } | null,
};

export type OnCreateProjectSubscriptionVariables = {
  filter?: ModelSubscriptionProjectFilterInput | null,
};

export type OnCreateProjectSubscription = {
  onCreateProject?:  {
    __typename: "Project",
    id: string,
    name: string,
    description?: string | null,
    startDate?: string | null,
    endDate?: string | null,
    companyID: string,
    company?:  {
      __typename: "Company",
      id: string,
      name: string,
      website?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    templateID?: string | null,
    template?:  {
      __typename: "ProjectTemplate",
      id: string,
      name: string,
      description?: string | null,
      companyID: string,
      estimatedDuration?: number | null,
      createdAt: string,
      updatedAt: string,
      companyProjectTemplatesId?: string | null,
      projectTemplateDefaultAddressId?: string | null,
    } | null,
    people?:  {
      __typename: "ModelProjectPeopleConnection",
      nextToken?: string | null,
    } | null,
    memberships?:  {
      __typename: "ModelProjectMembershipConnection",
      nextToken?: string | null,
    } | null,
    files?:  {
      __typename: "ModelProjectFileConnection",
      nextToken?: string | null,
    } | null,
    address?:  {
      __typename: "Address",
      id: string,
      street: string,
      city: string,
      state: string,
      postalCode: string,
      country: string,
      projectID?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    notifications?:  {
      __typename: "ModelNotificationConnection",
      nextToken?: string | null,
    } | null,
    chats?:  {
      __typename: "ModelGroupChatConnection",
      nextToken?: string | null,
    } | null,
    scopeItems?:  {
      __typename: "ModelScopeItemConnection",
      nextToken?: string | null,
    } | null,
    scopeItemGroups?:  {
      __typename: "ModelScopeItemGroupConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    companyProjectsId?: string | null,
    projectTemplateProjectsId?: string | null,
    projectAddressId?: string | null,
  } | null,
};

export type OnUpdateProjectSubscriptionVariables = {
  filter?: ModelSubscriptionProjectFilterInput | null,
};

export type OnUpdateProjectSubscription = {
  onUpdateProject?:  {
    __typename: "Project",
    id: string,
    name: string,
    description?: string | null,
    startDate?: string | null,
    endDate?: string | null,
    companyID: string,
    company?:  {
      __typename: "Company",
      id: string,
      name: string,
      website?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    templateID?: string | null,
    template?:  {
      __typename: "ProjectTemplate",
      id: string,
      name: string,
      description?: string | null,
      companyID: string,
      estimatedDuration?: number | null,
      createdAt: string,
      updatedAt: string,
      companyProjectTemplatesId?: string | null,
      projectTemplateDefaultAddressId?: string | null,
    } | null,
    people?:  {
      __typename: "ModelProjectPeopleConnection",
      nextToken?: string | null,
    } | null,
    memberships?:  {
      __typename: "ModelProjectMembershipConnection",
      nextToken?: string | null,
    } | null,
    files?:  {
      __typename: "ModelProjectFileConnection",
      nextToken?: string | null,
    } | null,
    address?:  {
      __typename: "Address",
      id: string,
      street: string,
      city: string,
      state: string,
      postalCode: string,
      country: string,
      projectID?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    notifications?:  {
      __typename: "ModelNotificationConnection",
      nextToken?: string | null,
    } | null,
    chats?:  {
      __typename: "ModelGroupChatConnection",
      nextToken?: string | null,
    } | null,
    scopeItems?:  {
      __typename: "ModelScopeItemConnection",
      nextToken?: string | null,
    } | null,
    scopeItemGroups?:  {
      __typename: "ModelScopeItemGroupConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    companyProjectsId?: string | null,
    projectTemplateProjectsId?: string | null,
    projectAddressId?: string | null,
  } | null,
};

export type OnDeleteProjectSubscriptionVariables = {
  filter?: ModelSubscriptionProjectFilterInput | null,
};

export type OnDeleteProjectSubscription = {
  onDeleteProject?:  {
    __typename: "Project",
    id: string,
    name: string,
    description?: string | null,
    startDate?: string | null,
    endDate?: string | null,
    companyID: string,
    company?:  {
      __typename: "Company",
      id: string,
      name: string,
      website?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    templateID?: string | null,
    template?:  {
      __typename: "ProjectTemplate",
      id: string,
      name: string,
      description?: string | null,
      companyID: string,
      estimatedDuration?: number | null,
      createdAt: string,
      updatedAt: string,
      companyProjectTemplatesId?: string | null,
      projectTemplateDefaultAddressId?: string | null,
    } | null,
    people?:  {
      __typename: "ModelProjectPeopleConnection",
      nextToken?: string | null,
    } | null,
    memberships?:  {
      __typename: "ModelProjectMembershipConnection",
      nextToken?: string | null,
    } | null,
    files?:  {
      __typename: "ModelProjectFileConnection",
      nextToken?: string | null,
    } | null,
    address?:  {
      __typename: "Address",
      id: string,
      street: string,
      city: string,
      state: string,
      postalCode: string,
      country: string,
      projectID?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    notifications?:  {
      __typename: "ModelNotificationConnection",
      nextToken?: string | null,
    } | null,
    chats?:  {
      __typename: "ModelGroupChatConnection",
      nextToken?: string | null,
    } | null,
    scopeItems?:  {
      __typename: "ModelScopeItemConnection",
      nextToken?: string | null,
    } | null,
    scopeItemGroups?:  {
      __typename: "ModelScopeItemGroupConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    companyProjectsId?: string | null,
    projectTemplateProjectsId?: string | null,
    projectAddressId?: string | null,
  } | null,
};

export type OnCreateScopeItemTagSubscriptionVariables = {
  filter?: ModelSubscriptionScopeItemTagFilterInput | null,
};

export type OnCreateScopeItemTagSubscription = {
  onCreateScopeItemTag?:  {
    __typename: "ScopeItemTag",
    id: string,
    name: string,
    description?: string | null,
    companyID: string,
    company?:  {
      __typename: "Company",
      id: string,
      name: string,
      website?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    color?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    companyScopeItemTagsId?: string | null,
  } | null,
};

export type OnUpdateScopeItemTagSubscriptionVariables = {
  filter?: ModelSubscriptionScopeItemTagFilterInput | null,
};

export type OnUpdateScopeItemTagSubscription = {
  onUpdateScopeItemTag?:  {
    __typename: "ScopeItemTag",
    id: string,
    name: string,
    description?: string | null,
    companyID: string,
    company?:  {
      __typename: "Company",
      id: string,
      name: string,
      website?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    color?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    companyScopeItemTagsId?: string | null,
  } | null,
};

export type OnDeleteScopeItemTagSubscriptionVariables = {
  filter?: ModelSubscriptionScopeItemTagFilterInput | null,
};

export type OnDeleteScopeItemTagSubscription = {
  onDeleteScopeItemTag?:  {
    __typename: "ScopeItemTag",
    id: string,
    name: string,
    description?: string | null,
    companyID: string,
    company?:  {
      __typename: "Company",
      id: string,
      name: string,
      website?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    color?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    companyScopeItemTagsId?: string | null,
  } | null,
};

export type OnCreateTemplateScopeItemTagSubscriptionVariables = {
  filter?: ModelSubscriptionTemplateScopeItemTagFilterInput | null,
};

export type OnCreateTemplateScopeItemTagSubscription = {
  onCreateTemplateScopeItemTag?:  {
    __typename: "TemplateScopeItemTag",
    id: string,
    name: string,
    description?: string | null,
    companyID: string,
    company?:  {
      __typename: "Company",
      id: string,
      name: string,
      website?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    projectTemplateID: string,
    projectTemplate?:  {
      __typename: "ProjectTemplate",
      id: string,
      name: string,
      description?: string | null,
      companyID: string,
      estimatedDuration?: number | null,
      createdAt: string,
      updatedAt: string,
      companyProjectTemplatesId?: string | null,
      projectTemplateDefaultAddressId?: string | null,
    } | null,
    color?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    companyTemplateScopeItemTagsId?: string | null,
    projectTemplateTemplateScopeItemTagsId?: string | null,
  } | null,
};

export type OnUpdateTemplateScopeItemTagSubscriptionVariables = {
  filter?: ModelSubscriptionTemplateScopeItemTagFilterInput | null,
};

export type OnUpdateTemplateScopeItemTagSubscription = {
  onUpdateTemplateScopeItemTag?:  {
    __typename: "TemplateScopeItemTag",
    id: string,
    name: string,
    description?: string | null,
    companyID: string,
    company?:  {
      __typename: "Company",
      id: string,
      name: string,
      website?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    projectTemplateID: string,
    projectTemplate?:  {
      __typename: "ProjectTemplate",
      id: string,
      name: string,
      description?: string | null,
      companyID: string,
      estimatedDuration?: number | null,
      createdAt: string,
      updatedAt: string,
      companyProjectTemplatesId?: string | null,
      projectTemplateDefaultAddressId?: string | null,
    } | null,
    color?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    companyTemplateScopeItemTagsId?: string | null,
    projectTemplateTemplateScopeItemTagsId?: string | null,
  } | null,
};

export type OnDeleteTemplateScopeItemTagSubscriptionVariables = {
  filter?: ModelSubscriptionTemplateScopeItemTagFilterInput | null,
};

export type OnDeleteTemplateScopeItemTagSubscription = {
  onDeleteTemplateScopeItemTag?:  {
    __typename: "TemplateScopeItemTag",
    id: string,
    name: string,
    description?: string | null,
    companyID: string,
    company?:  {
      __typename: "Company",
      id: string,
      name: string,
      website?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    projectTemplateID: string,
    projectTemplate?:  {
      __typename: "ProjectTemplate",
      id: string,
      name: string,
      description?: string | null,
      companyID: string,
      estimatedDuration?: number | null,
      createdAt: string,
      updatedAt: string,
      companyProjectTemplatesId?: string | null,
      projectTemplateDefaultAddressId?: string | null,
    } | null,
    color?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    companyTemplateScopeItemTagsId?: string | null,
    projectTemplateTemplateScopeItemTagsId?: string | null,
  } | null,
};

export type OnCreateScopeItemGroupSubscriptionVariables = {
  filter?: ModelSubscriptionScopeItemGroupFilterInput | null,
};

export type OnCreateScopeItemGroupSubscription = {
  onCreateScopeItemGroup?:  {
    __typename: "ScopeItemGroup",
    id: string,
    name: string,
    description?: string | null,
    projectID: string,
    project?:  {
      __typename: "Project",
      id: string,
      name: string,
      description?: string | null,
      startDate?: string | null,
      endDate?: string | null,
      companyID: string,
      templateID?: string | null,
      createdAt: string,
      updatedAt: string,
      companyProjectsId?: string | null,
      projectTemplateProjectsId?: string | null,
      projectAddressId?: string | null,
    } | null,
    scopeItems?:  {
      __typename: "ModelScopeItemConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    projectScopeItemGroupsId?: string | null,
  } | null,
};

export type OnUpdateScopeItemGroupSubscriptionVariables = {
  filter?: ModelSubscriptionScopeItemGroupFilterInput | null,
};

export type OnUpdateScopeItemGroupSubscription = {
  onUpdateScopeItemGroup?:  {
    __typename: "ScopeItemGroup",
    id: string,
    name: string,
    description?: string | null,
    projectID: string,
    project?:  {
      __typename: "Project",
      id: string,
      name: string,
      description?: string | null,
      startDate?: string | null,
      endDate?: string | null,
      companyID: string,
      templateID?: string | null,
      createdAt: string,
      updatedAt: string,
      companyProjectsId?: string | null,
      projectTemplateProjectsId?: string | null,
      projectAddressId?: string | null,
    } | null,
    scopeItems?:  {
      __typename: "ModelScopeItemConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    projectScopeItemGroupsId?: string | null,
  } | null,
};

export type OnDeleteScopeItemGroupSubscriptionVariables = {
  filter?: ModelSubscriptionScopeItemGroupFilterInput | null,
};

export type OnDeleteScopeItemGroupSubscription = {
  onDeleteScopeItemGroup?:  {
    __typename: "ScopeItemGroup",
    id: string,
    name: string,
    description?: string | null,
    projectID: string,
    project?:  {
      __typename: "Project",
      id: string,
      name: string,
      description?: string | null,
      startDate?: string | null,
      endDate?: string | null,
      companyID: string,
      templateID?: string | null,
      createdAt: string,
      updatedAt: string,
      companyProjectsId?: string | null,
      projectTemplateProjectsId?: string | null,
      projectAddressId?: string | null,
    } | null,
    scopeItems?:  {
      __typename: "ModelScopeItemConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    projectScopeItemGroupsId?: string | null,
  } | null,
};

export type OnCreateScopeItemSubscriptionVariables = {
  filter?: ModelSubscriptionScopeItemFilterInput | null,
};

export type OnCreateScopeItemSubscription = {
  onCreateScopeItem?:  {
    __typename: "ScopeItem",
    id: string,
    name: string,
    description?: string | null,
    category?: string | null,
    costEstimate?: number | null,
    spendEstimate?: number | null,
    durationEstimate?: number | null,
    isCompleted?: boolean | null,
    progress?: number | null,
    tags?: Array< string | null > | null,
    parentItemID?: string | null,
    parentItem?:  {
      __typename: "ScopeItem",
      id: string,
      name: string,
      description?: string | null,
      category?: string | null,
      costEstimate?: number | null,
      spendEstimate?: number | null,
      durationEstimate?: number | null,
      isCompleted?: boolean | null,
      progress?: number | null,
      tags?: Array< string | null > | null,
      parentItemID?: string | null,
      projectID: string,
      groupID?: string | null,
      createdAt: string,
      updatedAt: string,
      projectScopeItemsId?: string | null,
      scopeItemGroupScopeItemsId?: string | null,
    } | null,
    childItems?:  {
      __typename: "ModelScopeItemConnection",
      nextToken?: string | null,
    } | null,
    projectID: string,
    project?:  {
      __typename: "Project",
      id: string,
      name: string,
      description?: string | null,
      startDate?: string | null,
      endDate?: string | null,
      companyID: string,
      templateID?: string | null,
      createdAt: string,
      updatedAt: string,
      companyProjectsId?: string | null,
      projectTemplateProjectsId?: string | null,
      projectAddressId?: string | null,
    } | null,
    groupID?: string | null,
    group?:  {
      __typename: "ScopeItemGroup",
      id: string,
      name: string,
      description?: string | null,
      projectID: string,
      createdAt: string,
      updatedAt: string,
      projectScopeItemGroupsId?: string | null,
    } | null,
    chats?:  {
      __typename: "ModelGroupChatConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    projectScopeItemsId?: string | null,
    scopeItemGroupScopeItemsId?: string | null,
  } | null,
};

export type OnUpdateScopeItemSubscriptionVariables = {
  filter?: ModelSubscriptionScopeItemFilterInput | null,
};

export type OnUpdateScopeItemSubscription = {
  onUpdateScopeItem?:  {
    __typename: "ScopeItem",
    id: string,
    name: string,
    description?: string | null,
    category?: string | null,
    costEstimate?: number | null,
    spendEstimate?: number | null,
    durationEstimate?: number | null,
    isCompleted?: boolean | null,
    progress?: number | null,
    tags?: Array< string | null > | null,
    parentItemID?: string | null,
    parentItem?:  {
      __typename: "ScopeItem",
      id: string,
      name: string,
      description?: string | null,
      category?: string | null,
      costEstimate?: number | null,
      spendEstimate?: number | null,
      durationEstimate?: number | null,
      isCompleted?: boolean | null,
      progress?: number | null,
      tags?: Array< string | null > | null,
      parentItemID?: string | null,
      projectID: string,
      groupID?: string | null,
      createdAt: string,
      updatedAt: string,
      projectScopeItemsId?: string | null,
      scopeItemGroupScopeItemsId?: string | null,
    } | null,
    childItems?:  {
      __typename: "ModelScopeItemConnection",
      nextToken?: string | null,
    } | null,
    projectID: string,
    project?:  {
      __typename: "Project",
      id: string,
      name: string,
      description?: string | null,
      startDate?: string | null,
      endDate?: string | null,
      companyID: string,
      templateID?: string | null,
      createdAt: string,
      updatedAt: string,
      companyProjectsId?: string | null,
      projectTemplateProjectsId?: string | null,
      projectAddressId?: string | null,
    } | null,
    groupID?: string | null,
    group?:  {
      __typename: "ScopeItemGroup",
      id: string,
      name: string,
      description?: string | null,
      projectID: string,
      createdAt: string,
      updatedAt: string,
      projectScopeItemGroupsId?: string | null,
    } | null,
    chats?:  {
      __typename: "ModelGroupChatConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    projectScopeItemsId?: string | null,
    scopeItemGroupScopeItemsId?: string | null,
  } | null,
};

export type OnDeleteScopeItemSubscriptionVariables = {
  filter?: ModelSubscriptionScopeItemFilterInput | null,
};

export type OnDeleteScopeItemSubscription = {
  onDeleteScopeItem?:  {
    __typename: "ScopeItem",
    id: string,
    name: string,
    description?: string | null,
    category?: string | null,
    costEstimate?: number | null,
    spendEstimate?: number | null,
    durationEstimate?: number | null,
    isCompleted?: boolean | null,
    progress?: number | null,
    tags?: Array< string | null > | null,
    parentItemID?: string | null,
    parentItem?:  {
      __typename: "ScopeItem",
      id: string,
      name: string,
      description?: string | null,
      category?: string | null,
      costEstimate?: number | null,
      spendEstimate?: number | null,
      durationEstimate?: number | null,
      isCompleted?: boolean | null,
      progress?: number | null,
      tags?: Array< string | null > | null,
      parentItemID?: string | null,
      projectID: string,
      groupID?: string | null,
      createdAt: string,
      updatedAt: string,
      projectScopeItemsId?: string | null,
      scopeItemGroupScopeItemsId?: string | null,
    } | null,
    childItems?:  {
      __typename: "ModelScopeItemConnection",
      nextToken?: string | null,
    } | null,
    projectID: string,
    project?:  {
      __typename: "Project",
      id: string,
      name: string,
      description?: string | null,
      startDate?: string | null,
      endDate?: string | null,
      companyID: string,
      templateID?: string | null,
      createdAt: string,
      updatedAt: string,
      companyProjectsId?: string | null,
      projectTemplateProjectsId?: string | null,
      projectAddressId?: string | null,
    } | null,
    groupID?: string | null,
    group?:  {
      __typename: "ScopeItemGroup",
      id: string,
      name: string,
      description?: string | null,
      projectID: string,
      createdAt: string,
      updatedAt: string,
      projectScopeItemGroupsId?: string | null,
    } | null,
    chats?:  {
      __typename: "ModelGroupChatConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    projectScopeItemsId?: string | null,
    scopeItemGroupScopeItemsId?: string | null,
  } | null,
};

export type OnCreateAddressSubscriptionVariables = {
  filter?: ModelSubscriptionAddressFilterInput | null,
};

export type OnCreateAddressSubscription = {
  onCreateAddress?:  {
    __typename: "Address",
    id: string,
    street: string,
    city: string,
    state: string,
    postalCode: string,
    country: string,
    projectID?: string | null,
    project?:  {
      __typename: "Project",
      id: string,
      name: string,
      description?: string | null,
      startDate?: string | null,
      endDate?: string | null,
      companyID: string,
      templateID?: string | null,
      createdAt: string,
      updatedAt: string,
      companyProjectsId?: string | null,
      projectTemplateProjectsId?: string | null,
      projectAddressId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateAddressSubscriptionVariables = {
  filter?: ModelSubscriptionAddressFilterInput | null,
};

export type OnUpdateAddressSubscription = {
  onUpdateAddress?:  {
    __typename: "Address",
    id: string,
    street: string,
    city: string,
    state: string,
    postalCode: string,
    country: string,
    projectID?: string | null,
    project?:  {
      __typename: "Project",
      id: string,
      name: string,
      description?: string | null,
      startDate?: string | null,
      endDate?: string | null,
      companyID: string,
      templateID?: string | null,
      createdAt: string,
      updatedAt: string,
      companyProjectsId?: string | null,
      projectTemplateProjectsId?: string | null,
      projectAddressId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteAddressSubscriptionVariables = {
  filter?: ModelSubscriptionAddressFilterInput | null,
};

export type OnDeleteAddressSubscription = {
  onDeleteAddress?:  {
    __typename: "Address",
    id: string,
    street: string,
    city: string,
    state: string,
    postalCode: string,
    country: string,
    projectID?: string | null,
    project?:  {
      __typename: "Project",
      id: string,
      name: string,
      description?: string | null,
      startDate?: string | null,
      endDate?: string | null,
      companyID: string,
      templateID?: string | null,
      createdAt: string,
      updatedAt: string,
      companyProjectsId?: string | null,
      projectTemplateProjectsId?: string | null,
      projectAddressId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateTagSubscriptionVariables = {
  filter?: ModelSubscriptionTagFilterInput | null,
};

export type OnCreateTagSubscription = {
  onCreateTag?:  {
    __typename: "Tag",
    id: string,
    name: string,
    files?:  {
      __typename: "ModelProjectFileTagConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateTagSubscriptionVariables = {
  filter?: ModelSubscriptionTagFilterInput | null,
};

export type OnUpdateTagSubscription = {
  onUpdateTag?:  {
    __typename: "Tag",
    id: string,
    name: string,
    files?:  {
      __typename: "ModelProjectFileTagConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteTagSubscriptionVariables = {
  filter?: ModelSubscriptionTagFilterInput | null,
};

export type OnDeleteTagSubscription = {
  onDeleteTag?:  {
    __typename: "Tag",
    id: string,
    name: string,
    files?:  {
      __typename: "ModelProjectFileTagConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateProjectFileSubscriptionVariables = {
  filter?: ModelSubscriptionProjectFileFilterInput | null,
};

export type OnCreateProjectFileSubscription = {
  onCreateProjectFile?:  {
    __typename: "ProjectFile",
    id: string,
    fileName: string,
    fileType: string,
    fileSize: number,
    description?: string | null,
    uploadedByID: string,
    uploadedBy?:  {
      __typename: "Person",
      id: string,
      cognitoUsername?: string | null,
      cognitoSub?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      email: string,
      status?: string | null,
      phone?: string | null,
      invitedAt?: string | null,
      displayName?: string | null,
      jobSkills?: Array< string | null > | null,
      notes?: string | null,
      timezone?: string | null,
      language?: string | null,
      lastActive?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    uploadedAt: string,
    projectID: string,
    project?:  {
      __typename: "Project",
      id: string,
      name: string,
      description?: string | null,
      startDate?: string | null,
      endDate?: string | null,
      companyID: string,
      templateID?: string | null,
      createdAt: string,
      updatedAt: string,
      companyProjectsId?: string | null,
      projectTemplateProjectsId?: string | null,
      projectAddressId?: string | null,
    } | null,
    s3Object:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
      etag?: string | null,
      versionId?: string | null,
    },
    isPublic: boolean,
    width?: number | null,
    height?: number | null,
    duration?: number | null,
    thumbnailKey?: string | null,
    tags?:  {
      __typename: "ModelProjectFileTagConnection",
      nextToken?: string | null,
    } | null,
    annotations?:  {
      __typename: "ModelAnnotationConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    personUploadedFilesId?: string | null,
    projectFilesId?: string | null,
  } | null,
};

export type OnUpdateProjectFileSubscriptionVariables = {
  filter?: ModelSubscriptionProjectFileFilterInput | null,
};

export type OnUpdateProjectFileSubscription = {
  onUpdateProjectFile?:  {
    __typename: "ProjectFile",
    id: string,
    fileName: string,
    fileType: string,
    fileSize: number,
    description?: string | null,
    uploadedByID: string,
    uploadedBy?:  {
      __typename: "Person",
      id: string,
      cognitoUsername?: string | null,
      cognitoSub?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      email: string,
      status?: string | null,
      phone?: string | null,
      invitedAt?: string | null,
      displayName?: string | null,
      jobSkills?: Array< string | null > | null,
      notes?: string | null,
      timezone?: string | null,
      language?: string | null,
      lastActive?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    uploadedAt: string,
    projectID: string,
    project?:  {
      __typename: "Project",
      id: string,
      name: string,
      description?: string | null,
      startDate?: string | null,
      endDate?: string | null,
      companyID: string,
      templateID?: string | null,
      createdAt: string,
      updatedAt: string,
      companyProjectsId?: string | null,
      projectTemplateProjectsId?: string | null,
      projectAddressId?: string | null,
    } | null,
    s3Object:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
      etag?: string | null,
      versionId?: string | null,
    },
    isPublic: boolean,
    width?: number | null,
    height?: number | null,
    duration?: number | null,
    thumbnailKey?: string | null,
    tags?:  {
      __typename: "ModelProjectFileTagConnection",
      nextToken?: string | null,
    } | null,
    annotations?:  {
      __typename: "ModelAnnotationConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    personUploadedFilesId?: string | null,
    projectFilesId?: string | null,
  } | null,
};

export type OnDeleteProjectFileSubscriptionVariables = {
  filter?: ModelSubscriptionProjectFileFilterInput | null,
};

export type OnDeleteProjectFileSubscription = {
  onDeleteProjectFile?:  {
    __typename: "ProjectFile",
    id: string,
    fileName: string,
    fileType: string,
    fileSize: number,
    description?: string | null,
    uploadedByID: string,
    uploadedBy?:  {
      __typename: "Person",
      id: string,
      cognitoUsername?: string | null,
      cognitoSub?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      email: string,
      status?: string | null,
      phone?: string | null,
      invitedAt?: string | null,
      displayName?: string | null,
      jobSkills?: Array< string | null > | null,
      notes?: string | null,
      timezone?: string | null,
      language?: string | null,
      lastActive?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    uploadedAt: string,
    projectID: string,
    project?:  {
      __typename: "Project",
      id: string,
      name: string,
      description?: string | null,
      startDate?: string | null,
      endDate?: string | null,
      companyID: string,
      templateID?: string | null,
      createdAt: string,
      updatedAt: string,
      companyProjectsId?: string | null,
      projectTemplateProjectsId?: string | null,
      projectAddressId?: string | null,
    } | null,
    s3Object:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
      etag?: string | null,
      versionId?: string | null,
    },
    isPublic: boolean,
    width?: number | null,
    height?: number | null,
    duration?: number | null,
    thumbnailKey?: string | null,
    tags?:  {
      __typename: "ModelProjectFileTagConnection",
      nextToken?: string | null,
    } | null,
    annotations?:  {
      __typename: "ModelAnnotationConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    personUploadedFilesId?: string | null,
    projectFilesId?: string | null,
  } | null,
};

export type OnCreateAnnotationSubscriptionVariables = {
  filter?: ModelSubscriptionAnnotationFilterInput | null,
};

export type OnCreateAnnotationSubscription = {
  onCreateAnnotation?:  {
    __typename: "Annotation",
    id: string,
    pageNumber: number,
    x: number,
    y: number,
    endX?: number | null,
    endY?: number | null,
    width?: number | null,
    height?: number | null,
    radius?: number | null,
    rotation?: number | null,
    strokeWidth?: number | null,
    strokeStyle?: string | null,
    color: string,
    type: AnnotationType,
    text?: string | null,
    projectFileID: string,
    projectFile:  {
      __typename: "ProjectFile",
      id: string,
      fileName: string,
      fileType: string,
      fileSize: number,
      description?: string | null,
      uploadedByID: string,
      uploadedAt: string,
      projectID: string,
      isPublic: boolean,
      width?: number | null,
      height?: number | null,
      duration?: number | null,
      thumbnailKey?: string | null,
      createdAt: string,
      updatedAt: string,
      personUploadedFilesId?: string | null,
      projectFilesId?: string | null,
    },
    createdAt: string,
    createdByID: string,
    updatedAt?: string | null,
    updatedByID?: string | null,
    projectFileAnnotationsId?: string | null,
  } | null,
};

export type OnUpdateAnnotationSubscriptionVariables = {
  filter?: ModelSubscriptionAnnotationFilterInput | null,
};

export type OnUpdateAnnotationSubscription = {
  onUpdateAnnotation?:  {
    __typename: "Annotation",
    id: string,
    pageNumber: number,
    x: number,
    y: number,
    endX?: number | null,
    endY?: number | null,
    width?: number | null,
    height?: number | null,
    radius?: number | null,
    rotation?: number | null,
    strokeWidth?: number | null,
    strokeStyle?: string | null,
    color: string,
    type: AnnotationType,
    text?: string | null,
    projectFileID: string,
    projectFile:  {
      __typename: "ProjectFile",
      id: string,
      fileName: string,
      fileType: string,
      fileSize: number,
      description?: string | null,
      uploadedByID: string,
      uploadedAt: string,
      projectID: string,
      isPublic: boolean,
      width?: number | null,
      height?: number | null,
      duration?: number | null,
      thumbnailKey?: string | null,
      createdAt: string,
      updatedAt: string,
      personUploadedFilesId?: string | null,
      projectFilesId?: string | null,
    },
    createdAt: string,
    createdByID: string,
    updatedAt?: string | null,
    updatedByID?: string | null,
    projectFileAnnotationsId?: string | null,
  } | null,
};

export type OnDeleteAnnotationSubscriptionVariables = {
  filter?: ModelSubscriptionAnnotationFilterInput | null,
};

export type OnDeleteAnnotationSubscription = {
  onDeleteAnnotation?:  {
    __typename: "Annotation",
    id: string,
    pageNumber: number,
    x: number,
    y: number,
    endX?: number | null,
    endY?: number | null,
    width?: number | null,
    height?: number | null,
    radius?: number | null,
    rotation?: number | null,
    strokeWidth?: number | null,
    strokeStyle?: string | null,
    color: string,
    type: AnnotationType,
    text?: string | null,
    projectFileID: string,
    projectFile:  {
      __typename: "ProjectFile",
      id: string,
      fileName: string,
      fileType: string,
      fileSize: number,
      description?: string | null,
      uploadedByID: string,
      uploadedAt: string,
      projectID: string,
      isPublic: boolean,
      width?: number | null,
      height?: number | null,
      duration?: number | null,
      thumbnailKey?: string | null,
      createdAt: string,
      updatedAt: string,
      personUploadedFilesId?: string | null,
      projectFilesId?: string | null,
    },
    createdAt: string,
    createdByID: string,
    updatedAt?: string | null,
    updatedByID?: string | null,
    projectFileAnnotationsId?: string | null,
  } | null,
};

export type OnCreateNotificationSubscriptionVariables = {
  filter?: ModelSubscriptionNotificationFilterInput | null,
};

export type OnCreateNotificationSubscription = {
  onCreateNotification?:  {
    __typename: "Notification",
    id: string,
    type: NotificationType,
    messageTemplate: string,
    status: NotificationStatus,
    schedule:  Array< {
      __typename: "NotificationSchedule",
      date: string,
      time: string,
      isRecurring: boolean,
      frequency?: string | null,
      interval?: number | null,
      daysOfWeek?: Array< string | null > | null,
      endDate?: string | null,
      runCount?: number | null,
      maxRuns?: number | null,
    } | null >,
    projectID?: string | null,
    project?:  {
      __typename: "Project",
      id: string,
      name: string,
      description?: string | null,
      startDate?: string | null,
      endDate?: string | null,
      companyID: string,
      templateID?: string | null,
      createdAt: string,
      updatedAt: string,
      companyProjectsId?: string | null,
      projectTemplateProjectsId?: string | null,
      projectAddressId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    projectTemplateNotificationSettingsId?: string | null,
    projectNotificationsId?: string | null,
  } | null,
};

export type OnUpdateNotificationSubscriptionVariables = {
  filter?: ModelSubscriptionNotificationFilterInput | null,
};

export type OnUpdateNotificationSubscription = {
  onUpdateNotification?:  {
    __typename: "Notification",
    id: string,
    type: NotificationType,
    messageTemplate: string,
    status: NotificationStatus,
    schedule:  Array< {
      __typename: "NotificationSchedule",
      date: string,
      time: string,
      isRecurring: boolean,
      frequency?: string | null,
      interval?: number | null,
      daysOfWeek?: Array< string | null > | null,
      endDate?: string | null,
      runCount?: number | null,
      maxRuns?: number | null,
    } | null >,
    projectID?: string | null,
    project?:  {
      __typename: "Project",
      id: string,
      name: string,
      description?: string | null,
      startDate?: string | null,
      endDate?: string | null,
      companyID: string,
      templateID?: string | null,
      createdAt: string,
      updatedAt: string,
      companyProjectsId?: string | null,
      projectTemplateProjectsId?: string | null,
      projectAddressId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    projectTemplateNotificationSettingsId?: string | null,
    projectNotificationsId?: string | null,
  } | null,
};

export type OnDeleteNotificationSubscriptionVariables = {
  filter?: ModelSubscriptionNotificationFilterInput | null,
};

export type OnDeleteNotificationSubscription = {
  onDeleteNotification?:  {
    __typename: "Notification",
    id: string,
    type: NotificationType,
    messageTemplate: string,
    status: NotificationStatus,
    schedule:  Array< {
      __typename: "NotificationSchedule",
      date: string,
      time: string,
      isRecurring: boolean,
      frequency?: string | null,
      interval?: number | null,
      daysOfWeek?: Array< string | null > | null,
      endDate?: string | null,
      runCount?: number | null,
      maxRuns?: number | null,
    } | null >,
    projectID?: string | null,
    project?:  {
      __typename: "Project",
      id: string,
      name: string,
      description?: string | null,
      startDate?: string | null,
      endDate?: string | null,
      companyID: string,
      templateID?: string | null,
      createdAt: string,
      updatedAt: string,
      companyProjectsId?: string | null,
      projectTemplateProjectsId?: string | null,
      projectAddressId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    projectTemplateNotificationSettingsId?: string | null,
    projectNotificationsId?: string | null,
  } | null,
};

export type OnCreateGroupChatSubscriptionVariables = {
  filter?: ModelSubscriptionGroupChatFilterInput | null,
};

export type OnCreateGroupChatSubscription = {
  onCreateGroupChat?:  {
    __typename: "GroupChat",
    id: string,
    name: string,
    chatType: ChatType,
    messages?:  {
      __typename: "ModelGroupChatMessageConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    status: ChatStatus,
    isDeleted: boolean,
    messageLimit?: number | null,
    lastMessageAt?: string | null,
    companyID: string,
    company?:  {
      __typename: "Company",
      id: string,
      name: string,
      website?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    projectID?: string | null,
    project?:  {
      __typename: "Project",
      id: string,
      name: string,
      description?: string | null,
      startDate?: string | null,
      endDate?: string | null,
      companyID: string,
      templateID?: string | null,
      createdAt: string,
      updatedAt: string,
      companyProjectsId?: string | null,
      projectTemplateProjectsId?: string | null,
      projectAddressId?: string | null,
    } | null,
    scopeItemID?: string | null,
    scopeItem?:  {
      __typename: "ScopeItem",
      id: string,
      name: string,
      description?: string | null,
      category?: string | null,
      costEstimate?: number | null,
      spendEstimate?: number | null,
      durationEstimate?: number | null,
      isCompleted?: boolean | null,
      progress?: number | null,
      tags?: Array< string | null > | null,
      parentItemID?: string | null,
      projectID: string,
      groupID?: string | null,
      createdAt: string,
      updatedAt: string,
      projectScopeItemsId?: string | null,
      scopeItemGroupScopeItemsId?: string | null,
    } | null,
    participants?:  {
      __typename: "ModelChatParticipantsConnection",
      nextToken?: string | null,
    } | null,
    companyChatsId?: string | null,
    projectChatsId?: string | null,
    scopeItemChatsId?: string | null,
  } | null,
};

export type OnUpdateGroupChatSubscriptionVariables = {
  filter?: ModelSubscriptionGroupChatFilterInput | null,
};

export type OnUpdateGroupChatSubscription = {
  onUpdateGroupChat?:  {
    __typename: "GroupChat",
    id: string,
    name: string,
    chatType: ChatType,
    messages?:  {
      __typename: "ModelGroupChatMessageConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    status: ChatStatus,
    isDeleted: boolean,
    messageLimit?: number | null,
    lastMessageAt?: string | null,
    companyID: string,
    company?:  {
      __typename: "Company",
      id: string,
      name: string,
      website?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    projectID?: string | null,
    project?:  {
      __typename: "Project",
      id: string,
      name: string,
      description?: string | null,
      startDate?: string | null,
      endDate?: string | null,
      companyID: string,
      templateID?: string | null,
      createdAt: string,
      updatedAt: string,
      companyProjectsId?: string | null,
      projectTemplateProjectsId?: string | null,
      projectAddressId?: string | null,
    } | null,
    scopeItemID?: string | null,
    scopeItem?:  {
      __typename: "ScopeItem",
      id: string,
      name: string,
      description?: string | null,
      category?: string | null,
      costEstimate?: number | null,
      spendEstimate?: number | null,
      durationEstimate?: number | null,
      isCompleted?: boolean | null,
      progress?: number | null,
      tags?: Array< string | null > | null,
      parentItemID?: string | null,
      projectID: string,
      groupID?: string | null,
      createdAt: string,
      updatedAt: string,
      projectScopeItemsId?: string | null,
      scopeItemGroupScopeItemsId?: string | null,
    } | null,
    participants?:  {
      __typename: "ModelChatParticipantsConnection",
      nextToken?: string | null,
    } | null,
    companyChatsId?: string | null,
    projectChatsId?: string | null,
    scopeItemChatsId?: string | null,
  } | null,
};

export type OnDeleteGroupChatSubscriptionVariables = {
  filter?: ModelSubscriptionGroupChatFilterInput | null,
};

export type OnDeleteGroupChatSubscription = {
  onDeleteGroupChat?:  {
    __typename: "GroupChat",
    id: string,
    name: string,
    chatType: ChatType,
    messages?:  {
      __typename: "ModelGroupChatMessageConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    status: ChatStatus,
    isDeleted: boolean,
    messageLimit?: number | null,
    lastMessageAt?: string | null,
    companyID: string,
    company?:  {
      __typename: "Company",
      id: string,
      name: string,
      website?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    projectID?: string | null,
    project?:  {
      __typename: "Project",
      id: string,
      name: string,
      description?: string | null,
      startDate?: string | null,
      endDate?: string | null,
      companyID: string,
      templateID?: string | null,
      createdAt: string,
      updatedAt: string,
      companyProjectsId?: string | null,
      projectTemplateProjectsId?: string | null,
      projectAddressId?: string | null,
    } | null,
    scopeItemID?: string | null,
    scopeItem?:  {
      __typename: "ScopeItem",
      id: string,
      name: string,
      description?: string | null,
      category?: string | null,
      costEstimate?: number | null,
      spendEstimate?: number | null,
      durationEstimate?: number | null,
      isCompleted?: boolean | null,
      progress?: number | null,
      tags?: Array< string | null > | null,
      parentItemID?: string | null,
      projectID: string,
      groupID?: string | null,
      createdAt: string,
      updatedAt: string,
      projectScopeItemsId?: string | null,
      scopeItemGroupScopeItemsId?: string | null,
    } | null,
    participants?:  {
      __typename: "ModelChatParticipantsConnection",
      nextToken?: string | null,
    } | null,
    companyChatsId?: string | null,
    projectChatsId?: string | null,
    scopeItemChatsId?: string | null,
  } | null,
};

export type OnCreateGroupChatMessageSubscriptionVariables = {
  filter?: ModelSubscriptionGroupChatMessageFilterInput | null,
};

export type OnCreateGroupChatMessageSubscription = {
  onCreateGroupChatMessage?:  {
    __typename: "GroupChatMessage",
    id: string,
    content: string,
    chatID: string,
    chat:  {
      __typename: "GroupChat",
      id: string,
      name: string,
      chatType: ChatType,
      createdAt: string,
      updatedAt: string,
      status: ChatStatus,
      isDeleted: boolean,
      messageLimit?: number | null,
      lastMessageAt?: string | null,
      companyID: string,
      projectID?: string | null,
      scopeItemID?: string | null,
      companyChatsId?: string | null,
      projectChatsId?: string | null,
      scopeItemChatsId?: string | null,
    },
    senderID: string,
    sender:  {
      __typename: "Person",
      id: string,
      cognitoUsername?: string | null,
      cognitoSub?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      email: string,
      status?: string | null,
      phone?: string | null,
      invitedAt?: string | null,
      displayName?: string | null,
      jobSkills?: Array< string | null > | null,
      notes?: string | null,
      timezone?: string | null,
      language?: string | null,
      lastActive?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    timestamp: string,
    isEdited: boolean,
    editedAt?: string | null,
    attachments?:  {
      __typename: "ModelChatAttachmentConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    personSentMessagesId?: string | null,
    groupChatMessagesId?: string | null,
  } | null,
};

export type OnUpdateGroupChatMessageSubscriptionVariables = {
  filter?: ModelSubscriptionGroupChatMessageFilterInput | null,
};

export type OnUpdateGroupChatMessageSubscription = {
  onUpdateGroupChatMessage?:  {
    __typename: "GroupChatMessage",
    id: string,
    content: string,
    chatID: string,
    chat:  {
      __typename: "GroupChat",
      id: string,
      name: string,
      chatType: ChatType,
      createdAt: string,
      updatedAt: string,
      status: ChatStatus,
      isDeleted: boolean,
      messageLimit?: number | null,
      lastMessageAt?: string | null,
      companyID: string,
      projectID?: string | null,
      scopeItemID?: string | null,
      companyChatsId?: string | null,
      projectChatsId?: string | null,
      scopeItemChatsId?: string | null,
    },
    senderID: string,
    sender:  {
      __typename: "Person",
      id: string,
      cognitoUsername?: string | null,
      cognitoSub?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      email: string,
      status?: string | null,
      phone?: string | null,
      invitedAt?: string | null,
      displayName?: string | null,
      jobSkills?: Array< string | null > | null,
      notes?: string | null,
      timezone?: string | null,
      language?: string | null,
      lastActive?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    timestamp: string,
    isEdited: boolean,
    editedAt?: string | null,
    attachments?:  {
      __typename: "ModelChatAttachmentConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    personSentMessagesId?: string | null,
    groupChatMessagesId?: string | null,
  } | null,
};

export type OnDeleteGroupChatMessageSubscriptionVariables = {
  filter?: ModelSubscriptionGroupChatMessageFilterInput | null,
};

export type OnDeleteGroupChatMessageSubscription = {
  onDeleteGroupChatMessage?:  {
    __typename: "GroupChatMessage",
    id: string,
    content: string,
    chatID: string,
    chat:  {
      __typename: "GroupChat",
      id: string,
      name: string,
      chatType: ChatType,
      createdAt: string,
      updatedAt: string,
      status: ChatStatus,
      isDeleted: boolean,
      messageLimit?: number | null,
      lastMessageAt?: string | null,
      companyID: string,
      projectID?: string | null,
      scopeItemID?: string | null,
      companyChatsId?: string | null,
      projectChatsId?: string | null,
      scopeItemChatsId?: string | null,
    },
    senderID: string,
    sender:  {
      __typename: "Person",
      id: string,
      cognitoUsername?: string | null,
      cognitoSub?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      email: string,
      status?: string | null,
      phone?: string | null,
      invitedAt?: string | null,
      displayName?: string | null,
      jobSkills?: Array< string | null > | null,
      notes?: string | null,
      timezone?: string | null,
      language?: string | null,
      lastActive?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    timestamp: string,
    isEdited: boolean,
    editedAt?: string | null,
    attachments?:  {
      __typename: "ModelChatAttachmentConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    personSentMessagesId?: string | null,
    groupChatMessagesId?: string | null,
  } | null,
};

export type OnCreateChatAttachmentSubscriptionVariables = {
  filter?: ModelSubscriptionChatAttachmentFilterInput | null,
};

export type OnCreateChatAttachmentSubscription = {
  onCreateChatAttachment?:  {
    __typename: "ChatAttachment",
    id: string,
    fileName: string,
    fileType: string,
    fileSize: number,
    s3Object:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
      etag?: string | null,
      versionId?: string | null,
    },
    uploadedAt: string,
    width?: number | null,
    height?: number | null,
    duration?: number | null,
    thumbnailKey?: string | null,
    messageID: string,
    message:  {
      __typename: "GroupChatMessage",
      id: string,
      content: string,
      chatID: string,
      senderID: string,
      timestamp: string,
      isEdited: boolean,
      editedAt?: string | null,
      createdAt: string,
      updatedAt: string,
      personSentMessagesId?: string | null,
      groupChatMessagesId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    groupChatMessageAttachmentsId?: string | null,
  } | null,
};

export type OnUpdateChatAttachmentSubscriptionVariables = {
  filter?: ModelSubscriptionChatAttachmentFilterInput | null,
};

export type OnUpdateChatAttachmentSubscription = {
  onUpdateChatAttachment?:  {
    __typename: "ChatAttachment",
    id: string,
    fileName: string,
    fileType: string,
    fileSize: number,
    s3Object:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
      etag?: string | null,
      versionId?: string | null,
    },
    uploadedAt: string,
    width?: number | null,
    height?: number | null,
    duration?: number | null,
    thumbnailKey?: string | null,
    messageID: string,
    message:  {
      __typename: "GroupChatMessage",
      id: string,
      content: string,
      chatID: string,
      senderID: string,
      timestamp: string,
      isEdited: boolean,
      editedAt?: string | null,
      createdAt: string,
      updatedAt: string,
      personSentMessagesId?: string | null,
      groupChatMessagesId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    groupChatMessageAttachmentsId?: string | null,
  } | null,
};

export type OnDeleteChatAttachmentSubscriptionVariables = {
  filter?: ModelSubscriptionChatAttachmentFilterInput | null,
};

export type OnDeleteChatAttachmentSubscription = {
  onDeleteChatAttachment?:  {
    __typename: "ChatAttachment",
    id: string,
    fileName: string,
    fileType: string,
    fileSize: number,
    s3Object:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
      etag?: string | null,
      versionId?: string | null,
    },
    uploadedAt: string,
    width?: number | null,
    height?: number | null,
    duration?: number | null,
    thumbnailKey?: string | null,
    messageID: string,
    message:  {
      __typename: "GroupChatMessage",
      id: string,
      content: string,
      chatID: string,
      senderID: string,
      timestamp: string,
      isEdited: boolean,
      editedAt?: string | null,
      createdAt: string,
      updatedAt: string,
      personSentMessagesId?: string | null,
      groupChatMessagesId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    groupChatMessageAttachmentsId?: string | null,
  } | null,
};

export type OnCreatePersonCompaniesSubscriptionVariables = {
  filter?: ModelSubscriptionPersonCompaniesFilterInput | null,
  cognitoUsername?: string | null,
};

export type OnCreatePersonCompaniesSubscription = {
  onCreatePersonCompanies?:  {
    __typename: "PersonCompanies",
    id: string,
    personId: string,
    companyId: string,
    person:  {
      __typename: "Person",
      id: string,
      cognitoUsername?: string | null,
      cognitoSub?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      email: string,
      status?: string | null,
      phone?: string | null,
      invitedAt?: string | null,
      displayName?: string | null,
      jobSkills?: Array< string | null > | null,
      notes?: string | null,
      timezone?: string | null,
      language?: string | null,
      lastActive?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    company:  {
      __typename: "Company",
      id: string,
      name: string,
      website?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    cognitoUsername?: string | null,
  } | null,
};

export type OnUpdatePersonCompaniesSubscriptionVariables = {
  filter?: ModelSubscriptionPersonCompaniesFilterInput | null,
  cognitoUsername?: string | null,
};

export type OnUpdatePersonCompaniesSubscription = {
  onUpdatePersonCompanies?:  {
    __typename: "PersonCompanies",
    id: string,
    personId: string,
    companyId: string,
    person:  {
      __typename: "Person",
      id: string,
      cognitoUsername?: string | null,
      cognitoSub?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      email: string,
      status?: string | null,
      phone?: string | null,
      invitedAt?: string | null,
      displayName?: string | null,
      jobSkills?: Array< string | null > | null,
      notes?: string | null,
      timezone?: string | null,
      language?: string | null,
      lastActive?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    company:  {
      __typename: "Company",
      id: string,
      name: string,
      website?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    cognitoUsername?: string | null,
  } | null,
};

export type OnDeletePersonCompaniesSubscriptionVariables = {
  filter?: ModelSubscriptionPersonCompaniesFilterInput | null,
  cognitoUsername?: string | null,
};

export type OnDeletePersonCompaniesSubscription = {
  onDeletePersonCompanies?:  {
    __typename: "PersonCompanies",
    id: string,
    personId: string,
    companyId: string,
    person:  {
      __typename: "Person",
      id: string,
      cognitoUsername?: string | null,
      cognitoSub?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      email: string,
      status?: string | null,
      phone?: string | null,
      invitedAt?: string | null,
      displayName?: string | null,
      jobSkills?: Array< string | null > | null,
      notes?: string | null,
      timezone?: string | null,
      language?: string | null,
      lastActive?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    company:  {
      __typename: "Company",
      id: string,
      name: string,
      website?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    cognitoUsername?: string | null,
  } | null,
};

export type OnCreateProjectPeopleSubscriptionVariables = {
  filter?: ModelSubscriptionProjectPeopleFilterInput | null,
  cognitoUsername?: string | null,
};

export type OnCreateProjectPeopleSubscription = {
  onCreateProjectPeople?:  {
    __typename: "ProjectPeople",
    id: string,
    personId: string,
    projectId: string,
    person:  {
      __typename: "Person",
      id: string,
      cognitoUsername?: string | null,
      cognitoSub?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      email: string,
      status?: string | null,
      phone?: string | null,
      invitedAt?: string | null,
      displayName?: string | null,
      jobSkills?: Array< string | null > | null,
      notes?: string | null,
      timezone?: string | null,
      language?: string | null,
      lastActive?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    project:  {
      __typename: "Project",
      id: string,
      name: string,
      description?: string | null,
      startDate?: string | null,
      endDate?: string | null,
      companyID: string,
      templateID?: string | null,
      createdAt: string,
      updatedAt: string,
      companyProjectsId?: string | null,
      projectTemplateProjectsId?: string | null,
      projectAddressId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    cognitoUsername?: string | null,
  } | null,
};

export type OnUpdateProjectPeopleSubscriptionVariables = {
  filter?: ModelSubscriptionProjectPeopleFilterInput | null,
  cognitoUsername?: string | null,
};

export type OnUpdateProjectPeopleSubscription = {
  onUpdateProjectPeople?:  {
    __typename: "ProjectPeople",
    id: string,
    personId: string,
    projectId: string,
    person:  {
      __typename: "Person",
      id: string,
      cognitoUsername?: string | null,
      cognitoSub?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      email: string,
      status?: string | null,
      phone?: string | null,
      invitedAt?: string | null,
      displayName?: string | null,
      jobSkills?: Array< string | null > | null,
      notes?: string | null,
      timezone?: string | null,
      language?: string | null,
      lastActive?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    project:  {
      __typename: "Project",
      id: string,
      name: string,
      description?: string | null,
      startDate?: string | null,
      endDate?: string | null,
      companyID: string,
      templateID?: string | null,
      createdAt: string,
      updatedAt: string,
      companyProjectsId?: string | null,
      projectTemplateProjectsId?: string | null,
      projectAddressId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    cognitoUsername?: string | null,
  } | null,
};

export type OnDeleteProjectPeopleSubscriptionVariables = {
  filter?: ModelSubscriptionProjectPeopleFilterInput | null,
  cognitoUsername?: string | null,
};

export type OnDeleteProjectPeopleSubscription = {
  onDeleteProjectPeople?:  {
    __typename: "ProjectPeople",
    id: string,
    personId: string,
    projectId: string,
    person:  {
      __typename: "Person",
      id: string,
      cognitoUsername?: string | null,
      cognitoSub?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      email: string,
      status?: string | null,
      phone?: string | null,
      invitedAt?: string | null,
      displayName?: string | null,
      jobSkills?: Array< string | null > | null,
      notes?: string | null,
      timezone?: string | null,
      language?: string | null,
      lastActive?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    project:  {
      __typename: "Project",
      id: string,
      name: string,
      description?: string | null,
      startDate?: string | null,
      endDate?: string | null,
      companyID: string,
      templateID?: string | null,
      createdAt: string,
      updatedAt: string,
      companyProjectsId?: string | null,
      projectTemplateProjectsId?: string | null,
      projectAddressId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    cognitoUsername?: string | null,
  } | null,
};

export type OnCreateChatParticipantsSubscriptionVariables = {
  filter?: ModelSubscriptionChatParticipantsFilterInput | null,
  cognitoUsername?: string | null,
};

export type OnCreateChatParticipantsSubscription = {
  onCreateChatParticipants?:  {
    __typename: "ChatParticipants",
    id: string,
    personId: string,
    groupChatId: string,
    person:  {
      __typename: "Person",
      id: string,
      cognitoUsername?: string | null,
      cognitoSub?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      email: string,
      status?: string | null,
      phone?: string | null,
      invitedAt?: string | null,
      displayName?: string | null,
      jobSkills?: Array< string | null > | null,
      notes?: string | null,
      timezone?: string | null,
      language?: string | null,
      lastActive?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    groupChat:  {
      __typename: "GroupChat",
      id: string,
      name: string,
      chatType: ChatType,
      createdAt: string,
      updatedAt: string,
      status: ChatStatus,
      isDeleted: boolean,
      messageLimit?: number | null,
      lastMessageAt?: string | null,
      companyID: string,
      projectID?: string | null,
      scopeItemID?: string | null,
      companyChatsId?: string | null,
      projectChatsId?: string | null,
      scopeItemChatsId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    cognitoUsername?: string | null,
  } | null,
};

export type OnUpdateChatParticipantsSubscriptionVariables = {
  filter?: ModelSubscriptionChatParticipantsFilterInput | null,
  cognitoUsername?: string | null,
};

export type OnUpdateChatParticipantsSubscription = {
  onUpdateChatParticipants?:  {
    __typename: "ChatParticipants",
    id: string,
    personId: string,
    groupChatId: string,
    person:  {
      __typename: "Person",
      id: string,
      cognitoUsername?: string | null,
      cognitoSub?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      email: string,
      status?: string | null,
      phone?: string | null,
      invitedAt?: string | null,
      displayName?: string | null,
      jobSkills?: Array< string | null > | null,
      notes?: string | null,
      timezone?: string | null,
      language?: string | null,
      lastActive?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    groupChat:  {
      __typename: "GroupChat",
      id: string,
      name: string,
      chatType: ChatType,
      createdAt: string,
      updatedAt: string,
      status: ChatStatus,
      isDeleted: boolean,
      messageLimit?: number | null,
      lastMessageAt?: string | null,
      companyID: string,
      projectID?: string | null,
      scopeItemID?: string | null,
      companyChatsId?: string | null,
      projectChatsId?: string | null,
      scopeItemChatsId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    cognitoUsername?: string | null,
  } | null,
};

export type OnDeleteChatParticipantsSubscriptionVariables = {
  filter?: ModelSubscriptionChatParticipantsFilterInput | null,
  cognitoUsername?: string | null,
};

export type OnDeleteChatParticipantsSubscription = {
  onDeleteChatParticipants?:  {
    __typename: "ChatParticipants",
    id: string,
    personId: string,
    groupChatId: string,
    person:  {
      __typename: "Person",
      id: string,
      cognitoUsername?: string | null,
      cognitoSub?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      email: string,
      status?: string | null,
      phone?: string | null,
      invitedAt?: string | null,
      displayName?: string | null,
      jobSkills?: Array< string | null > | null,
      notes?: string | null,
      timezone?: string | null,
      language?: string | null,
      lastActive?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    groupChat:  {
      __typename: "GroupChat",
      id: string,
      name: string,
      chatType: ChatType,
      createdAt: string,
      updatedAt: string,
      status: ChatStatus,
      isDeleted: boolean,
      messageLimit?: number | null,
      lastMessageAt?: string | null,
      companyID: string,
      projectID?: string | null,
      scopeItemID?: string | null,
      companyChatsId?: string | null,
      projectChatsId?: string | null,
      scopeItemChatsId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    cognitoUsername?: string | null,
  } | null,
};

export type OnCreateProjectFileTagSubscriptionVariables = {
  filter?: ModelSubscriptionProjectFileTagFilterInput | null,
};

export type OnCreateProjectFileTagSubscription = {
  onCreateProjectFileTag?:  {
    __typename: "ProjectFileTag",
    id: string,
    tagId: string,
    projectFileId: string,
    tag:  {
      __typename: "Tag",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    },
    projectFile:  {
      __typename: "ProjectFile",
      id: string,
      fileName: string,
      fileType: string,
      fileSize: number,
      description?: string | null,
      uploadedByID: string,
      uploadedAt: string,
      projectID: string,
      isPublic: boolean,
      width?: number | null,
      height?: number | null,
      duration?: number | null,
      thumbnailKey?: string | null,
      createdAt: string,
      updatedAt: string,
      personUploadedFilesId?: string | null,
      projectFilesId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateProjectFileTagSubscriptionVariables = {
  filter?: ModelSubscriptionProjectFileTagFilterInput | null,
};

export type OnUpdateProjectFileTagSubscription = {
  onUpdateProjectFileTag?:  {
    __typename: "ProjectFileTag",
    id: string,
    tagId: string,
    projectFileId: string,
    tag:  {
      __typename: "Tag",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    },
    projectFile:  {
      __typename: "ProjectFile",
      id: string,
      fileName: string,
      fileType: string,
      fileSize: number,
      description?: string | null,
      uploadedByID: string,
      uploadedAt: string,
      projectID: string,
      isPublic: boolean,
      width?: number | null,
      height?: number | null,
      duration?: number | null,
      thumbnailKey?: string | null,
      createdAt: string,
      updatedAt: string,
      personUploadedFilesId?: string | null,
      projectFilesId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteProjectFileTagSubscriptionVariables = {
  filter?: ModelSubscriptionProjectFileTagFilterInput | null,
};

export type OnDeleteProjectFileTagSubscription = {
  onDeleteProjectFileTag?:  {
    __typename: "ProjectFileTag",
    id: string,
    tagId: string,
    projectFileId: string,
    tag:  {
      __typename: "Tag",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    },
    projectFile:  {
      __typename: "ProjectFile",
      id: string,
      fileName: string,
      fileType: string,
      fileSize: number,
      description?: string | null,
      uploadedByID: string,
      uploadedAt: string,
      projectID: string,
      isPublic: boolean,
      width?: number | null,
      height?: number | null,
      duration?: number | null,
      thumbnailKey?: string | null,
      createdAt: string,
      updatedAt: string,
      personUploadedFilesId?: string | null,
      projectFilesId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};
