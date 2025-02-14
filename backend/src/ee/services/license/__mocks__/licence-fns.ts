export const getDefaultOnPremFeatures = () => {
  return {
    _id: null,
    slug: null,
    tier: -1,
    workspaceLimit: null,
    workspacesUsed: 0,
    memberLimit: null,
    membersUsed: 0,
    environmentLimit: null,
    environmentsUsed: 0,
    secretVersioning: true,
    pitRecovery: false,
    ipAllowlisting: true,
    rbac: false,
    customRateLimits: false,
    customAlerts: false,
    auditLogs: false,
    auditLogsRetentionDays: 0,
    samlSSO: false,
    status: null,
    trial_end: null,
    has_used_trial: true,
    secretApproval: false,
    secretRotation: true
  };
};
