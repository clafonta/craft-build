/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createPerson = /* GraphQL */ `mutation CreatePerson(
  $input: CreatePersonInput!
  $condition: ModelPersonConditionInput
) {
  createPerson(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreatePersonMutationVariables,
  APITypes.CreatePersonMutation
>;
export const updatePerson = /* GraphQL */ `mutation UpdatePerson(
  $input: UpdatePersonInput!
  $condition: ModelPersonConditionInput
) {
  updatePerson(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdatePersonMutationVariables,
  APITypes.UpdatePersonMutation
>;
export const deletePerson = /* GraphQL */ `mutation DeletePerson(
  $input: DeletePersonInput!
  $condition: ModelPersonConditionInput
) {
  deletePerson(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeletePersonMutationVariables,
  APITypes.DeletePersonMutation
>;
export const createPersonCompanyRole = /* GraphQL */ `mutation CreatePersonCompanyRole(
  $input: CreatePersonCompanyRoleInput!
  $condition: ModelPersonCompanyRoleConditionInput
) {
  createPersonCompanyRole(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreatePersonCompanyRoleMutationVariables,
  APITypes.CreatePersonCompanyRoleMutation
>;
export const updatePersonCompanyRole = /* GraphQL */ `mutation UpdatePersonCompanyRole(
  $input: UpdatePersonCompanyRoleInput!
  $condition: ModelPersonCompanyRoleConditionInput
) {
  updatePersonCompanyRole(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdatePersonCompanyRoleMutationVariables,
  APITypes.UpdatePersonCompanyRoleMutation
>;
export const deletePersonCompanyRole = /* GraphQL */ `mutation DeletePersonCompanyRole(
  $input: DeletePersonCompanyRoleInput!
  $condition: ModelPersonCompanyRoleConditionInput
) {
  deletePersonCompanyRole(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeletePersonCompanyRoleMutationVariables,
  APITypes.DeletePersonCompanyRoleMutation
>;
export const createCompany = /* GraphQL */ `mutation CreateCompany(
  $input: CreateCompanyInput!
  $condition: ModelCompanyConditionInput
) {
  createCompany(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateCompanyMutationVariables,
  APITypes.CreateCompanyMutation
>;
export const updateCompany = /* GraphQL */ `mutation UpdateCompany(
  $input: UpdateCompanyInput!
  $condition: ModelCompanyConditionInput
) {
  updateCompany(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateCompanyMutationVariables,
  APITypes.UpdateCompanyMutation
>;
export const deleteCompany = /* GraphQL */ `mutation DeleteCompany(
  $input: DeleteCompanyInput!
  $condition: ModelCompanyConditionInput
) {
  deleteCompany(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteCompanyMutationVariables,
  APITypes.DeleteCompanyMutation
>;
export const createProjectTemplate = /* GraphQL */ `mutation CreateProjectTemplate(
  $input: CreateProjectTemplateInput!
  $condition: ModelProjectTemplateConditionInput
) {
  createProjectTemplate(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateProjectTemplateMutationVariables,
  APITypes.CreateProjectTemplateMutation
>;
export const updateProjectTemplate = /* GraphQL */ `mutation UpdateProjectTemplate(
  $input: UpdateProjectTemplateInput!
  $condition: ModelProjectTemplateConditionInput
) {
  updateProjectTemplate(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateProjectTemplateMutationVariables,
  APITypes.UpdateProjectTemplateMutation
>;
export const deleteProjectTemplate = /* GraphQL */ `mutation DeleteProjectTemplate(
  $input: DeleteProjectTemplateInput!
  $condition: ModelProjectTemplateConditionInput
) {
  deleteProjectTemplate(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteProjectTemplateMutationVariables,
  APITypes.DeleteProjectTemplateMutation
>;
export const createTemplateScopeItem = /* GraphQL */ `mutation CreateTemplateScopeItem(
  $input: CreateTemplateScopeItemInput!
  $condition: ModelTemplateScopeItemConditionInput
) {
  createTemplateScopeItem(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateTemplateScopeItemMutationVariables,
  APITypes.CreateTemplateScopeItemMutation
>;
export const updateTemplateScopeItem = /* GraphQL */ `mutation UpdateTemplateScopeItem(
  $input: UpdateTemplateScopeItemInput!
  $condition: ModelTemplateScopeItemConditionInput
) {
  updateTemplateScopeItem(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateTemplateScopeItemMutationVariables,
  APITypes.UpdateTemplateScopeItemMutation
>;
export const deleteTemplateScopeItem = /* GraphQL */ `mutation DeleteTemplateScopeItem(
  $input: DeleteTemplateScopeItemInput!
  $condition: ModelTemplateScopeItemConditionInput
) {
  deleteTemplateScopeItem(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteTemplateScopeItemMutationVariables,
  APITypes.DeleteTemplateScopeItemMutation
>;
export const createProjectMembership = /* GraphQL */ `mutation CreateProjectMembership(
  $input: CreateProjectMembershipInput!
  $condition: ModelProjectMembershipConditionInput
) {
  createProjectMembership(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateProjectMembershipMutationVariables,
  APITypes.CreateProjectMembershipMutation
>;
export const updateProjectMembership = /* GraphQL */ `mutation UpdateProjectMembership(
  $input: UpdateProjectMembershipInput!
  $condition: ModelProjectMembershipConditionInput
) {
  updateProjectMembership(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateProjectMembershipMutationVariables,
  APITypes.UpdateProjectMembershipMutation
>;
export const deleteProjectMembership = /* GraphQL */ `mutation DeleteProjectMembership(
  $input: DeleteProjectMembershipInput!
  $condition: ModelProjectMembershipConditionInput
) {
  deleteProjectMembership(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteProjectMembershipMutationVariables,
  APITypes.DeleteProjectMembershipMutation
>;
export const createProject = /* GraphQL */ `mutation CreateProject(
  $input: CreateProjectInput!
  $condition: ModelProjectConditionInput
) {
  createProject(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateProjectMutationVariables,
  APITypes.CreateProjectMutation
>;
export const updateProject = /* GraphQL */ `mutation UpdateProject(
  $input: UpdateProjectInput!
  $condition: ModelProjectConditionInput
) {
  updateProject(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateProjectMutationVariables,
  APITypes.UpdateProjectMutation
>;
export const deleteProject = /* GraphQL */ `mutation DeleteProject(
  $input: DeleteProjectInput!
  $condition: ModelProjectConditionInput
) {
  deleteProject(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteProjectMutationVariables,
  APITypes.DeleteProjectMutation
>;
export const createScopeItemTag = /* GraphQL */ `mutation CreateScopeItemTag(
  $input: CreateScopeItemTagInput!
  $condition: ModelScopeItemTagConditionInput
) {
  createScopeItemTag(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateScopeItemTagMutationVariables,
  APITypes.CreateScopeItemTagMutation
>;
export const updateScopeItemTag = /* GraphQL */ `mutation UpdateScopeItemTag(
  $input: UpdateScopeItemTagInput!
  $condition: ModelScopeItemTagConditionInput
) {
  updateScopeItemTag(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateScopeItemTagMutationVariables,
  APITypes.UpdateScopeItemTagMutation
>;
export const deleteScopeItemTag = /* GraphQL */ `mutation DeleteScopeItemTag(
  $input: DeleteScopeItemTagInput!
  $condition: ModelScopeItemTagConditionInput
) {
  deleteScopeItemTag(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteScopeItemTagMutationVariables,
  APITypes.DeleteScopeItemTagMutation
>;
export const createTemplateScopeItemTag = /* GraphQL */ `mutation CreateTemplateScopeItemTag(
  $input: CreateTemplateScopeItemTagInput!
  $condition: ModelTemplateScopeItemTagConditionInput
) {
  createTemplateScopeItemTag(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateTemplateScopeItemTagMutationVariables,
  APITypes.CreateTemplateScopeItemTagMutation
>;
export const updateTemplateScopeItemTag = /* GraphQL */ `mutation UpdateTemplateScopeItemTag(
  $input: UpdateTemplateScopeItemTagInput!
  $condition: ModelTemplateScopeItemTagConditionInput
) {
  updateTemplateScopeItemTag(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateTemplateScopeItemTagMutationVariables,
  APITypes.UpdateTemplateScopeItemTagMutation
>;
export const deleteTemplateScopeItemTag = /* GraphQL */ `mutation DeleteTemplateScopeItemTag(
  $input: DeleteTemplateScopeItemTagInput!
  $condition: ModelTemplateScopeItemTagConditionInput
) {
  deleteTemplateScopeItemTag(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteTemplateScopeItemTagMutationVariables,
  APITypes.DeleteTemplateScopeItemTagMutation
>;
export const createScopeItemGroup = /* GraphQL */ `mutation CreateScopeItemGroup(
  $input: CreateScopeItemGroupInput!
  $condition: ModelScopeItemGroupConditionInput
) {
  createScopeItemGroup(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateScopeItemGroupMutationVariables,
  APITypes.CreateScopeItemGroupMutation
>;
export const updateScopeItemGroup = /* GraphQL */ `mutation UpdateScopeItemGroup(
  $input: UpdateScopeItemGroupInput!
  $condition: ModelScopeItemGroupConditionInput
) {
  updateScopeItemGroup(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateScopeItemGroupMutationVariables,
  APITypes.UpdateScopeItemGroupMutation
>;
export const deleteScopeItemGroup = /* GraphQL */ `mutation DeleteScopeItemGroup(
  $input: DeleteScopeItemGroupInput!
  $condition: ModelScopeItemGroupConditionInput
) {
  deleteScopeItemGroup(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteScopeItemGroupMutationVariables,
  APITypes.DeleteScopeItemGroupMutation
>;
export const createScopeItem = /* GraphQL */ `mutation CreateScopeItem(
  $input: CreateScopeItemInput!
  $condition: ModelScopeItemConditionInput
) {
  createScopeItem(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateScopeItemMutationVariables,
  APITypes.CreateScopeItemMutation
>;
export const updateScopeItem = /* GraphQL */ `mutation UpdateScopeItem(
  $input: UpdateScopeItemInput!
  $condition: ModelScopeItemConditionInput
) {
  updateScopeItem(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateScopeItemMutationVariables,
  APITypes.UpdateScopeItemMutation
>;
export const deleteScopeItem = /* GraphQL */ `mutation DeleteScopeItem(
  $input: DeleteScopeItemInput!
  $condition: ModelScopeItemConditionInput
) {
  deleteScopeItem(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteScopeItemMutationVariables,
  APITypes.DeleteScopeItemMutation
>;
export const createAddress = /* GraphQL */ `mutation CreateAddress(
  $input: CreateAddressInput!
  $condition: ModelAddressConditionInput
) {
  createAddress(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateAddressMutationVariables,
  APITypes.CreateAddressMutation
>;
export const updateAddress = /* GraphQL */ `mutation UpdateAddress(
  $input: UpdateAddressInput!
  $condition: ModelAddressConditionInput
) {
  updateAddress(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateAddressMutationVariables,
  APITypes.UpdateAddressMutation
>;
export const deleteAddress = /* GraphQL */ `mutation DeleteAddress(
  $input: DeleteAddressInput!
  $condition: ModelAddressConditionInput
) {
  deleteAddress(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteAddressMutationVariables,
  APITypes.DeleteAddressMutation
>;
export const createTag = /* GraphQL */ `mutation CreateTag(
  $input: CreateTagInput!
  $condition: ModelTagConditionInput
) {
  createTag(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateTagMutationVariables,
  APITypes.CreateTagMutation
>;
export const updateTag = /* GraphQL */ `mutation UpdateTag(
  $input: UpdateTagInput!
  $condition: ModelTagConditionInput
) {
  updateTag(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateTagMutationVariables,
  APITypes.UpdateTagMutation
>;
export const deleteTag = /* GraphQL */ `mutation DeleteTag(
  $input: DeleteTagInput!
  $condition: ModelTagConditionInput
) {
  deleteTag(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteTagMutationVariables,
  APITypes.DeleteTagMutation
>;
export const createProjectFile = /* GraphQL */ `mutation CreateProjectFile(
  $input: CreateProjectFileInput!
  $condition: ModelProjectFileConditionInput
) {
  createProjectFile(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateProjectFileMutationVariables,
  APITypes.CreateProjectFileMutation
>;
export const updateProjectFile = /* GraphQL */ `mutation UpdateProjectFile(
  $input: UpdateProjectFileInput!
  $condition: ModelProjectFileConditionInput
) {
  updateProjectFile(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateProjectFileMutationVariables,
  APITypes.UpdateProjectFileMutation
>;
export const deleteProjectFile = /* GraphQL */ `mutation DeleteProjectFile(
  $input: DeleteProjectFileInput!
  $condition: ModelProjectFileConditionInput
) {
  deleteProjectFile(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteProjectFileMutationVariables,
  APITypes.DeleteProjectFileMutation
>;
export const createAnnotation = /* GraphQL */ `mutation CreateAnnotation(
  $input: CreateAnnotationInput!
  $condition: ModelAnnotationConditionInput
) {
  createAnnotation(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateAnnotationMutationVariables,
  APITypes.CreateAnnotationMutation
>;
export const updateAnnotation = /* GraphQL */ `mutation UpdateAnnotation(
  $input: UpdateAnnotationInput!
  $condition: ModelAnnotationConditionInput
) {
  updateAnnotation(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateAnnotationMutationVariables,
  APITypes.UpdateAnnotationMutation
>;
export const deleteAnnotation = /* GraphQL */ `mutation DeleteAnnotation(
  $input: DeleteAnnotationInput!
  $condition: ModelAnnotationConditionInput
) {
  deleteAnnotation(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteAnnotationMutationVariables,
  APITypes.DeleteAnnotationMutation
>;
export const createNotification = /* GraphQL */ `mutation CreateNotification(
  $input: CreateNotificationInput!
  $condition: ModelNotificationConditionInput
) {
  createNotification(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateNotificationMutationVariables,
  APITypes.CreateNotificationMutation
>;
export const updateNotification = /* GraphQL */ `mutation UpdateNotification(
  $input: UpdateNotificationInput!
  $condition: ModelNotificationConditionInput
) {
  updateNotification(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateNotificationMutationVariables,
  APITypes.UpdateNotificationMutation
>;
export const deleteNotification = /* GraphQL */ `mutation DeleteNotification(
  $input: DeleteNotificationInput!
  $condition: ModelNotificationConditionInput
) {
  deleteNotification(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteNotificationMutationVariables,
  APITypes.DeleteNotificationMutation
>;
export const createGroupChat = /* GraphQL */ `mutation CreateGroupChat(
  $input: CreateGroupChatInput!
  $condition: ModelGroupChatConditionInput
) {
  createGroupChat(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateGroupChatMutationVariables,
  APITypes.CreateGroupChatMutation
>;
export const updateGroupChat = /* GraphQL */ `mutation UpdateGroupChat(
  $input: UpdateGroupChatInput!
  $condition: ModelGroupChatConditionInput
) {
  updateGroupChat(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateGroupChatMutationVariables,
  APITypes.UpdateGroupChatMutation
>;
export const deleteGroupChat = /* GraphQL */ `mutation DeleteGroupChat(
  $input: DeleteGroupChatInput!
  $condition: ModelGroupChatConditionInput
) {
  deleteGroupChat(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteGroupChatMutationVariables,
  APITypes.DeleteGroupChatMutation
>;
export const createGroupChatMessage = /* GraphQL */ `mutation CreateGroupChatMessage(
  $input: CreateGroupChatMessageInput!
  $condition: ModelGroupChatMessageConditionInput
) {
  createGroupChatMessage(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateGroupChatMessageMutationVariables,
  APITypes.CreateGroupChatMessageMutation
>;
export const updateGroupChatMessage = /* GraphQL */ `mutation UpdateGroupChatMessage(
  $input: UpdateGroupChatMessageInput!
  $condition: ModelGroupChatMessageConditionInput
) {
  updateGroupChatMessage(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateGroupChatMessageMutationVariables,
  APITypes.UpdateGroupChatMessageMutation
>;
export const deleteGroupChatMessage = /* GraphQL */ `mutation DeleteGroupChatMessage(
  $input: DeleteGroupChatMessageInput!
  $condition: ModelGroupChatMessageConditionInput
) {
  deleteGroupChatMessage(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteGroupChatMessageMutationVariables,
  APITypes.DeleteGroupChatMessageMutation
>;
export const createChatAttachment = /* GraphQL */ `mutation CreateChatAttachment(
  $input: CreateChatAttachmentInput!
  $condition: ModelChatAttachmentConditionInput
) {
  createChatAttachment(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateChatAttachmentMutationVariables,
  APITypes.CreateChatAttachmentMutation
>;
export const updateChatAttachment = /* GraphQL */ `mutation UpdateChatAttachment(
  $input: UpdateChatAttachmentInput!
  $condition: ModelChatAttachmentConditionInput
) {
  updateChatAttachment(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateChatAttachmentMutationVariables,
  APITypes.UpdateChatAttachmentMutation
>;
export const deleteChatAttachment = /* GraphQL */ `mutation DeleteChatAttachment(
  $input: DeleteChatAttachmentInput!
  $condition: ModelChatAttachmentConditionInput
) {
  deleteChatAttachment(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteChatAttachmentMutationVariables,
  APITypes.DeleteChatAttachmentMutation
>;
export const createPersonCompanies = /* GraphQL */ `mutation CreatePersonCompanies(
  $input: CreatePersonCompaniesInput!
  $condition: ModelPersonCompaniesConditionInput
) {
  createPersonCompanies(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreatePersonCompaniesMutationVariables,
  APITypes.CreatePersonCompaniesMutation
>;
export const updatePersonCompanies = /* GraphQL */ `mutation UpdatePersonCompanies(
  $input: UpdatePersonCompaniesInput!
  $condition: ModelPersonCompaniesConditionInput
) {
  updatePersonCompanies(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdatePersonCompaniesMutationVariables,
  APITypes.UpdatePersonCompaniesMutation
>;
export const deletePersonCompanies = /* GraphQL */ `mutation DeletePersonCompanies(
  $input: DeletePersonCompaniesInput!
  $condition: ModelPersonCompaniesConditionInput
) {
  deletePersonCompanies(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeletePersonCompaniesMutationVariables,
  APITypes.DeletePersonCompaniesMutation
>;
export const createProjectPeople = /* GraphQL */ `mutation CreateProjectPeople(
  $input: CreateProjectPeopleInput!
  $condition: ModelProjectPeopleConditionInput
) {
  createProjectPeople(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateProjectPeopleMutationVariables,
  APITypes.CreateProjectPeopleMutation
>;
export const updateProjectPeople = /* GraphQL */ `mutation UpdateProjectPeople(
  $input: UpdateProjectPeopleInput!
  $condition: ModelProjectPeopleConditionInput
) {
  updateProjectPeople(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateProjectPeopleMutationVariables,
  APITypes.UpdateProjectPeopleMutation
>;
export const deleteProjectPeople = /* GraphQL */ `mutation DeleteProjectPeople(
  $input: DeleteProjectPeopleInput!
  $condition: ModelProjectPeopleConditionInput
) {
  deleteProjectPeople(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteProjectPeopleMutationVariables,
  APITypes.DeleteProjectPeopleMutation
>;
export const createChatParticipants = /* GraphQL */ `mutation CreateChatParticipants(
  $input: CreateChatParticipantsInput!
  $condition: ModelChatParticipantsConditionInput
) {
  createChatParticipants(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateChatParticipantsMutationVariables,
  APITypes.CreateChatParticipantsMutation
>;
export const updateChatParticipants = /* GraphQL */ `mutation UpdateChatParticipants(
  $input: UpdateChatParticipantsInput!
  $condition: ModelChatParticipantsConditionInput
) {
  updateChatParticipants(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateChatParticipantsMutationVariables,
  APITypes.UpdateChatParticipantsMutation
>;
export const deleteChatParticipants = /* GraphQL */ `mutation DeleteChatParticipants(
  $input: DeleteChatParticipantsInput!
  $condition: ModelChatParticipantsConditionInput
) {
  deleteChatParticipants(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteChatParticipantsMutationVariables,
  APITypes.DeleteChatParticipantsMutation
>;
export const createProjectFileTag = /* GraphQL */ `mutation CreateProjectFileTag(
  $input: CreateProjectFileTagInput!
  $condition: ModelProjectFileTagConditionInput
) {
  createProjectFileTag(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateProjectFileTagMutationVariables,
  APITypes.CreateProjectFileTagMutation
>;
export const updateProjectFileTag = /* GraphQL */ `mutation UpdateProjectFileTag(
  $input: UpdateProjectFileTagInput!
  $condition: ModelProjectFileTagConditionInput
) {
  updateProjectFileTag(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateProjectFileTagMutationVariables,
  APITypes.UpdateProjectFileTagMutation
>;
export const deleteProjectFileTag = /* GraphQL */ `mutation DeleteProjectFileTag(
  $input: DeleteProjectFileTagInput!
  $condition: ModelProjectFileTagConditionInput
) {
  deleteProjectFileTag(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteProjectFileTagMutationVariables,
  APITypes.DeleteProjectFileTagMutation
>;
