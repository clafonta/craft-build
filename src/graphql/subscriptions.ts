/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreatePerson = /* GraphQL */ `subscription OnCreatePerson(
  $filter: ModelSubscriptionPersonFilterInput
  $cognitoUsername: String
) {
  onCreatePerson(filter: $filter, cognitoUsername: $cognitoUsername) {
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
` as GeneratedSubscription<
  APITypes.OnCreatePersonSubscriptionVariables,
  APITypes.OnCreatePersonSubscription
>;
export const onUpdatePerson = /* GraphQL */ `subscription OnUpdatePerson(
  $filter: ModelSubscriptionPersonFilterInput
  $cognitoUsername: String
) {
  onUpdatePerson(filter: $filter, cognitoUsername: $cognitoUsername) {
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
` as GeneratedSubscription<
  APITypes.OnUpdatePersonSubscriptionVariables,
  APITypes.OnUpdatePersonSubscription
>;
export const onDeletePerson = /* GraphQL */ `subscription OnDeletePerson(
  $filter: ModelSubscriptionPersonFilterInput
  $cognitoUsername: String
) {
  onDeletePerson(filter: $filter, cognitoUsername: $cognitoUsername) {
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
` as GeneratedSubscription<
  APITypes.OnDeletePersonSubscriptionVariables,
  APITypes.OnDeletePersonSubscription
>;
export const onCreatePersonCompanyRole = /* GraphQL */ `subscription OnCreatePersonCompanyRole(
  $filter: ModelSubscriptionPersonCompanyRoleFilterInput
) {
  onCreatePersonCompanyRole(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreatePersonCompanyRoleSubscriptionVariables,
  APITypes.OnCreatePersonCompanyRoleSubscription
>;
export const onUpdatePersonCompanyRole = /* GraphQL */ `subscription OnUpdatePersonCompanyRole(
  $filter: ModelSubscriptionPersonCompanyRoleFilterInput
) {
  onUpdatePersonCompanyRole(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdatePersonCompanyRoleSubscriptionVariables,
  APITypes.OnUpdatePersonCompanyRoleSubscription
>;
export const onDeletePersonCompanyRole = /* GraphQL */ `subscription OnDeletePersonCompanyRole(
  $filter: ModelSubscriptionPersonCompanyRoleFilterInput
) {
  onDeletePersonCompanyRole(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeletePersonCompanyRoleSubscriptionVariables,
  APITypes.OnDeletePersonCompanyRoleSubscription
>;
export const onCreateCompany = /* GraphQL */ `subscription OnCreateCompany($filter: ModelSubscriptionCompanyFilterInput) {
  onCreateCompany(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateCompanySubscriptionVariables,
  APITypes.OnCreateCompanySubscription
>;
export const onUpdateCompany = /* GraphQL */ `subscription OnUpdateCompany($filter: ModelSubscriptionCompanyFilterInput) {
  onUpdateCompany(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateCompanySubscriptionVariables,
  APITypes.OnUpdateCompanySubscription
>;
export const onDeleteCompany = /* GraphQL */ `subscription OnDeleteCompany($filter: ModelSubscriptionCompanyFilterInput) {
  onDeleteCompany(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteCompanySubscriptionVariables,
  APITypes.OnDeleteCompanySubscription
>;
export const onCreateProjectTemplate = /* GraphQL */ `subscription OnCreateProjectTemplate(
  $filter: ModelSubscriptionProjectTemplateFilterInput
) {
  onCreateProjectTemplate(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateProjectTemplateSubscriptionVariables,
  APITypes.OnCreateProjectTemplateSubscription
>;
export const onUpdateProjectTemplate = /* GraphQL */ `subscription OnUpdateProjectTemplate(
  $filter: ModelSubscriptionProjectTemplateFilterInput
) {
  onUpdateProjectTemplate(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateProjectTemplateSubscriptionVariables,
  APITypes.OnUpdateProjectTemplateSubscription
>;
export const onDeleteProjectTemplate = /* GraphQL */ `subscription OnDeleteProjectTemplate(
  $filter: ModelSubscriptionProjectTemplateFilterInput
) {
  onDeleteProjectTemplate(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteProjectTemplateSubscriptionVariables,
  APITypes.OnDeleteProjectTemplateSubscription
>;
export const onCreateTemplateScopeItem = /* GraphQL */ `subscription OnCreateTemplateScopeItem(
  $filter: ModelSubscriptionTemplateScopeItemFilterInput
) {
  onCreateTemplateScopeItem(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateTemplateScopeItemSubscriptionVariables,
  APITypes.OnCreateTemplateScopeItemSubscription
>;
export const onUpdateTemplateScopeItem = /* GraphQL */ `subscription OnUpdateTemplateScopeItem(
  $filter: ModelSubscriptionTemplateScopeItemFilterInput
) {
  onUpdateTemplateScopeItem(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateTemplateScopeItemSubscriptionVariables,
  APITypes.OnUpdateTemplateScopeItemSubscription
>;
export const onDeleteTemplateScopeItem = /* GraphQL */ `subscription OnDeleteTemplateScopeItem(
  $filter: ModelSubscriptionTemplateScopeItemFilterInput
) {
  onDeleteTemplateScopeItem(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteTemplateScopeItemSubscriptionVariables,
  APITypes.OnDeleteTemplateScopeItemSubscription
>;
export const onCreateProject = /* GraphQL */ `subscription OnCreateProject($filter: ModelSubscriptionProjectFilterInput) {
  onCreateProject(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateProjectSubscriptionVariables,
  APITypes.OnCreateProjectSubscription
>;
export const onUpdateProject = /* GraphQL */ `subscription OnUpdateProject($filter: ModelSubscriptionProjectFilterInput) {
  onUpdateProject(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateProjectSubscriptionVariables,
  APITypes.OnUpdateProjectSubscription
>;
export const onDeleteProject = /* GraphQL */ `subscription OnDeleteProject($filter: ModelSubscriptionProjectFilterInput) {
  onDeleteProject(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteProjectSubscriptionVariables,
  APITypes.OnDeleteProjectSubscription
>;
export const onCreateScopeItemTag = /* GraphQL */ `subscription OnCreateScopeItemTag(
  $filter: ModelSubscriptionScopeItemTagFilterInput
) {
  onCreateScopeItemTag(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateScopeItemTagSubscriptionVariables,
  APITypes.OnCreateScopeItemTagSubscription
>;
export const onUpdateScopeItemTag = /* GraphQL */ `subscription OnUpdateScopeItemTag(
  $filter: ModelSubscriptionScopeItemTagFilterInput
) {
  onUpdateScopeItemTag(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateScopeItemTagSubscriptionVariables,
  APITypes.OnUpdateScopeItemTagSubscription
>;
export const onDeleteScopeItemTag = /* GraphQL */ `subscription OnDeleteScopeItemTag(
  $filter: ModelSubscriptionScopeItemTagFilterInput
) {
  onDeleteScopeItemTag(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteScopeItemTagSubscriptionVariables,
  APITypes.OnDeleteScopeItemTagSubscription
>;
export const onCreateTemplateScopeItemTag = /* GraphQL */ `subscription OnCreateTemplateScopeItemTag(
  $filter: ModelSubscriptionTemplateScopeItemTagFilterInput
) {
  onCreateTemplateScopeItemTag(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateTemplateScopeItemTagSubscriptionVariables,
  APITypes.OnCreateTemplateScopeItemTagSubscription
>;
export const onUpdateTemplateScopeItemTag = /* GraphQL */ `subscription OnUpdateTemplateScopeItemTag(
  $filter: ModelSubscriptionTemplateScopeItemTagFilterInput
) {
  onUpdateTemplateScopeItemTag(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateTemplateScopeItemTagSubscriptionVariables,
  APITypes.OnUpdateTemplateScopeItemTagSubscription
>;
export const onDeleteTemplateScopeItemTag = /* GraphQL */ `subscription OnDeleteTemplateScopeItemTag(
  $filter: ModelSubscriptionTemplateScopeItemTagFilterInput
) {
  onDeleteTemplateScopeItemTag(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteTemplateScopeItemTagSubscriptionVariables,
  APITypes.OnDeleteTemplateScopeItemTagSubscription
>;
export const onCreateScopeItemGroup = /* GraphQL */ `subscription OnCreateScopeItemGroup(
  $filter: ModelSubscriptionScopeItemGroupFilterInput
) {
  onCreateScopeItemGroup(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateScopeItemGroupSubscriptionVariables,
  APITypes.OnCreateScopeItemGroupSubscription
>;
export const onUpdateScopeItemGroup = /* GraphQL */ `subscription OnUpdateScopeItemGroup(
  $filter: ModelSubscriptionScopeItemGroupFilterInput
) {
  onUpdateScopeItemGroup(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateScopeItemGroupSubscriptionVariables,
  APITypes.OnUpdateScopeItemGroupSubscription
>;
export const onDeleteScopeItemGroup = /* GraphQL */ `subscription OnDeleteScopeItemGroup(
  $filter: ModelSubscriptionScopeItemGroupFilterInput
) {
  onDeleteScopeItemGroup(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteScopeItemGroupSubscriptionVariables,
  APITypes.OnDeleteScopeItemGroupSubscription
>;
export const onCreateScopeItem = /* GraphQL */ `subscription OnCreateScopeItem($filter: ModelSubscriptionScopeItemFilterInput) {
  onCreateScopeItem(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateScopeItemSubscriptionVariables,
  APITypes.OnCreateScopeItemSubscription
>;
export const onUpdateScopeItem = /* GraphQL */ `subscription OnUpdateScopeItem($filter: ModelSubscriptionScopeItemFilterInput) {
  onUpdateScopeItem(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateScopeItemSubscriptionVariables,
  APITypes.OnUpdateScopeItemSubscription
>;
export const onDeleteScopeItem = /* GraphQL */ `subscription OnDeleteScopeItem($filter: ModelSubscriptionScopeItemFilterInput) {
  onDeleteScopeItem(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteScopeItemSubscriptionVariables,
  APITypes.OnDeleteScopeItemSubscription
>;
export const onCreateAddress = /* GraphQL */ `subscription OnCreateAddress($filter: ModelSubscriptionAddressFilterInput) {
  onCreateAddress(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateAddressSubscriptionVariables,
  APITypes.OnCreateAddressSubscription
>;
export const onUpdateAddress = /* GraphQL */ `subscription OnUpdateAddress($filter: ModelSubscriptionAddressFilterInput) {
  onUpdateAddress(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateAddressSubscriptionVariables,
  APITypes.OnUpdateAddressSubscription
>;
export const onDeleteAddress = /* GraphQL */ `subscription OnDeleteAddress($filter: ModelSubscriptionAddressFilterInput) {
  onDeleteAddress(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteAddressSubscriptionVariables,
  APITypes.OnDeleteAddressSubscription
>;
export const onCreateTag = /* GraphQL */ `subscription OnCreateTag($filter: ModelSubscriptionTagFilterInput) {
  onCreateTag(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateTagSubscriptionVariables,
  APITypes.OnCreateTagSubscription
>;
export const onUpdateTag = /* GraphQL */ `subscription OnUpdateTag($filter: ModelSubscriptionTagFilterInput) {
  onUpdateTag(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateTagSubscriptionVariables,
  APITypes.OnUpdateTagSubscription
>;
export const onDeleteTag = /* GraphQL */ `subscription OnDeleteTag($filter: ModelSubscriptionTagFilterInput) {
  onDeleteTag(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteTagSubscriptionVariables,
  APITypes.OnDeleteTagSubscription
>;
export const onCreateProjectFile = /* GraphQL */ `subscription OnCreateProjectFile(
  $filter: ModelSubscriptionProjectFileFilterInput
) {
  onCreateProjectFile(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateProjectFileSubscriptionVariables,
  APITypes.OnCreateProjectFileSubscription
>;
export const onUpdateProjectFile = /* GraphQL */ `subscription OnUpdateProjectFile(
  $filter: ModelSubscriptionProjectFileFilterInput
) {
  onUpdateProjectFile(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateProjectFileSubscriptionVariables,
  APITypes.OnUpdateProjectFileSubscription
>;
export const onDeleteProjectFile = /* GraphQL */ `subscription OnDeleteProjectFile(
  $filter: ModelSubscriptionProjectFileFilterInput
) {
  onDeleteProjectFile(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteProjectFileSubscriptionVariables,
  APITypes.OnDeleteProjectFileSubscription
>;
export const onCreateAnnotation = /* GraphQL */ `subscription OnCreateAnnotation(
  $filter: ModelSubscriptionAnnotationFilterInput
) {
  onCreateAnnotation(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateAnnotationSubscriptionVariables,
  APITypes.OnCreateAnnotationSubscription
>;
export const onUpdateAnnotation = /* GraphQL */ `subscription OnUpdateAnnotation(
  $filter: ModelSubscriptionAnnotationFilterInput
) {
  onUpdateAnnotation(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateAnnotationSubscriptionVariables,
  APITypes.OnUpdateAnnotationSubscription
>;
export const onDeleteAnnotation = /* GraphQL */ `subscription OnDeleteAnnotation(
  $filter: ModelSubscriptionAnnotationFilterInput
) {
  onDeleteAnnotation(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteAnnotationSubscriptionVariables,
  APITypes.OnDeleteAnnotationSubscription
>;
export const onCreateNotification = /* GraphQL */ `subscription OnCreateNotification(
  $filter: ModelSubscriptionNotificationFilterInput
) {
  onCreateNotification(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateNotificationSubscriptionVariables,
  APITypes.OnCreateNotificationSubscription
>;
export const onUpdateNotification = /* GraphQL */ `subscription OnUpdateNotification(
  $filter: ModelSubscriptionNotificationFilterInput
) {
  onUpdateNotification(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateNotificationSubscriptionVariables,
  APITypes.OnUpdateNotificationSubscription
>;
export const onDeleteNotification = /* GraphQL */ `subscription OnDeleteNotification(
  $filter: ModelSubscriptionNotificationFilterInput
) {
  onDeleteNotification(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteNotificationSubscriptionVariables,
  APITypes.OnDeleteNotificationSubscription
>;
export const onCreateGroupChat = /* GraphQL */ `subscription OnCreateGroupChat($filter: ModelSubscriptionGroupChatFilterInput) {
  onCreateGroupChat(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateGroupChatSubscriptionVariables,
  APITypes.OnCreateGroupChatSubscription
>;
export const onUpdateGroupChat = /* GraphQL */ `subscription OnUpdateGroupChat($filter: ModelSubscriptionGroupChatFilterInput) {
  onUpdateGroupChat(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateGroupChatSubscriptionVariables,
  APITypes.OnUpdateGroupChatSubscription
>;
export const onDeleteGroupChat = /* GraphQL */ `subscription OnDeleteGroupChat($filter: ModelSubscriptionGroupChatFilterInput) {
  onDeleteGroupChat(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteGroupChatSubscriptionVariables,
  APITypes.OnDeleteGroupChatSubscription
>;
export const onCreateGroupChatMessage = /* GraphQL */ `subscription OnCreateGroupChatMessage(
  $filter: ModelSubscriptionGroupChatMessageFilterInput
) {
  onCreateGroupChatMessage(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateGroupChatMessageSubscriptionVariables,
  APITypes.OnCreateGroupChatMessageSubscription
>;
export const onUpdateGroupChatMessage = /* GraphQL */ `subscription OnUpdateGroupChatMessage(
  $filter: ModelSubscriptionGroupChatMessageFilterInput
) {
  onUpdateGroupChatMessage(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateGroupChatMessageSubscriptionVariables,
  APITypes.OnUpdateGroupChatMessageSubscription
>;
export const onDeleteGroupChatMessage = /* GraphQL */ `subscription OnDeleteGroupChatMessage(
  $filter: ModelSubscriptionGroupChatMessageFilterInput
) {
  onDeleteGroupChatMessage(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteGroupChatMessageSubscriptionVariables,
  APITypes.OnDeleteGroupChatMessageSubscription
>;
export const onCreateChatAttachment = /* GraphQL */ `subscription OnCreateChatAttachment(
  $filter: ModelSubscriptionChatAttachmentFilterInput
) {
  onCreateChatAttachment(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateChatAttachmentSubscriptionVariables,
  APITypes.OnCreateChatAttachmentSubscription
>;
export const onUpdateChatAttachment = /* GraphQL */ `subscription OnUpdateChatAttachment(
  $filter: ModelSubscriptionChatAttachmentFilterInput
) {
  onUpdateChatAttachment(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateChatAttachmentSubscriptionVariables,
  APITypes.OnUpdateChatAttachmentSubscription
>;
export const onDeleteChatAttachment = /* GraphQL */ `subscription OnDeleteChatAttachment(
  $filter: ModelSubscriptionChatAttachmentFilterInput
) {
  onDeleteChatAttachment(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteChatAttachmentSubscriptionVariables,
  APITypes.OnDeleteChatAttachmentSubscription
>;
export const onCreatePersonCompanies = /* GraphQL */ `subscription OnCreatePersonCompanies(
  $filter: ModelSubscriptionPersonCompaniesFilterInput
  $cognitoUsername: String
) {
  onCreatePersonCompanies(filter: $filter, cognitoUsername: $cognitoUsername) {
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
` as GeneratedSubscription<
  APITypes.OnCreatePersonCompaniesSubscriptionVariables,
  APITypes.OnCreatePersonCompaniesSubscription
>;
export const onUpdatePersonCompanies = /* GraphQL */ `subscription OnUpdatePersonCompanies(
  $filter: ModelSubscriptionPersonCompaniesFilterInput
  $cognitoUsername: String
) {
  onUpdatePersonCompanies(filter: $filter, cognitoUsername: $cognitoUsername) {
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
` as GeneratedSubscription<
  APITypes.OnUpdatePersonCompaniesSubscriptionVariables,
  APITypes.OnUpdatePersonCompaniesSubscription
>;
export const onDeletePersonCompanies = /* GraphQL */ `subscription OnDeletePersonCompanies(
  $filter: ModelSubscriptionPersonCompaniesFilterInput
  $cognitoUsername: String
) {
  onDeletePersonCompanies(filter: $filter, cognitoUsername: $cognitoUsername) {
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
` as GeneratedSubscription<
  APITypes.OnDeletePersonCompaniesSubscriptionVariables,
  APITypes.OnDeletePersonCompaniesSubscription
>;
export const onCreateProjectPeople = /* GraphQL */ `subscription OnCreateProjectPeople(
  $filter: ModelSubscriptionProjectPeopleFilterInput
  $cognitoUsername: String
) {
  onCreateProjectPeople(filter: $filter, cognitoUsername: $cognitoUsername) {
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
` as GeneratedSubscription<
  APITypes.OnCreateProjectPeopleSubscriptionVariables,
  APITypes.OnCreateProjectPeopleSubscription
>;
export const onUpdateProjectPeople = /* GraphQL */ `subscription OnUpdateProjectPeople(
  $filter: ModelSubscriptionProjectPeopleFilterInput
  $cognitoUsername: String
) {
  onUpdateProjectPeople(filter: $filter, cognitoUsername: $cognitoUsername) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateProjectPeopleSubscriptionVariables,
  APITypes.OnUpdateProjectPeopleSubscription
>;
export const onDeleteProjectPeople = /* GraphQL */ `subscription OnDeleteProjectPeople(
  $filter: ModelSubscriptionProjectPeopleFilterInput
  $cognitoUsername: String
) {
  onDeleteProjectPeople(filter: $filter, cognitoUsername: $cognitoUsername) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteProjectPeopleSubscriptionVariables,
  APITypes.OnDeleteProjectPeopleSubscription
>;
export const onCreateChatParticipants = /* GraphQL */ `subscription OnCreateChatParticipants(
  $filter: ModelSubscriptionChatParticipantsFilterInput
  $cognitoUsername: String
) {
  onCreateChatParticipants(filter: $filter, cognitoUsername: $cognitoUsername) {
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
` as GeneratedSubscription<
  APITypes.OnCreateChatParticipantsSubscriptionVariables,
  APITypes.OnCreateChatParticipantsSubscription
>;
export const onUpdateChatParticipants = /* GraphQL */ `subscription OnUpdateChatParticipants(
  $filter: ModelSubscriptionChatParticipantsFilterInput
  $cognitoUsername: String
) {
  onUpdateChatParticipants(filter: $filter, cognitoUsername: $cognitoUsername) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateChatParticipantsSubscriptionVariables,
  APITypes.OnUpdateChatParticipantsSubscription
>;
export const onDeleteChatParticipants = /* GraphQL */ `subscription OnDeleteChatParticipants(
  $filter: ModelSubscriptionChatParticipantsFilterInput
  $cognitoUsername: String
) {
  onDeleteChatParticipants(filter: $filter, cognitoUsername: $cognitoUsername) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteChatParticipantsSubscriptionVariables,
  APITypes.OnDeleteChatParticipantsSubscription
>;
export const onCreateProjectFileTag = /* GraphQL */ `subscription OnCreateProjectFileTag(
  $filter: ModelSubscriptionProjectFileTagFilterInput
) {
  onCreateProjectFileTag(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateProjectFileTagSubscriptionVariables,
  APITypes.OnCreateProjectFileTagSubscription
>;
export const onUpdateProjectFileTag = /* GraphQL */ `subscription OnUpdateProjectFileTag(
  $filter: ModelSubscriptionProjectFileTagFilterInput
) {
  onUpdateProjectFileTag(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateProjectFileTagSubscriptionVariables,
  APITypes.OnUpdateProjectFileTagSubscription
>;
export const onDeleteProjectFileTag = /* GraphQL */ `subscription OnDeleteProjectFileTag(
  $filter: ModelSubscriptionProjectFileTagFilterInput
) {
  onDeleteProjectFileTag(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteProjectFileTagSubscriptionVariables,
  APITypes.OnDeleteProjectFileTagSubscription
>;
