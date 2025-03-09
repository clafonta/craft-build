/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getPerson = /* GraphQL */ `query GetPerson($id: ID!) {
  getPerson(id: $id) {
    id
    cognitoUsername
    cognitoSub
    firstName
    lastName
    email
    status
    phone
    invitedAt
    displayName
    jobSkills
    companyRoles {
      nextToken
      __typename
    }
    companies {
      nextToken
      __typename
    }
    projects {
      nextToken
      __typename
    }
    projectMemberships {
      nextToken
      __typename
    }
    uploadedFiles {
      nextToken
      __typename
    }
    chats {
      nextToken
      __typename
    }
    sentMessages {
      nextToken
      __typename
    }
    notes
    timezone
    language
    lastActive
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetPersonQueryVariables, APITypes.GetPersonQuery>;
export const listPeople = /* GraphQL */ `query ListPeople(
  $id: ID
  $filter: ModelPersonFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listPeople(
    id: $id
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      id
      cognitoUsername
      cognitoSub
      firstName
      lastName
      email
      status
      phone
      invitedAt
      displayName
      jobSkills
      notes
      timezone
      language
      lastActive
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListPeopleQueryVariables,
  APITypes.ListPeopleQuery
>;
export const getPersonCompanyRole = /* GraphQL */ `query GetPersonCompanyRole($id: ID!) {
  getPersonCompanyRole(id: $id) {
    id
    personID
    person {
      id
      cognitoUsername
      cognitoSub
      firstName
      lastName
      email
      status
      phone
      invitedAt
      displayName
      jobSkills
      notes
      timezone
      language
      lastActive
      createdAt
      updatedAt
      __typename
    }
    companyID
    company {
      id
      name
      website
      createdAt
      updatedAt
      __typename
    }
    jobRoles
    isActive
    startDate
    endDate
    createdAt
    updatedAt
    personCompanyRolesId
    companyPersonRolesId
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetPersonCompanyRoleQueryVariables,
  APITypes.GetPersonCompanyRoleQuery
>;
export const listPersonCompanyRoles = /* GraphQL */ `query ListPersonCompanyRoles(
  $id: ID
  $filter: ModelPersonCompanyRoleFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listPersonCompanyRoles(
    id: $id
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      id
      personID
      companyID
      jobRoles
      isActive
      startDate
      endDate
      createdAt
      updatedAt
      personCompanyRolesId
      companyPersonRolesId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListPersonCompanyRolesQueryVariables,
  APITypes.ListPersonCompanyRolesQuery
>;
export const getCompany = /* GraphQL */ `query GetCompany($id: ID!) {
  getCompany(id: $id) {
    id
    name
    website
    people {
      nextToken
      __typename
    }
    personRoles {
      nextToken
      __typename
    }
    projects {
      nextToken
      __typename
    }
    projectTemplates {
      nextToken
      __typename
    }
    scopeItemTags {
      nextToken
      __typename
    }
    templateScopeItemTags {
      nextToken
      __typename
    }
    chats {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetCompanyQueryVariables,
  APITypes.GetCompanyQuery
>;
export const listCompanies = /* GraphQL */ `query ListCompanies(
  $id: ID
  $filter: ModelCompanyFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listCompanies(
    id: $id
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      id
      name
      website
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCompaniesQueryVariables,
  APITypes.ListCompaniesQuery
>;
export const getProjectTemplate = /* GraphQL */ `query GetProjectTemplate($id: ID!) {
  getProjectTemplate(id: $id) {
    id
    name
    description
    companyID
    company {
      id
      name
      website
      createdAt
      updatedAt
      __typename
    }
    projects {
      nextToken
      __typename
    }
    scopeItems {
      nextToken
      __typename
    }
    templateScopeItemTags {
      nextToken
      __typename
    }
    estimatedDuration
    defaultAddress {
      id
      street
      city
      state
      postalCode
      country
      projectID
      createdAt
      updatedAt
      __typename
    }
    notificationSettings {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    companyProjectTemplatesId
    projectTemplateDefaultAddressId
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetProjectTemplateQueryVariables,
  APITypes.GetProjectTemplateQuery
>;
export const listProjectTemplates = /* GraphQL */ `query ListProjectTemplates(
  $id: ID
  $filter: ModelProjectTemplateFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listProjectTemplates(
    id: $id
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      id
      name
      description
      companyID
      estimatedDuration
      createdAt
      updatedAt
      companyProjectTemplatesId
      projectTemplateDefaultAddressId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListProjectTemplatesQueryVariables,
  APITypes.ListProjectTemplatesQuery
>;
export const getTemplateScopeItem = /* GraphQL */ `query GetTemplateScopeItem($id: ID!) {
  getTemplateScopeItem(id: $id) {
    id
    name
    description
    parentItemID
    parentItem {
      id
      name
      description
      parentItemID
      projectTemplateID
      tags
      createdAt
      updatedAt
      projectTemplateScopeItemsId
      __typename
    }
    childItems {
      nextToken
      __typename
    }
    projectTemplateID
    projectTemplate {
      id
      name
      description
      companyID
      estimatedDuration
      createdAt
      updatedAt
      companyProjectTemplatesId
      projectTemplateDefaultAddressId
      __typename
    }
    tags
    createdAt
    updatedAt
    projectTemplateScopeItemsId
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetTemplateScopeItemQueryVariables,
  APITypes.GetTemplateScopeItemQuery
>;
export const listTemplateScopeItems = /* GraphQL */ `query ListTemplateScopeItems(
  $id: ID
  $filter: ModelTemplateScopeItemFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listTemplateScopeItems(
    id: $id
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      id
      name
      description
      parentItemID
      projectTemplateID
      tags
      createdAt
      updatedAt
      projectTemplateScopeItemsId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListTemplateScopeItemsQueryVariables,
  APITypes.ListTemplateScopeItemsQuery
>;
export const getProjectMembership = /* GraphQL */ `query GetProjectMembership($id: ID!) {
  getProjectMembership(id: $id) {
    id
    projectID
    project {
      id
      name
      description
      startDate
      endDate
      companyID
      templateID
      createdAt
      updatedAt
      companyProjectsId
      projectTemplateProjectsId
      projectAddressId
      __typename
    }
    personID
    person {
      id
      cognitoUsername
      cognitoSub
      firstName
      lastName
      email
      status
      phone
      invitedAt
      displayName
      jobSkills
      notes
      timezone
      language
      lastActive
      createdAt
      updatedAt
      __typename
    }
    roles
    isActive
    startDate
    endDate
    createdAt
    updatedAt
    personProjectMembershipsId
    projectMembershipsId
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetProjectMembershipQueryVariables,
  APITypes.GetProjectMembershipQuery
>;
export const listProjectMemberships = /* GraphQL */ `query ListProjectMemberships(
  $id: ID
  $filter: ModelProjectMembershipFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listProjectMemberships(
    id: $id
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      id
      projectID
      personID
      roles
      isActive
      startDate
      endDate
      createdAt
      updatedAt
      personProjectMembershipsId
      projectMembershipsId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListProjectMembershipsQueryVariables,
  APITypes.ListProjectMembershipsQuery
>;
export const getProject = /* GraphQL */ `query GetProject($id: ID!) {
  getProject(id: $id) {
    id
    name
    description
    startDate
    endDate
    companyID
    company {
      id
      name
      website
      createdAt
      updatedAt
      __typename
    }
    templateID
    template {
      id
      name
      description
      companyID
      estimatedDuration
      createdAt
      updatedAt
      companyProjectTemplatesId
      projectTemplateDefaultAddressId
      __typename
    }
    people {
      nextToken
      __typename
    }
    memberships {
      nextToken
      __typename
    }
    files {
      nextToken
      __typename
    }
    address {
      id
      street
      city
      state
      postalCode
      country
      projectID
      createdAt
      updatedAt
      __typename
    }
    notifications {
      nextToken
      __typename
    }
    chats {
      nextToken
      __typename
    }
    scopeItems {
      nextToken
      __typename
    }
    scopeItemGroups {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    companyProjectsId
    projectTemplateProjectsId
    projectAddressId
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetProjectQueryVariables,
  APITypes.GetProjectQuery
>;
export const listProjects = /* GraphQL */ `query ListProjects(
  $id: ID
  $filter: ModelProjectFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listProjects(
    id: $id
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      id
      name
      description
      startDate
      endDate
      companyID
      templateID
      createdAt
      updatedAt
      companyProjectsId
      projectTemplateProjectsId
      projectAddressId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListProjectsQueryVariables,
  APITypes.ListProjectsQuery
>;
export const getScopeItemTag = /* GraphQL */ `query GetScopeItemTag($id: ID!) {
  getScopeItemTag(id: $id) {
    id
    name
    description
    companyID
    company {
      id
      name
      website
      createdAt
      updatedAt
      __typename
    }
    color
    createdAt
    updatedAt
    companyScopeItemTagsId
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetScopeItemTagQueryVariables,
  APITypes.GetScopeItemTagQuery
>;
export const listScopeItemTags = /* GraphQL */ `query ListScopeItemTags(
  $id: ID
  $filter: ModelScopeItemTagFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listScopeItemTags(
    id: $id
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      id
      name
      description
      companyID
      color
      createdAt
      updatedAt
      companyScopeItemTagsId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListScopeItemTagsQueryVariables,
  APITypes.ListScopeItemTagsQuery
>;
export const getTemplateScopeItemTag = /* GraphQL */ `query GetTemplateScopeItemTag($id: ID!) {
  getTemplateScopeItemTag(id: $id) {
    id
    name
    description
    companyID
    company {
      id
      name
      website
      createdAt
      updatedAt
      __typename
    }
    projectTemplateID
    projectTemplate {
      id
      name
      description
      companyID
      estimatedDuration
      createdAt
      updatedAt
      companyProjectTemplatesId
      projectTemplateDefaultAddressId
      __typename
    }
    color
    createdAt
    updatedAt
    companyTemplateScopeItemTagsId
    projectTemplateTemplateScopeItemTagsId
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetTemplateScopeItemTagQueryVariables,
  APITypes.GetTemplateScopeItemTagQuery
>;
export const listTemplateScopeItemTags = /* GraphQL */ `query ListTemplateScopeItemTags(
  $id: ID
  $filter: ModelTemplateScopeItemTagFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listTemplateScopeItemTags(
    id: $id
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      id
      name
      description
      companyID
      projectTemplateID
      color
      createdAt
      updatedAt
      companyTemplateScopeItemTagsId
      projectTemplateTemplateScopeItemTagsId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListTemplateScopeItemTagsQueryVariables,
  APITypes.ListTemplateScopeItemTagsQuery
>;
export const getScopeItemGroup = /* GraphQL */ `query GetScopeItemGroup($id: ID!) {
  getScopeItemGroup(id: $id) {
    id
    name
    description
    projectID
    project {
      id
      name
      description
      startDate
      endDate
      companyID
      templateID
      createdAt
      updatedAt
      companyProjectsId
      projectTemplateProjectsId
      projectAddressId
      __typename
    }
    scopeItems {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    projectScopeItemGroupsId
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetScopeItemGroupQueryVariables,
  APITypes.GetScopeItemGroupQuery
>;
export const listScopeItemGroups = /* GraphQL */ `query ListScopeItemGroups(
  $id: ID
  $filter: ModelScopeItemGroupFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listScopeItemGroups(
    id: $id
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      id
      name
      description
      projectID
      createdAt
      updatedAt
      projectScopeItemGroupsId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListScopeItemGroupsQueryVariables,
  APITypes.ListScopeItemGroupsQuery
>;
export const getScopeItem = /* GraphQL */ `query GetScopeItem($id: ID!) {
  getScopeItem(id: $id) {
    id
    name
    description
    category
    costEstimate
    spendEstimate
    durationEstimate
    isCompleted
    progress
    tags
    parentItemID
    parentItem {
      id
      name
      description
      category
      costEstimate
      spendEstimate
      durationEstimate
      isCompleted
      progress
      tags
      parentItemID
      projectID
      groupID
      createdAt
      updatedAt
      projectScopeItemsId
      scopeItemGroupScopeItemsId
      __typename
    }
    childItems {
      nextToken
      __typename
    }
    projectID
    project {
      id
      name
      description
      startDate
      endDate
      companyID
      templateID
      createdAt
      updatedAt
      companyProjectsId
      projectTemplateProjectsId
      projectAddressId
      __typename
    }
    groupID
    group {
      id
      name
      description
      projectID
      createdAt
      updatedAt
      projectScopeItemGroupsId
      __typename
    }
    chats {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    projectScopeItemsId
    scopeItemGroupScopeItemsId
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetScopeItemQueryVariables,
  APITypes.GetScopeItemQuery
>;
export const listScopeItems = /* GraphQL */ `query ListScopeItems(
  $id: ID
  $filter: ModelScopeItemFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listScopeItems(
    id: $id
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      id
      name
      description
      category
      costEstimate
      spendEstimate
      durationEstimate
      isCompleted
      progress
      tags
      parentItemID
      projectID
      groupID
      createdAt
      updatedAt
      projectScopeItemsId
      scopeItemGroupScopeItemsId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListScopeItemsQueryVariables,
  APITypes.ListScopeItemsQuery
>;
export const getAddress = /* GraphQL */ `query GetAddress($id: ID!) {
  getAddress(id: $id) {
    id
    street
    city
    state
    postalCode
    country
    projectID
    project {
      id
      name
      description
      startDate
      endDate
      companyID
      templateID
      createdAt
      updatedAt
      companyProjectsId
      projectTemplateProjectsId
      projectAddressId
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetAddressQueryVariables,
  APITypes.GetAddressQuery
>;
export const listAddresses = /* GraphQL */ `query ListAddresses(
  $id: ID
  $filter: ModelAddressFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listAddresses(
    id: $id
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      id
      street
      city
      state
      postalCode
      country
      projectID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListAddressesQueryVariables,
  APITypes.ListAddressesQuery
>;
export const getTag = /* GraphQL */ `query GetTag($id: ID!) {
  getTag(id: $id) {
    id
    name
    files {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetTagQueryVariables, APITypes.GetTagQuery>;
export const listTags = /* GraphQL */ `query ListTags(
  $id: ID
  $filter: ModelTagFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listTags(
    id: $id
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      id
      name
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListTagsQueryVariables, APITypes.ListTagsQuery>;
export const getProjectFile = /* GraphQL */ `query GetProjectFile($id: ID!) {
  getProjectFile(id: $id) {
    id
    fileName
    fileType
    fileSize
    description
    uploadedByID
    uploadedBy {
      id
      cognitoUsername
      cognitoSub
      firstName
      lastName
      email
      status
      phone
      invitedAt
      displayName
      jobSkills
      notes
      timezone
      language
      lastActive
      createdAt
      updatedAt
      __typename
    }
    uploadedAt
    projectID
    project {
      id
      name
      description
      startDate
      endDate
      companyID
      templateID
      createdAt
      updatedAt
      companyProjectsId
      projectTemplateProjectsId
      projectAddressId
      __typename
    }
    s3Object {
      bucket
      region
      key
      etag
      versionId
      __typename
    }
    isPublic
    width
    height
    duration
    thumbnailKey
    tags {
      nextToken
      __typename
    }
    annotations {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    personUploadedFilesId
    projectFilesId
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetProjectFileQueryVariables,
  APITypes.GetProjectFileQuery
>;
export const listProjectFiles = /* GraphQL */ `query ListProjectFiles(
  $id: ID
  $filter: ModelProjectFileFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listProjectFiles(
    id: $id
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      id
      fileName
      fileType
      fileSize
      description
      uploadedByID
      uploadedAt
      projectID
      isPublic
      width
      height
      duration
      thumbnailKey
      createdAt
      updatedAt
      personUploadedFilesId
      projectFilesId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListProjectFilesQueryVariables,
  APITypes.ListProjectFilesQuery
>;
export const getAnnotation = /* GraphQL */ `query GetAnnotation($id: ID!) {
  getAnnotation(id: $id) {
    id
    pageNumber
    x
    y
    endX
    endY
    width
    height
    radius
    rotation
    strokeWidth
    strokeStyle
    color
    type
    text
    projectFileID
    projectFile {
      id
      fileName
      fileType
      fileSize
      description
      uploadedByID
      uploadedAt
      projectID
      isPublic
      width
      height
      duration
      thumbnailKey
      createdAt
      updatedAt
      personUploadedFilesId
      projectFilesId
      __typename
    }
    createdAt
    createdByID
    updatedAt
    updatedByID
    projectFileAnnotationsId
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetAnnotationQueryVariables,
  APITypes.GetAnnotationQuery
>;
export const listAnnotations = /* GraphQL */ `query ListAnnotations(
  $id: ID
  $filter: ModelAnnotationFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listAnnotations(
    id: $id
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      id
      pageNumber
      x
      y
      endX
      endY
      width
      height
      radius
      rotation
      strokeWidth
      strokeStyle
      color
      type
      text
      projectFileID
      createdAt
      createdByID
      updatedAt
      updatedByID
      projectFileAnnotationsId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListAnnotationsQueryVariables,
  APITypes.ListAnnotationsQuery
>;
export const getNotification = /* GraphQL */ `query GetNotification($id: ID!) {
  getNotification(id: $id) {
    id
    type
    messageTemplate
    status
    schedule {
      date
      time
      isRecurring
      frequency
      interval
      daysOfWeek
      endDate
      runCount
      maxRuns
      __typename
    }
    projectID
    project {
      id
      name
      description
      startDate
      endDate
      companyID
      templateID
      createdAt
      updatedAt
      companyProjectsId
      projectTemplateProjectsId
      projectAddressId
      __typename
    }
    createdAt
    updatedAt
    projectTemplateNotificationSettingsId
    projectNotificationsId
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetNotificationQueryVariables,
  APITypes.GetNotificationQuery
>;
export const listNotifications = /* GraphQL */ `query ListNotifications(
  $id: ID
  $filter: ModelNotificationFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listNotifications(
    id: $id
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      id
      type
      messageTemplate
      status
      projectID
      createdAt
      updatedAt
      projectTemplateNotificationSettingsId
      projectNotificationsId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListNotificationsQueryVariables,
  APITypes.ListNotificationsQuery
>;
export const getGroupChat = /* GraphQL */ `query GetGroupChat($id: ID!) {
  getGroupChat(id: $id) {
    id
    name
    chatType
    messages {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    status
    isDeleted
    messageLimit
    lastMessageAt
    companyID
    company {
      id
      name
      website
      createdAt
      updatedAt
      __typename
    }
    projectID
    project {
      id
      name
      description
      startDate
      endDate
      companyID
      templateID
      createdAt
      updatedAt
      companyProjectsId
      projectTemplateProjectsId
      projectAddressId
      __typename
    }
    scopeItemID
    scopeItem {
      id
      name
      description
      category
      costEstimate
      spendEstimate
      durationEstimate
      isCompleted
      progress
      tags
      parentItemID
      projectID
      groupID
      createdAt
      updatedAt
      projectScopeItemsId
      scopeItemGroupScopeItemsId
      __typename
    }
    participants {
      nextToken
      __typename
    }
    companyChatsId
    projectChatsId
    scopeItemChatsId
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetGroupChatQueryVariables,
  APITypes.GetGroupChatQuery
>;
export const listGroupChats = /* GraphQL */ `query ListGroupChats(
  $id: ID
  $filter: ModelGroupChatFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listGroupChats(
    id: $id
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      id
      name
      chatType
      createdAt
      updatedAt
      status
      isDeleted
      messageLimit
      lastMessageAt
      companyID
      projectID
      scopeItemID
      companyChatsId
      projectChatsId
      scopeItemChatsId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListGroupChatsQueryVariables,
  APITypes.ListGroupChatsQuery
>;
export const getGroupChatMessage = /* GraphQL */ `query GetGroupChatMessage($id: ID!) {
  getGroupChatMessage(id: $id) {
    id
    content
    chatID
    chat {
      id
      name
      chatType
      createdAt
      updatedAt
      status
      isDeleted
      messageLimit
      lastMessageAt
      companyID
      projectID
      scopeItemID
      companyChatsId
      projectChatsId
      scopeItemChatsId
      __typename
    }
    senderID
    sender {
      id
      cognitoUsername
      cognitoSub
      firstName
      lastName
      email
      status
      phone
      invitedAt
      displayName
      jobSkills
      notes
      timezone
      language
      lastActive
      createdAt
      updatedAt
      __typename
    }
    timestamp
    isEdited
    editedAt
    attachments {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    personSentMessagesId
    groupChatMessagesId
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetGroupChatMessageQueryVariables,
  APITypes.GetGroupChatMessageQuery
>;
export const listGroupChatMessages = /* GraphQL */ `query ListGroupChatMessages(
  $id: ID
  $filter: ModelGroupChatMessageFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listGroupChatMessages(
    id: $id
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      id
      content
      chatID
      senderID
      timestamp
      isEdited
      editedAt
      createdAt
      updatedAt
      personSentMessagesId
      groupChatMessagesId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListGroupChatMessagesQueryVariables,
  APITypes.ListGroupChatMessagesQuery
>;
export const getChatAttachment = /* GraphQL */ `query GetChatAttachment($id: ID!) {
  getChatAttachment(id: $id) {
    id
    fileName
    fileType
    fileSize
    s3Object {
      bucket
      region
      key
      etag
      versionId
      __typename
    }
    uploadedAt
    width
    height
    duration
    thumbnailKey
    messageID
    message {
      id
      content
      chatID
      senderID
      timestamp
      isEdited
      editedAt
      createdAt
      updatedAt
      personSentMessagesId
      groupChatMessagesId
      __typename
    }
    createdAt
    updatedAt
    groupChatMessageAttachmentsId
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetChatAttachmentQueryVariables,
  APITypes.GetChatAttachmentQuery
>;
export const listChatAttachments = /* GraphQL */ `query ListChatAttachments(
  $id: ID
  $filter: ModelChatAttachmentFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listChatAttachments(
    id: $id
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      id
      fileName
      fileType
      fileSize
      uploadedAt
      width
      height
      duration
      thumbnailKey
      messageID
      createdAt
      updatedAt
      groupChatMessageAttachmentsId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListChatAttachmentsQueryVariables,
  APITypes.ListChatAttachmentsQuery
>;
export const getPersonCompanies = /* GraphQL */ `query GetPersonCompanies($id: ID!) {
  getPersonCompanies(id: $id) {
    id
    personId
    companyId
    person {
      id
      cognitoUsername
      cognitoSub
      firstName
      lastName
      email
      status
      phone
      invitedAt
      displayName
      jobSkills
      notes
      timezone
      language
      lastActive
      createdAt
      updatedAt
      __typename
    }
    company {
      id
      name
      website
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    cognitoUsername
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetPersonCompaniesQueryVariables,
  APITypes.GetPersonCompaniesQuery
>;
export const listPersonCompanies = /* GraphQL */ `query ListPersonCompanies(
  $filter: ModelPersonCompaniesFilterInput
  $limit: Int
  $nextToken: String
) {
  listPersonCompanies(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      personId
      companyId
      createdAt
      updatedAt
      cognitoUsername
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListPersonCompaniesQueryVariables,
  APITypes.ListPersonCompaniesQuery
>;
export const getProjectPeople = /* GraphQL */ `query GetProjectPeople($id: ID!) {
  getProjectPeople(id: $id) {
    id
    personId
    projectId
    person {
      id
      cognitoUsername
      cognitoSub
      firstName
      lastName
      email
      status
      phone
      invitedAt
      displayName
      jobSkills
      notes
      timezone
      language
      lastActive
      createdAt
      updatedAt
      __typename
    }
    project {
      id
      name
      description
      startDate
      endDate
      companyID
      templateID
      createdAt
      updatedAt
      companyProjectsId
      projectTemplateProjectsId
      projectAddressId
      __typename
    }
    createdAt
    updatedAt
    cognitoUsername
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetProjectPeopleQueryVariables,
  APITypes.GetProjectPeopleQuery
>;
export const listProjectPeople = /* GraphQL */ `query ListProjectPeople(
  $filter: ModelProjectPeopleFilterInput
  $limit: Int
  $nextToken: String
) {
  listProjectPeople(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      personId
      projectId
      createdAt
      updatedAt
      cognitoUsername
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListProjectPeopleQueryVariables,
  APITypes.ListProjectPeopleQuery
>;
export const getChatParticipants = /* GraphQL */ `query GetChatParticipants($id: ID!) {
  getChatParticipants(id: $id) {
    id
    personId
    groupChatId
    person {
      id
      cognitoUsername
      cognitoSub
      firstName
      lastName
      email
      status
      phone
      invitedAt
      displayName
      jobSkills
      notes
      timezone
      language
      lastActive
      createdAt
      updatedAt
      __typename
    }
    groupChat {
      id
      name
      chatType
      createdAt
      updatedAt
      status
      isDeleted
      messageLimit
      lastMessageAt
      companyID
      projectID
      scopeItemID
      companyChatsId
      projectChatsId
      scopeItemChatsId
      __typename
    }
    createdAt
    updatedAt
    cognitoUsername
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetChatParticipantsQueryVariables,
  APITypes.GetChatParticipantsQuery
>;
export const listChatParticipants = /* GraphQL */ `query ListChatParticipants(
  $filter: ModelChatParticipantsFilterInput
  $limit: Int
  $nextToken: String
) {
  listChatParticipants(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      personId
      groupChatId
      createdAt
      updatedAt
      cognitoUsername
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListChatParticipantsQueryVariables,
  APITypes.ListChatParticipantsQuery
>;
export const getProjectFileTag = /* GraphQL */ `query GetProjectFileTag($id: ID!) {
  getProjectFileTag(id: $id) {
    id
    tagId
    projectFileId
    tag {
      id
      name
      createdAt
      updatedAt
      __typename
    }
    projectFile {
      id
      fileName
      fileType
      fileSize
      description
      uploadedByID
      uploadedAt
      projectID
      isPublic
      width
      height
      duration
      thumbnailKey
      createdAt
      updatedAt
      personUploadedFilesId
      projectFilesId
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetProjectFileTagQueryVariables,
  APITypes.GetProjectFileTagQuery
>;
export const listProjectFileTags = /* GraphQL */ `query ListProjectFileTags(
  $filter: ModelProjectFileTagFilterInput
  $limit: Int
  $nextToken: String
) {
  listProjectFileTags(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      tagId
      projectFileId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListProjectFileTagsQueryVariables,
  APITypes.ListProjectFileTagsQuery
>;
export const peopleByCognitoUsername = /* GraphQL */ `query PeopleByCognitoUsername(
  $cognitoUsername: String!
  $sortDirection: ModelSortDirection
  $filter: ModelPersonFilterInput
  $limit: Int
  $nextToken: String
) {
  peopleByCognitoUsername(
    cognitoUsername: $cognitoUsername
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      cognitoUsername
      cognitoSub
      firstName
      lastName
      email
      status
      phone
      invitedAt
      displayName
      jobSkills
      notes
      timezone
      language
      lastActive
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.PeopleByCognitoUsernameQueryVariables,
  APITypes.PeopleByCognitoUsernameQuery
>;
export const peopleByCognitoSub = /* GraphQL */ `query PeopleByCognitoSub(
  $cognitoSub: String!
  $sortDirection: ModelSortDirection
  $filter: ModelPersonFilterInput
  $limit: Int
  $nextToken: String
) {
  peopleByCognitoSub(
    cognitoSub: $cognitoSub
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      cognitoUsername
      cognitoSub
      firstName
      lastName
      email
      status
      phone
      invitedAt
      displayName
      jobSkills
      notes
      timezone
      language
      lastActive
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.PeopleByCognitoSubQueryVariables,
  APITypes.PeopleByCognitoSubQuery
>;
export const personCompanyRolesByPersonID = /* GraphQL */ `query PersonCompanyRolesByPersonID(
  $personID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelPersonCompanyRoleFilterInput
  $limit: Int
  $nextToken: String
) {
  personCompanyRolesByPersonID(
    personID: $personID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      personID
      companyID
      jobRoles
      isActive
      startDate
      endDate
      createdAt
      updatedAt
      personCompanyRolesId
      companyPersonRolesId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.PersonCompanyRolesByPersonIDQueryVariables,
  APITypes.PersonCompanyRolesByPersonIDQuery
>;
export const personCompanyRolesByCompanyID = /* GraphQL */ `query PersonCompanyRolesByCompanyID(
  $companyID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelPersonCompanyRoleFilterInput
  $limit: Int
  $nextToken: String
) {
  personCompanyRolesByCompanyID(
    companyID: $companyID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      personID
      companyID
      jobRoles
      isActive
      startDate
      endDate
      createdAt
      updatedAt
      personCompanyRolesId
      companyPersonRolesId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.PersonCompanyRolesByCompanyIDQueryVariables,
  APITypes.PersonCompanyRolesByCompanyIDQuery
>;
export const projectTemplatesByCompanyID = /* GraphQL */ `query ProjectTemplatesByCompanyID(
  $companyID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelProjectTemplateFilterInput
  $limit: Int
  $nextToken: String
) {
  projectTemplatesByCompanyID(
    companyID: $companyID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      description
      companyID
      estimatedDuration
      createdAt
      updatedAt
      companyProjectTemplatesId
      projectTemplateDefaultAddressId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ProjectTemplatesByCompanyIDQueryVariables,
  APITypes.ProjectTemplatesByCompanyIDQuery
>;
export const templateScopeItemsByParentItemID = /* GraphQL */ `query TemplateScopeItemsByParentItemID(
  $parentItemID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelTemplateScopeItemFilterInput
  $limit: Int
  $nextToken: String
) {
  templateScopeItemsByParentItemID(
    parentItemID: $parentItemID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      description
      parentItemID
      projectTemplateID
      tags
      createdAt
      updatedAt
      projectTemplateScopeItemsId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.TemplateScopeItemsByParentItemIDQueryVariables,
  APITypes.TemplateScopeItemsByParentItemIDQuery
>;
export const templateScopeItemsByProjectTemplateID = /* GraphQL */ `query TemplateScopeItemsByProjectTemplateID(
  $projectTemplateID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelTemplateScopeItemFilterInput
  $limit: Int
  $nextToken: String
) {
  templateScopeItemsByProjectTemplateID(
    projectTemplateID: $projectTemplateID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      description
      parentItemID
      projectTemplateID
      tags
      createdAt
      updatedAt
      projectTemplateScopeItemsId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.TemplateScopeItemsByProjectTemplateIDQueryVariables,
  APITypes.TemplateScopeItemsByProjectTemplateIDQuery
>;
export const projectMembershipsByProjectID = /* GraphQL */ `query ProjectMembershipsByProjectID(
  $projectID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelProjectMembershipFilterInput
  $limit: Int
  $nextToken: String
) {
  projectMembershipsByProjectID(
    projectID: $projectID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      projectID
      personID
      roles
      isActive
      startDate
      endDate
      createdAt
      updatedAt
      personProjectMembershipsId
      projectMembershipsId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ProjectMembershipsByProjectIDQueryVariables,
  APITypes.ProjectMembershipsByProjectIDQuery
>;
export const projectMembershipsByPersonID = /* GraphQL */ `query ProjectMembershipsByPersonID(
  $personID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelProjectMembershipFilterInput
  $limit: Int
  $nextToken: String
) {
  projectMembershipsByPersonID(
    personID: $personID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      projectID
      personID
      roles
      isActive
      startDate
      endDate
      createdAt
      updatedAt
      personProjectMembershipsId
      projectMembershipsId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ProjectMembershipsByPersonIDQueryVariables,
  APITypes.ProjectMembershipsByPersonIDQuery
>;
export const projectsByCompanyID = /* GraphQL */ `query ProjectsByCompanyID(
  $companyID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelProjectFilterInput
  $limit: Int
  $nextToken: String
) {
  projectsByCompanyID(
    companyID: $companyID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      description
      startDate
      endDate
      companyID
      templateID
      createdAt
      updatedAt
      companyProjectsId
      projectTemplateProjectsId
      projectAddressId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ProjectsByCompanyIDQueryVariables,
  APITypes.ProjectsByCompanyIDQuery
>;
export const projectsByTemplateID = /* GraphQL */ `query ProjectsByTemplateID(
  $templateID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelProjectFilterInput
  $limit: Int
  $nextToken: String
) {
  projectsByTemplateID(
    templateID: $templateID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      description
      startDate
      endDate
      companyID
      templateID
      createdAt
      updatedAt
      companyProjectsId
      projectTemplateProjectsId
      projectAddressId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ProjectsByTemplateIDQueryVariables,
  APITypes.ProjectsByTemplateIDQuery
>;
export const scopeItemTagsByCompanyID = /* GraphQL */ `query ScopeItemTagsByCompanyID(
  $companyID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelScopeItemTagFilterInput
  $limit: Int
  $nextToken: String
) {
  scopeItemTagsByCompanyID(
    companyID: $companyID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      description
      companyID
      color
      createdAt
      updatedAt
      companyScopeItemTagsId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ScopeItemTagsByCompanyIDQueryVariables,
  APITypes.ScopeItemTagsByCompanyIDQuery
>;
export const templateScopeItemTagsByCompanyID = /* GraphQL */ `query TemplateScopeItemTagsByCompanyID(
  $companyID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelTemplateScopeItemTagFilterInput
  $limit: Int
  $nextToken: String
) {
  templateScopeItemTagsByCompanyID(
    companyID: $companyID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      description
      companyID
      projectTemplateID
      color
      createdAt
      updatedAt
      companyTemplateScopeItemTagsId
      projectTemplateTemplateScopeItemTagsId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.TemplateScopeItemTagsByCompanyIDQueryVariables,
  APITypes.TemplateScopeItemTagsByCompanyIDQuery
>;
export const templateScopeItemTagsByProjectTemplateID = /* GraphQL */ `query TemplateScopeItemTagsByProjectTemplateID(
  $projectTemplateID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelTemplateScopeItemTagFilterInput
  $limit: Int
  $nextToken: String
) {
  templateScopeItemTagsByProjectTemplateID(
    projectTemplateID: $projectTemplateID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      description
      companyID
      projectTemplateID
      color
      createdAt
      updatedAt
      companyTemplateScopeItemTagsId
      projectTemplateTemplateScopeItemTagsId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.TemplateScopeItemTagsByProjectTemplateIDQueryVariables,
  APITypes.TemplateScopeItemTagsByProjectTemplateIDQuery
>;
export const scopeItemGroupsByProjectID = /* GraphQL */ `query ScopeItemGroupsByProjectID(
  $projectID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelScopeItemGroupFilterInput
  $limit: Int
  $nextToken: String
) {
  scopeItemGroupsByProjectID(
    projectID: $projectID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      description
      projectID
      createdAt
      updatedAt
      projectScopeItemGroupsId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ScopeItemGroupsByProjectIDQueryVariables,
  APITypes.ScopeItemGroupsByProjectIDQuery
>;
export const scopeItemsByParentItemID = /* GraphQL */ `query ScopeItemsByParentItemID(
  $parentItemID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelScopeItemFilterInput
  $limit: Int
  $nextToken: String
) {
  scopeItemsByParentItemID(
    parentItemID: $parentItemID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      description
      category
      costEstimate
      spendEstimate
      durationEstimate
      isCompleted
      progress
      tags
      parentItemID
      projectID
      groupID
      createdAt
      updatedAt
      projectScopeItemsId
      scopeItemGroupScopeItemsId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ScopeItemsByParentItemIDQueryVariables,
  APITypes.ScopeItemsByParentItemIDQuery
>;
export const scopeItemsByProjectID = /* GraphQL */ `query ScopeItemsByProjectID(
  $projectID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelScopeItemFilterInput
  $limit: Int
  $nextToken: String
) {
  scopeItemsByProjectID(
    projectID: $projectID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      description
      category
      costEstimate
      spendEstimate
      durationEstimate
      isCompleted
      progress
      tags
      parentItemID
      projectID
      groupID
      createdAt
      updatedAt
      projectScopeItemsId
      scopeItemGroupScopeItemsId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ScopeItemsByProjectIDQueryVariables,
  APITypes.ScopeItemsByProjectIDQuery
>;
export const scopeItemsByGroupID = /* GraphQL */ `query ScopeItemsByGroupID(
  $groupID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelScopeItemFilterInput
  $limit: Int
  $nextToken: String
) {
  scopeItemsByGroupID(
    groupID: $groupID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      description
      category
      costEstimate
      spendEstimate
      durationEstimate
      isCompleted
      progress
      tags
      parentItemID
      projectID
      groupID
      createdAt
      updatedAt
      projectScopeItemsId
      scopeItemGroupScopeItemsId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ScopeItemsByGroupIDQueryVariables,
  APITypes.ScopeItemsByGroupIDQuery
>;
export const addressesByProjectID = /* GraphQL */ `query AddressesByProjectID(
  $projectID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelAddressFilterInput
  $limit: Int
  $nextToken: String
) {
  addressesByProjectID(
    projectID: $projectID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      street
      city
      state
      postalCode
      country
      projectID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.AddressesByProjectIDQueryVariables,
  APITypes.AddressesByProjectIDQuery
>;
export const projectFilesByUploadedByIDAndUploadedAt = /* GraphQL */ `query ProjectFilesByUploadedByIDAndUploadedAt(
  $uploadedByID: ID!
  $uploadedAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelProjectFileFilterInput
  $limit: Int
  $nextToken: String
) {
  projectFilesByUploadedByIDAndUploadedAt(
    uploadedByID: $uploadedByID
    uploadedAt: $uploadedAt
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      fileName
      fileType
      fileSize
      description
      uploadedByID
      uploadedAt
      projectID
      isPublic
      width
      height
      duration
      thumbnailKey
      createdAt
      updatedAt
      personUploadedFilesId
      projectFilesId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ProjectFilesByUploadedByIDAndUploadedAtQueryVariables,
  APITypes.ProjectFilesByUploadedByIDAndUploadedAtQuery
>;
export const projectFilesByProjectIDAndUploadedAt = /* GraphQL */ `query ProjectFilesByProjectIDAndUploadedAt(
  $projectID: ID!
  $uploadedAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelProjectFileFilterInput
  $limit: Int
  $nextToken: String
) {
  projectFilesByProjectIDAndUploadedAt(
    projectID: $projectID
    uploadedAt: $uploadedAt
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      fileName
      fileType
      fileSize
      description
      uploadedByID
      uploadedAt
      projectID
      isPublic
      width
      height
      duration
      thumbnailKey
      createdAt
      updatedAt
      personUploadedFilesId
      projectFilesId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ProjectFilesByProjectIDAndUploadedAtQueryVariables,
  APITypes.ProjectFilesByProjectIDAndUploadedAtQuery
>;
export const annotationsByProjectFileID = /* GraphQL */ `query AnnotationsByProjectFileID(
  $projectFileID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelAnnotationFilterInput
  $limit: Int
  $nextToken: String
) {
  annotationsByProjectFileID(
    projectFileID: $projectFileID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      pageNumber
      x
      y
      endX
      endY
      width
      height
      radius
      rotation
      strokeWidth
      strokeStyle
      color
      type
      text
      projectFileID
      createdAt
      createdByID
      updatedAt
      updatedByID
      projectFileAnnotationsId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.AnnotationsByProjectFileIDQueryVariables,
  APITypes.AnnotationsByProjectFileIDQuery
>;
export const annotationsByCreatedByID = /* GraphQL */ `query AnnotationsByCreatedByID(
  $createdByID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelAnnotationFilterInput
  $limit: Int
  $nextToken: String
) {
  annotationsByCreatedByID(
    createdByID: $createdByID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      pageNumber
      x
      y
      endX
      endY
      width
      height
      radius
      rotation
      strokeWidth
      strokeStyle
      color
      type
      text
      projectFileID
      createdAt
      createdByID
      updatedAt
      updatedByID
      projectFileAnnotationsId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.AnnotationsByCreatedByIDQueryVariables,
  APITypes.AnnotationsByCreatedByIDQuery
>;
export const annotationsByUpdatedByID = /* GraphQL */ `query AnnotationsByUpdatedByID(
  $updatedByID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelAnnotationFilterInput
  $limit: Int
  $nextToken: String
) {
  annotationsByUpdatedByID(
    updatedByID: $updatedByID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      pageNumber
      x
      y
      endX
      endY
      width
      height
      radius
      rotation
      strokeWidth
      strokeStyle
      color
      type
      text
      projectFileID
      createdAt
      createdByID
      updatedAt
      updatedByID
      projectFileAnnotationsId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.AnnotationsByUpdatedByIDQueryVariables,
  APITypes.AnnotationsByUpdatedByIDQuery
>;
export const notificationsByProjectID = /* GraphQL */ `query NotificationsByProjectID(
  $projectID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelNotificationFilterInput
  $limit: Int
  $nextToken: String
) {
  notificationsByProjectID(
    projectID: $projectID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      type
      messageTemplate
      status
      projectID
      createdAt
      updatedAt
      projectTemplateNotificationSettingsId
      projectNotificationsId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.NotificationsByProjectIDQueryVariables,
  APITypes.NotificationsByProjectIDQuery
>;
export const groupChatsByCompanyID = /* GraphQL */ `query GroupChatsByCompanyID(
  $companyID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelGroupChatFilterInput
  $limit: Int
  $nextToken: String
) {
  groupChatsByCompanyID(
    companyID: $companyID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      chatType
      createdAt
      updatedAt
      status
      isDeleted
      messageLimit
      lastMessageAt
      companyID
      projectID
      scopeItemID
      companyChatsId
      projectChatsId
      scopeItemChatsId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GroupChatsByCompanyIDQueryVariables,
  APITypes.GroupChatsByCompanyIDQuery
>;
export const groupChatsByProjectID = /* GraphQL */ `query GroupChatsByProjectID(
  $projectID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelGroupChatFilterInput
  $limit: Int
  $nextToken: String
) {
  groupChatsByProjectID(
    projectID: $projectID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      chatType
      createdAt
      updatedAt
      status
      isDeleted
      messageLimit
      lastMessageAt
      companyID
      projectID
      scopeItemID
      companyChatsId
      projectChatsId
      scopeItemChatsId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GroupChatsByProjectIDQueryVariables,
  APITypes.GroupChatsByProjectIDQuery
>;
export const groupChatsByScopeItemID = /* GraphQL */ `query GroupChatsByScopeItemID(
  $scopeItemID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelGroupChatFilterInput
  $limit: Int
  $nextToken: String
) {
  groupChatsByScopeItemID(
    scopeItemID: $scopeItemID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      chatType
      createdAt
      updatedAt
      status
      isDeleted
      messageLimit
      lastMessageAt
      companyID
      projectID
      scopeItemID
      companyChatsId
      projectChatsId
      scopeItemChatsId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GroupChatsByScopeItemIDQueryVariables,
  APITypes.GroupChatsByScopeItemIDQuery
>;
export const groupChatMessagesByChatIDAndTimestamp = /* GraphQL */ `query GroupChatMessagesByChatIDAndTimestamp(
  $chatID: ID!
  $timestamp: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelGroupChatMessageFilterInput
  $limit: Int
  $nextToken: String
) {
  groupChatMessagesByChatIDAndTimestamp(
    chatID: $chatID
    timestamp: $timestamp
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      content
      chatID
      senderID
      timestamp
      isEdited
      editedAt
      createdAt
      updatedAt
      personSentMessagesId
      groupChatMessagesId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GroupChatMessagesByChatIDAndTimestampQueryVariables,
  APITypes.GroupChatMessagesByChatIDAndTimestampQuery
>;
export const groupChatMessagesBySenderID = /* GraphQL */ `query GroupChatMessagesBySenderID(
  $senderID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelGroupChatMessageFilterInput
  $limit: Int
  $nextToken: String
) {
  groupChatMessagesBySenderID(
    senderID: $senderID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      content
      chatID
      senderID
      timestamp
      isEdited
      editedAt
      createdAt
      updatedAt
      personSentMessagesId
      groupChatMessagesId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GroupChatMessagesBySenderIDQueryVariables,
  APITypes.GroupChatMessagesBySenderIDQuery
>;
export const chatAttachmentsByMessageID = /* GraphQL */ `query ChatAttachmentsByMessageID(
  $messageID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelChatAttachmentFilterInput
  $limit: Int
  $nextToken: String
) {
  chatAttachmentsByMessageID(
    messageID: $messageID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      fileName
      fileType
      fileSize
      uploadedAt
      width
      height
      duration
      thumbnailKey
      messageID
      createdAt
      updatedAt
      groupChatMessageAttachmentsId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ChatAttachmentsByMessageIDQueryVariables,
  APITypes.ChatAttachmentsByMessageIDQuery
>;
export const personCompaniesByPersonId = /* GraphQL */ `query PersonCompaniesByPersonId(
  $personId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelPersonCompaniesFilterInput
  $limit: Int
  $nextToken: String
) {
  personCompaniesByPersonId(
    personId: $personId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      personId
      companyId
      createdAt
      updatedAt
      cognitoUsername
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.PersonCompaniesByPersonIdQueryVariables,
  APITypes.PersonCompaniesByPersonIdQuery
>;
export const personCompaniesByCompanyId = /* GraphQL */ `query PersonCompaniesByCompanyId(
  $companyId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelPersonCompaniesFilterInput
  $limit: Int
  $nextToken: String
) {
  personCompaniesByCompanyId(
    companyId: $companyId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      personId
      companyId
      createdAt
      updatedAt
      cognitoUsername
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.PersonCompaniesByCompanyIdQueryVariables,
  APITypes.PersonCompaniesByCompanyIdQuery
>;
export const projectPeopleByPersonId = /* GraphQL */ `query ProjectPeopleByPersonId(
  $personId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelProjectPeopleFilterInput
  $limit: Int
  $nextToken: String
) {
  projectPeopleByPersonId(
    personId: $personId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      personId
      projectId
      createdAt
      updatedAt
      cognitoUsername
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ProjectPeopleByPersonIdQueryVariables,
  APITypes.ProjectPeopleByPersonIdQuery
>;
export const projectPeopleByProjectId = /* GraphQL */ `query ProjectPeopleByProjectId(
  $projectId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelProjectPeopleFilterInput
  $limit: Int
  $nextToken: String
) {
  projectPeopleByProjectId(
    projectId: $projectId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      personId
      projectId
      createdAt
      updatedAt
      cognitoUsername
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ProjectPeopleByProjectIdQueryVariables,
  APITypes.ProjectPeopleByProjectIdQuery
>;
export const chatParticipantsByPersonId = /* GraphQL */ `query ChatParticipantsByPersonId(
  $personId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelChatParticipantsFilterInput
  $limit: Int
  $nextToken: String
) {
  chatParticipantsByPersonId(
    personId: $personId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      personId
      groupChatId
      createdAt
      updatedAt
      cognitoUsername
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ChatParticipantsByPersonIdQueryVariables,
  APITypes.ChatParticipantsByPersonIdQuery
>;
export const chatParticipantsByGroupChatId = /* GraphQL */ `query ChatParticipantsByGroupChatId(
  $groupChatId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelChatParticipantsFilterInput
  $limit: Int
  $nextToken: String
) {
  chatParticipantsByGroupChatId(
    groupChatId: $groupChatId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      personId
      groupChatId
      createdAt
      updatedAt
      cognitoUsername
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ChatParticipantsByGroupChatIdQueryVariables,
  APITypes.ChatParticipantsByGroupChatIdQuery
>;
export const projectFileTagsByTagId = /* GraphQL */ `query ProjectFileTagsByTagId(
  $tagId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelProjectFileTagFilterInput
  $limit: Int
  $nextToken: String
) {
  projectFileTagsByTagId(
    tagId: $tagId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      tagId
      projectFileId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ProjectFileTagsByTagIdQueryVariables,
  APITypes.ProjectFileTagsByTagIdQuery
>;
export const projectFileTagsByProjectFileId = /* GraphQL */ `query ProjectFileTagsByProjectFileId(
  $projectFileId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelProjectFileTagFilterInput
  $limit: Int
  $nextToken: String
) {
  projectFileTagsByProjectFileId(
    projectFileId: $projectFileId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      tagId
      projectFileId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ProjectFileTagsByProjectFileIdQueryVariables,
  APITypes.ProjectFileTagsByProjectFileIdQuery
>;
