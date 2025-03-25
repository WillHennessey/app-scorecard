export const budgetData = [
  { name: "Storage", value: 500 },
  { name: "Compute", value: 600 },
  { name: "Network", value: 300 },
  { name: "Database", value: 200 },
];

export const securityAlertsBySubscriptionData = [
  { name: "Sub 1", value: 30 },
  { name: "Sub 2", value: 20 },
  { name: "Sub 3", value: 10 },
  { name: "Sub 4", value: 20 },
  { name: "Sub 5", value: 100 },
];

export const costData = [
  { month: "Jan", amount: 1200 },
  { month: "Feb", amount: 1500 },
  { month: "Mar", amount: 1800 },
  { month: "Apr", amount: 2100 },
  { month: "May", amount: 2400 },
  { month: "Jun", amount: 2700 },
];

export const resourceData = [
  { service: "Storage", usage: 30 },
  { service: "Compute", usage: 45 },
  { service: "Network", usage: 15 },
  { service: "Database", usage: 10 },
];

export const securityAlertsByResourceData = [
  { resourceType: "VM", alerts: 10 },
  { resourceType: "SQL", alerts: 5 },
  { resourceType: "Web", alerts: 8 },
  { resourceType: "Storage", alerts: 12 },
  { resourceType: "Cosmos", alerts: 2 },
];

export const top5SecurityAlertsData = [
  { name: "Alert A", count: 20 },
  { name: "Alert B", count: 15 },
  { name: "Alert C", count: 10 },
  { name: "Alert D", count: 5 },
  { name: "Alert E", count: 25 },
];

export const top5PolicyViolationsData = [
  { violation: "Violation A", count: 5 },
  { violation: "Violation B", count: 10 },
  { violation: "Violation C", count: 3 },
  { violation: "Violation D", count: 7 },
  { violation: "Violation E", count: 2 },
];

export const top5RegulatoryComplianceAlertsData = [
  { name: "Alert 1", count: 4 },
  { name: "Alert 2", count: 3 },
  { name: "Alert 3", count: 5 },
  { name: "Alert 4", count: 2 },
  { name: "Alert 5", count: 7 },
];

export const regulatoryComplianceBySubscriptionData = [
  { name: "Sub 1", value: 20 },
  { name: "Sub 2", value: 40 },
  { name: "Sub 3", value: 30 },
  { name: "Sub 4", value: 10 },
];

export const sonarNewSecurityReviewData = [
  { name: "A", value: 900 },
  { name: "E", value: 100 },
];

export const sonarOverallSecurityReviewData = [
  { name: "A", value: 800 },
  { name: "E", value: 200 },
];

export const sonarNewVulnerabilitiesData = [
  { name: "A", value: 950 },
  { name: "E", value: 50 },
];

export const sonarOverallVulnerabilitiesData = [
  { name: "A", value: 850 },
  { name: "E", value: 150 },
];

export const vulnerabilitySLAData = [
  { name: "Pharmacy", "0-30": 10, "30-90": 5, "90-180": 3, "180-220": 2 },
  {
    name: "Infrastructure",
    "0-30": 7,
    "30-90": 10,
    "90-180": 5,
    "180-220": 1,
  },
  { name: "Data", "0-30": 8, "30-90": 4, "90-180": 6, "180-220": 3 },
];

export const vulnerabilitySLATrendData = [
  { name: "Jan", "0-30": 5, "30-90": 2, "90-180": 1 },
  { name: "Feb", "0-30": 6, "30-90": 3, "90-180": 0 },
  { name: "Mar", "0-30": 7, "30-90": 1, "90-180": 2 },
  { name: "Apr", "0-30": 8, "30-90": 4, "90-180": 1 },
];
