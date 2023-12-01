define("ace/mode/powershell_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"], function(require, exports, module){"use strict";
var oop = require("../lib/oop");
var TextHighlightRules = require("./text_highlight_rules").TextHighlightRules;
var PowershellHighlightRules = function () {
    var identifierRe = "[a-zA-Z\\?_\u00a1-\uffff][a-zA-Z\\d\\?_\u00a1-\uffff]*";
    var keywords = ("begin|break|catch|class|continue|data|define|do|dynamicparam|else|elseif|end|enum|exit|filter|" +
        "finally|for|foreach|from|function|if|in|inlinescript|hidden|parallel|param|" +
        "process|return|static|sequence|switch|throw|trap|try|until|using|while|workflow|var");
    var builtinFunctions = (
    "Get-AppBackgroundTask|Start-AppBackgroundTask|Unregister-AppBackgroundTask|Disable-AppBackgroundTaskDiagnosticLog|Enable-AppBackgroundTaskDiagnosticLog|Set-AppBackgroundTaskResourcePolicy|" +
        "Get-AppLockerFileInformation|Get-AppLockerPolicy|New-AppLockerPolicy|Set-AppLockerPolicy|Test-AppLockerPolicy|" +
        "Add-AppvClientConnectionGroup|Add-AppvClientPackage|Add-AppvPublishingServer|Disable-Appv|Disable-AppvClientConnectionGroup|Disable-AppvClientMode|Disable-AppvPublishingServer|Enable-Appv|Enable-AppvClientConnectionGroup|Enable-AppvClientMode|Enable-AppvPublishingServer|Get-AppvClientApplication|Get-AppvClientConfiguration|Get-AppvClientConnectionGroup|Get-AppvClientMode|Get-AppvClientPackage|Get-AppvClientPackageStatus|Get-AppvClientPackageVersion|Get-AppvClientPackageVersionHistory|Get-AppvClientPackageVersionStatus|Get-AppvClientPublishingServer|Get-AppvClientSFTFileSystem|Get-AppvClientStatus|Get-AppvPublishingServer|Get-AppvVirtualProcess|Publish-AppvClientPackage|Remove-AppvClientConnectionGroup|Remove-AppvClientPackage|Remove-AppvPublishingServer|Set-AppvClientConfiguration|Set-AppvClientMode|Set-AppvClientPackage|Set-AppvClientPublishingServer|Set-AppvVirtualProcess|Sync-AppvPublishingServer|Get-AppvStatus|Mount-AppvClientConnectionGroup|Repair-AppvClientConnectionGroup|Repair-AppvClientPackage|Send-AppvClientReport|Set-AppvPublishingServer|Start-AppvVirtualProcess|Stop-AppvClientConnectionGroup|Stop-AppvClientPackage|Unpublish-AppvClientPackage|" +
        "Expand-AppvSequencerPackage|New-AppvPackageAccelerator|New-AppvSequencerPackage|Update-AppvSequencerPackage|" +
        "Add-AppSharedPackageContainer|Add-AppxPackage|Add-AppxVolume|Dismount-AppxVolume|Get-AppSharedPackageContainer|Get-AppxDefaultVolume|Get-AppxLastError|Get-AppxLog|Get-AppxPackage|Get-AppxPackageAutoUpdateSettings|Get-AppxPackageManifest|Get-AppxVolume|Invoke-CommandInDesktopPackage|Mount-AppxVolume|Move-AppxPackage|Remove-AppSharedPackageContainer|Remove-AppxPackage|Remove-AppxPackageAutoUpdateSettings|Remove-AppxVolume|Reset-AppSharedPackageContainer|Reset-AppxPackage|Set-AppxDefaultVolume|Set-AppxPackageAutoUpdateSettings|" +
        "Clear-AssignedAccess|Get-AssignedAccess|Set-AssignedAccess|" +
        "Get-BpaModel|Get-BpaResult|Invoke-BpaModel|Set-BpaResult|" +
        "Add-BitLockerKeyProtector|Backup-BitLockerKeyProtector|BackupToAAD-BitLockerKeyProtector|Clear-BitLockerAutoUnlock|Disable-BitLocker|Disable-BitLockerAutoUnlock|Enable-BitLocker|Enable-BitLockerAutoUnlock|Get-BitLockerVolume|Lock-BitLocker|Remove-BitLockerKeyProtector|Resume-BitLocker|Suspend-BitLocker|Unlock-BitLocker|" +
        "Add-BitsFile|Complete-BitsTransfer|Get-BitsTransfer|Remove-BitsTransfer|Resume-BitsTransfer|Set-BitsTransfer|Start-BitsTransfer|Suspend-BitsTransfer|" +
        "Checkpoint-SbecActiveConfig|Clear-SbecProviderCache|Disable-SbecAutologger|Disable-SbecBcd|Enable-SbecAutologger|Enable-SbecBcd|Enable-SbecBootImage|Enable-SbecWdsBcd|Get-SbecActiveConfig|Get-SbecBackupConfig|Get-SbecDestination|Get-SbecForwarding|Get-SbecHistory|Get-SbecLocalizedMessage|Get-SbecLogSession|Get-SbecTraceProviders|New-SbecUnattendFragment|Redo-SbecActiveConfig|Restore-SbecBackupConfig|Save-SbecInstance|Save-SbecLogSession|Set-SbecActiveConfig|Set-SbecLogSession|Start-SbecInstance|Start-SbecLogSession|Start-SbecNtKernelLogSession|Start-SbecSimpleLogSession|Stop-SbecInstance|Stop-SbecLogSession|Test-SbecActiveConfig|Test-SbecConfig|Undo-SbecActiveConfig|" +
        "Add-BCDataCacheExtension|Clear-BCCache|Disable-BC|Disable-BCDowngrading|Disable-BCServeOnBattery|Enable-BCDistributed|Enable-BCDowngrading|Enable-BCHostedClient|Enable-BCHostedServer|Enable-BCLocal|Enable-BCServeOnBattery|Export-BCCachePackage|Export-BCSecretKey|Get-BCClientConfiguration|Get-BCContentServerConfiguration|Get-BCDataCache|Get-BCDataCacheExtension|Get-BCHashCache|Get-BCHostedCacheServerConfiguration|Get-BCNetworkConfiguration|Get-BCStatus|Import-BCCachePackage|Import-BCSecretKey|Publish-BCFileContent|Publish-BCWebContent|Remove-BCDataCacheExtension|Reset-BC|Set-BCAuthentication|Set-BCCache|Set-BCDataCacheEntryMaxAge|Set-BCMinSMBLatency|Set-BCSecretKey|" +
        "Add-CauClusterRole|Disable-CauClusterRole|Enable-CauClusterRole|Export-CauReport|Get-CauClusterRole|Get-CauPlugin|Get-CauReport|Get-CauRun|Invoke-CauRun|Invoke-CauScan|Register-CauPlugin|Remove-CauClusterRole|Save-CauDebugTrace|Set-CauClusterRole|Stop-CauRun|Test-CauSetup|Unregister-CauPlugin|" +
        "Export-BinaryMiLog|Get-CimAssociatedInstance|Get-CimClass|Get-CimInstance|Get-CimSession|Import-BinaryMiLog|Invoke-CimMethod|New-CimInstance|New-CimSession|New-CimSessionOption|Register-CimIndicationEvent|Remove-CimInstance|Remove-CimSession|Set-CimInstance|" +
        "ConvertFrom-CIPolicy|" +
        "Add-SignerRule|ConvertFrom-CIPolicy|Edit-CIPolicyRule|Get-CIPolicy|Get-CIPolicyIdInfo|Get-CIPolicyInfo|Get-SystemDriver|Merge-CIPolicy|New-CIPolicy|New-CIPolicyRule|Remove-CIPolicyRule|Set-CIPolicyIdInfo|Set-CIPolicySetting|Set-CIPolicyVersion|Set-HVCIOptions|Set-RuleOption|" +
        "Disable-NetQosFlowControl|Enable-NetQosFlowControl|Get-NetQosDcbxSetting|Get-NetQosFlowControl|Get-NetQosTrafficClass|New-NetQosTrafficClass|Remove-NetQosTrafficClass|Set-NetQosDcbxSetting|Set-NetQosFlowControl|Set-NetQosTrafficClass|Switch-NetQosDcbxSetting|Switch-NetQosFlowControl|Switch-NetQosTrafficClass|" +
        "Disable-DedupVolume|Enable-DedupVolume|Expand-DedupFile|Get-DedupJob|Get-DedupMetadata|Get-DedupSchedule|Get-DedupStatus|Get-DedupVolume|Measure-DedupFileMetadata|New-DedupSchedule|Remove-DedupSchedule|Set-DedupSchedule|Set-DedupVolume|Start-DedupJob|Stop-DedupJob|Update-DedupStatus|" +
        "Add-MpPreference|Get-MpComputerStatus|Get-MpPreference|Get-MpThreat|Get-MpThreatCatalog|Get-MpThreatDetection|Remove-MpPreference|Remove-MpThreat|Set-MpPreference|Start-MpScan|Start-MpWDOScan|Update-MpSignature|" +
        "Backup-DHASConfiguration|Get-DHASActiveEncryptionCertificate|Get-DHASActiveSigningCertificate|Get-DHASCertificateChainPolicy|Get-DHASInactiveEncryptionCertificate|Get-DHASInactiveSigningCertificate|Install-DeviceHealthAttestation|Remove-DHASInactiveEncryptionCertificate|Remove-DHASInactiveSigningCertificate|Restore-DHASConfiguration|Set-DHASActiveEncryptionCertificate|Set-DHASActiveSigningCertificate|Set-DHASCertificateChainPolicy|Set-DHASSupportedAuthenticationSchema|Uninstall-DeviceHealthAttestation||" +
        "Get-DfsnAccess|Get-DfsnFolder|Get-DfsnFolderTarget|Get-DfsnRoot|Get-DfsnRootTarget|Get-DfsnServerConfiguration|Grant-DfsnAccess|Move-DfsnFolder|New-DfsnFolder|New-DfsnFolderTarget|New-DfsnRoot|New-DfsnRootTarget|Remove-DfsnAccess|Remove-DfsnFolder|Remove-DfsnFolderTarget|Remove-DfsnRoot|Remove-DfsnRootTarget|Revoke-DfsnAccess|Set-DfsnFolder|Set-DfsnFolderTarget|Set-DfsnRoot|Set-DfsnRootTarget|Set-DfsnServerConfiguration|" +
        "Add-DfsrConnection|Add-DfsrMember|ConvertFrom-DfsrGuid|Export-DfsrClone|Get-DfsrBacklog|Get-DfsrCloneState|Get-DfsrConnection|Get-DfsrConnectionSchedule|Get-DfsrDelegation|Get-DfsReplicatedFolder|Get-DfsReplicationGroup|Get-DfsrFileHash|Get-DfsrGroupSchedule|Get-DfsrIdRecord|Get-DfsrMember|Get-DfsrMembership|Get-DfsrPreservedFiles|Get-DfsrServiceConfiguration|Get-DfsrState|Grant-DfsrDelegation|Import-DfsrClone|New-DfsReplicatedFolder|New-DfsReplicationGroup|Remove-DfsrConnection|Remove-DfsReplicatedFolder|Remove-DfsReplicationGroup|Remove-DfsrMember|Remove-DfsrPropagationTestFile|Reset-DfsrCloneState|Restore-DfsrPreservedFiles|Revoke-DfsrDelegation|Set-DfsrConnection|Set-DfsrConnectionSchedule|Set-DfsReplicatedFolder|Set-DfsReplicationGroup|Set-DfsrGroupSchedule|Set-DfsrMember|Set-DfsrMembership|Set-DfsrServiceConfiguration|Start-DfsrPropagationTest|Suspend-DfsReplicationGroup|Sync-DfsReplicationGroup|Update-DfsrConfigurationFromAD|Write-DfsrHealthReport|Write-DfsrPropagationReport|" +
        "Add-DhcpServerInDC|Add-DhcpServerSecurityGroup|Add-DhcpServerv4Class|Add-DhcpServerv4ExclusionRange|Add-DhcpServerv4Failover|Add-DhcpServerv4FailoverScope|Add-DhcpServerv4Filter|Add-DhcpServerv4Lease|Add-DhcpServerv4MulticastExclusionRange|Add-DhcpServerv4MulticastScope|Add-DhcpServerv4OptionDefinition|Add-DhcpServerv4Policy|Add-DhcpServerv4PolicyIPRange|Add-DhcpServerv4Reservation|Add-DhcpServerv4Scope|Add-DhcpServerv4Superscope|Add-DhcpServerv6Class|Add-DhcpServerv6ExclusionRange|Add-DhcpServerv6Lease|Add-DhcpServerv6OptionDefinition|Add-DhcpServerv6Reservation|Add-DhcpServerv6Scope|Backup-DhcpServer|Export-DhcpServer|Get-DhcpServerAuditLog|Get-DhcpServerDatabase|Get-DhcpServerDnsCredential|Get-DhcpServerInDC|Get-DhcpServerSetting|Get-DhcpServerv4Binding|Get-DhcpServerv4Class|Get-DhcpServerv4DnsSetting|Get-DhcpServerv4ExclusionRange|Get-DhcpServerv4Failover|Get-DhcpServerv4Filter|Get-DhcpServerv4FilterList|Get-DhcpServerv4FreeIPAddress|Get-DhcpServerv4Lease|Get-DhcpServerv4MulticastExclusionRange|Get-DhcpServerv4MulticastLease|Get-DhcpServerv4MulticastScope|Get-DhcpServerv4MulticastScopeStatistics|Get-DhcpServerv4OptionDefinition|Get-DhcpServerv4OptionValue|Get-DhcpServerv4Policy|Get-DhcpServerv4PolicyIPRange|Get-DhcpServerv4Reservation|Get-DhcpServerv4Scope|Get-DhcpServerv4ScopeStatistics|Get-DhcpServerv4Statistics|Get-DhcpServerv4Superscope|Get-DhcpServerv4SuperscopeStatistics|Get-DhcpServerv6Binding|Get-DhcpServerv6Class|Get-DhcpServerv6DnsSetting|Get-DhcpServerv6ExclusionRange|Get-DhcpServerv6FreeIPAddress|Get-DhcpServerv6Lease|Get-DhcpServerv6OptionDefinition|Get-DhcpServerv6OptionValue|Get-DhcpServerv6Reservation|Get-DhcpServerv6Scope|Get-DhcpServerv6ScopeStatistics|Get-DhcpServerv6StatelessStatistics|Get-DhcpServerv6StatelessStore|Get-DhcpServerv6Statistics|Get-DhcpServerVersion|Import-DhcpServer|Invoke-DhcpServerv4FailoverReplication|Remove-DhcpServerDnsCredential|Remove-DhcpServerInDC|Remove-DhcpServerv4Class|Remove-DhcpServerv4ExclusionRange|Remove-DhcpServerv4Failover|Remove-DhcpServerv4FailoverScope|Remove-DhcpServerv4Filter|Remove-DhcpServerv4Lease|Remove-DhcpServerv4MulticastExclusionRange|Remove-DhcpServerv4MulticastLease|Remove-DhcpServerv4MulticastScope|Remove-DhcpServerv4OptionDefinition|Remove-DhcpServerv4OptionValue|Remove-DhcpServerv4Policy|Remove-DhcpServerv4PolicyIPRange|Remove-DhcpServerv4Reservation|Remove-DhcpServerv4Scope|Remove-DhcpServerv4Superscope|Remove-DhcpServerv6Class|Remove-DhcpServerv6ExclusionRange|Remove-DhcpServerv6Lease|Remove-DhcpServerv6OptionDefinition|Remove-DhcpServerv6OptionValue|Remove-DhcpServerv6Reservation|Remove-DhcpServerv6Scope|Rename-DhcpServerv4Superscope|Repair-DhcpServerv4IPRecord|Restore-DhcpServer|Set-DhcpServerAuditLog|Set-DhcpServerDatabase|Set-DhcpServerDnsCredential|Set-DhcpServerSetting|Set-DhcpServerv4Binding|Set-DhcpServerv4Class|Set-DhcpServerv4DnsSetting|Set-DhcpServerv4Failover|Set-DhcpServerv4FilterList|Set-DhcpServerv4MulticastScope|Set-DhcpServerv4OptionDefinition|Set-DhcpServerv4OptionValue|Set-DhcpServerv4Policy|Set-DhcpServerv4Reservation|Set-DhcpServerv4Scope|Set-DhcpServerv6Binding|Set-DhcpServerv6Class|Set-DhcpServerv6DnsSetting|Set-DhcpServerv6OptionDefinition|Set-DhcpServerv6OptionValue|Set-DhcpServerv6Reservation|Set-DhcpServerv6Scope|Set-DhcpServerv6StatelessStore|" +
        "Disable-DAManualEntryPointSelection|Enable-DAManualEntryPointSelection|Get-DAClientExperienceConfiguration|Get-DAEntryPointTableItem|New-DAEntryPointTableItem|Remove-DAEntryPointTableItem|Rename-DAEntryPointTableItem|Reset-DAClientExperienceConfiguration|Reset-DAEntryPointTableItem|Set-DAClientExperienceConfiguration|Set-DAEntryPointTableItem|" +
        "Add-AppxProvisionedPackage|Add-WindowsCapability|Add-WindowsDriver|Add-WindowsImage|Add-WindowsPackage|Clear-WindowsCorruptMountPoint|Disable-WindowsOptionalFeature|Dismount-WindowsImage|Enable-WindowsOptionalFeature|Expand-WindowsCustomDataImage|Expand-WindowsImage|Export-WindowsCapabilitySource|Export-WindowsDriver|Export-WindowsImage|Get-AppxProvisionedPackage|Get-NonRemovableAppsPolicy|Get-WIMBootEntry|Get-WindowsCapability|Get-WindowsDriver|Get-WindowsEdition|Get-WindowsImage|Get-WindowsImageContent|Get-WindowsOptionalFeature|Get-WindowsPackage|Get-WindowsReservedStorageState|Mount-WindowsImage|New-WindowsCustomImage|New-WindowsImage|Optimize-AppXProvisionedPackages|Optimize-WindowsImage|Remove-AppxProvisionedPackage|Remove-WindowsCapability|Remove-WindowsDriver|Remove-WindowsImage|Remove-WindowsPackage|Repair-WindowsImage|Save-WindowsImage|Set-AppXProvisionedDataFile|Set-NonRemovableAppsPolicy|Set-WindowsEdition|Set-WindowsProductKey|Set-WindowsReservedStorageState|Split-WindowsImage|Start-OSUninstall|Update-WIMBootEntry|Use-WindowsUnattend|" +
        "Add-DnsClientDohServerAddress|Add-DnsClientNrptRule|Clear-DnsClientCache|Get-DnsClient|Get-DnsClientCache|Get-DnsClientDohServerAddress|Get-DnsClientGlobalSetting|Get-DnsClientNrptGlobal|Get-DnsClientNrptPolicy|Get-DnsClientNrptRule|Get-DnsClientServerAddress|Register-DnsClient|Remove-DnsClientDohServerAddress|Remove-DnsClientNrptRule|Resolve-DnsName|Set-DnsClient|Set-DnsClientDohServerAddress|Set-DnsClientGlobalSetting|Set-DnsClientNrptGlobal|Set-DnsClientNrptRule|Set-DnsClientServerAddress|" +
        "Add-DnsServerClientSubnet|Add-DnsServerConditionalForwarderZone|Add-DnsServerDirectoryPartition|Add-DnsServerForwarder|Add-DnsServerPrimaryZone|Add-DnsServerQueryResolutionPolicy|Add-DnsServerRecursionScope|Add-DnsServerResourceRecord|Add-DnsServerResourceRecordA|Add-DnsServerResourceRecordAAAA|Add-DnsServerResourceRecordCName|Add-DnsServerResourceRecordDnsKey|Add-DnsServerResourceRecordDS|Add-DnsServerResourceRecordMX|Add-DnsServerResourceRecordPtr|Add-DnsServerResponseRateLimitingExceptionlist|Add-DnsServerRootHint|Add-DnsServerSecondaryZone|Add-DnsServerSigningKey|Add-DnsServerStubZone|Add-DnsServerTrustAnchor|Add-DnsServerVirtualizationInstance|Add-DnsServerZoneDelegation|Add-DnsServerZoneScope|Add-DnsServerZoneTransferPolicy|Clear-DnsServerCache|Clear-DnsServerStatistics|ConvertTo-DnsServerPrimaryZone|ConvertTo-DnsServerSecondaryZone|Disable-DnsServerPolicy|Disable-DnsServerSigningKeyRollover|Enable-DnsServerPolicy|Enable-DnsServerSigningKeyRollover|Export-DnsServerDnsSecPublicKey|Export-DnsServerZone|Get-DnsServer|Get-DnsServerCache|Get-DnsServerClientSubnet|Get-DnsServerDiagnostics|Get-DnsServerDirectoryPartition|Get-DnsServerDnsSecZoneSetting|Get-DnsServerDsSetting|Get-DnsServerEDns|Get-DnsServerForwarder|Get-DnsServerGlobalNameZone|Get-DnsServerGlobalQueryBlockList|Get-DnsServerQueryResolutionPolicy|Get-DnsServerRecursion|Get-DnsServerRecursionScope|Get-DnsServerResourceRecord|Get-DnsServerResponseRateLimiting|Get-DnsServerResponseRateLimitingExceptionlist|Get-DnsServerRootHint|Get-DnsServerScavenging|Get-DnsServerSetting|Get-DnsServerSigningKey|Get-DnsServerStatistics|Get-DnsServerTrustAnchor|Get-DnsServerTrustPoint|Get-DnsServerVirtualizationInstance|Get-DnsServerZone|Get-DnsServerZoneAging|Get-DnsServerZoneDelegation|Get-DnsServerZoneScope|Get-DnsServerZoneTransferPolicy|Import-DnsServerResourceRecordDS|Import-DnsServerRootHint|Import-DnsServerTrustAnchor|Invoke-DnsServerSigningKeyRollover|Invoke-DnsServerZoneSign|Invoke-DnsServerZoneUnsign|Register-DnsServerDirectoryPartition|Remove-DnsServerClientSubnet|Remove-DnsServerDirectoryPartition|Remove-DnsServerForwarder|Remove-DnsServerQueryResolutionPolicy|Remove-DnsServerRecursionScope|Remove-DnsServerResourceRecord|Remove-DnsServerResponseRateLimitingExceptionlist|Remove-DnsServerRootHint|Remove-DnsServerSigningKey|Remove-DnsServerTrustAnchor|Remove-DnsServerVirtualizationInstance|Remove-DnsServerZone|Remove-DnsServerZoneDelegation|Remove-DnsServerZoneScope|Remove-DnsServerZoneTransferPolicy|Reset-DnsServerZoneKeyMasterRole|Restore-DnsServerPrimaryZone|Restore-DnsServerSecondaryZone|Resume-DnsServerZone|Set-DnsServer|Set-DnsServerCache|Set-DnsServerClientSubnet|Set-DnsServerConditionalForwarderZone|Set-DnsServerDiagnostics|Set-DnsServerDnsSecZoneSetting|Set-DnsServerDsSetting|Set-DnsServerEDns|Set-DnsServerForwarder|Set-DnsServerGlobalNameZone|Set-DnsServerGlobalQueryBlockList|Set-DnsServerPrimaryZone|Set-DnsServerQueryResolutionPolicy|Set-DnsServerRecursion|Set-DnsServerRecursionScope|Set-DnsServerResourceRecord|Set-DnsServerResourceRecordAging|Set-DnsServerResponseRateLimiting|Set-DnsServerResponseRateLimitingExceptionlist|Set-DnsServerRootHint|Set-DnsServerScavenging|Set-DnsServerSecondaryZone|Set-DnsServerSetting|Set-DnsServerSigningKey|Set-DnsServerStubZone|Set-DnsServerVirtualizationInstance|Set-DnsServerZoneAging|Set-DnsServerZoneDelegation|Set-DnsServerZoneTransferPolicy|Show-DnsServerCache|Show-DnsServerKeyStorageProvider|Start-DnsServerScavenging|Start-DnsServerZoneTransfer|Step-DnsServerSigningKeyRollover|Suspend-DnsServerZone|Sync-DnsServerZone|Test-DnsServer|Test-DnsServerDnsSecZoneSetting|Unregister-DnsServerDirectoryPartition|Update-DnsServerTrustPoint|" +
        "Add-EtwTraceProvider|Get-AutologgerConfig|Get-EtwTraceProvider|Get-EtwTraceSession|New-AutologgerConfig|New-EtwTraceSession|Remove-AutologgerConfig|Remove-EtwTraceProvider|Save-EtwTraceSession|Send-EtwTraceSession|Set-EtwTraceProvider|Start-EtwTraceSession|Stop-EtwTraceSession|Update-AutologgerConfig|Update-EtwTraceSession|" +
        "Add-ClusterCheckpoint|Add-ClusterDisk|Add-ClusterFileServerRole|Add-ClusterGenericApplicationRole|Add-ClusterGenericScriptRole|Add-ClusterGenericServiceRole|Add-ClusterGroup|Add-ClusterGroupSetDependency|Add-ClusterGroupToSet|Add-ClusteriSCSITargetServerRole|Add-ClusterNode|Add-ClusterResource|Add-ClusterResourceDependency|Add-ClusterResourceType|Add-ClusterScaleOutFileServerRole|Add-ClusterSharedVolume|Add-ClusterVirtualMachineRole|Add-ClusterVMMonitoredItem|Block-ClusterAccess|Clear-ClusterDiskReservation|Clear-ClusterNode|Disable-ClusterStorageSpacesDirect|Enable-ClusterStorageSpacesDirect|Get-Cluster|Get-ClusterAccess|Get-ClusterAvailableDisk|Get-ClusterCheckpoint|Get-ClusterDiagnosticInfo|Get-ClusterFaultDomain|Get-ClusterFaultDomainXML|Get-ClusterGroup|Get-ClusterGroupSet|Get-ClusterGroupSetDependency|Get-ClusterLog|Get-ClusterNetwork|Get-ClusterNetworkInterface|Get-ClusterNode|Get-ClusterOwnerNode|Get-ClusterParameter|Get-ClusterQuorum|Get-ClusterResource|Get-ClusterResourceDependency|Get-ClusterResourceDependencyReport|Get-ClusterResourceType|Get-ClusterSharedVolume|Get-ClusterSharedVolumeState|Get-ClusterStorageSpacesDirect|Get-ClusterVMMonitoredItem|Grant-ClusterAccess|Move-ClusterGroup|Move-ClusterResource|Move-ClusterSharedVolume|Move-ClusterVirtualMachineRole|New-Cluster|New-ClusterFaultDomain|New-ClusterGroupSet|New-ClusterNameAccount|Remove-Cluster|Remove-ClusterAccess|Remove-ClusterCheckpoint|Remove-ClusterFaultDomain|Remove-ClusterGroup|Remove-ClusterGroupFromSet|Remove-ClusterGroupSet|Remove-ClusterGroupSetDependency|Remove-ClusterNode|Remove-ClusterResource|Remove-ClusterResourceDependency|Remove-ClusterResourceType|Remove-ClusterSharedVolume|Remove-ClusterVMMonitoredItem|Repair-ClusterStorageSpacesDirect|Reset-ClusterVMMonitoredState|Resume-ClusterNode|Resume-ClusterResource|Set-ClusterFaultDomain|Set-ClusterFaultDomainXML|Set-ClusterGroupSet|Set-ClusterLog|Set-ClusterOwnerNode|Set-ClusterParameter|Set-ClusterQuorum|Set-ClusterResourceDependency|Set-ClusterStorageSpacesDirect|Set-ClusterStorageSpacesDirectDisk|Start-Cluster|Start-ClusterGroup|Start-ClusterNode|Start-ClusterResource|Stop-Cluster|Stop-ClusterGroup|Stop-ClusterNode|Stop-ClusterResource|Suspend-ClusterNode|Suspend-ClusterResource|Test-Cluster|Test-ClusterResourceFailure|Update-ClusterFunctionalLevel|Update-ClusterIPResource|Update-ClusterNetworkNameResource|Update-ClusterVirtualMachineConfiguration|" +
        "Get-FsrmAdrSetting|Get-FsrmAutoQuota|Get-FsrmClassification|Get-FsrmClassificationPropertyDefinition|Get-FsrmClassificationRule|Get-FsrmEffectiveNamespace|Get-FsrmFileGroup|Get-FsrmFileManagementJob|Get-FsrmFileScreen|Get-FsrmFileScreenException|Get-FsrmFileScreenTemplate|Get-FsrmMacro|Get-FsrmMgmtProperty|Get-FsrmQuota|Get-FsrmQuotaTemplate|Get-FsrmRmsTemplate|Get-FsrmSetting|Get-FsrmStorageReport|New-FsrmAction|New-FsrmAutoQuota|New-FsrmClassificationPropertyDefinition|New-FsrmClassificationPropertyValue|New-FsrmClassificationRule|New-FsrmFileGroup|New-FsrmFileManagementJob|New-FsrmFileScreen|New-FsrmFileScreenException|New-FsrmFileScreenTemplate|New-FsrmFmjAction|New-FsrmFmjCondition|New-FsrmFMJNotification|New-FsrmFmjNotificationAction|New-FsrmQuota|New-FsrmQuotaTemplate|New-FsrmQuotaThreshold|New-FsrmScheduledTask|New-FsrmStorageReport|Remove-FsrmAutoQuota|Remove-FsrmClassificationPropertyDefinition|Remove-FsrmClassificationRule|Remove-FsrmFileGroup|Remove-FsrmFileManagementJob|Remove-FsrmFileScreen|Remove-FsrmFileScreenException|Remove-FsrmFileScreenTemplate|Remove-FsrmMgmtProperty|Remove-FsrmQuota|Remove-FsrmQuotaTemplate|Remove-FsrmStorageReport|Reset-FsrmFileScreen|Reset-FsrmQuota|Send-FsrmTestEmail|Set-FsrmAdrSetting|Set-FsrmAutoQuota|Set-FsrmClassification|Set-FsrmClassificationPropertyDefinition|Set-FsrmClassificationRule|Set-FsrmFileGroup|Set-FsrmFileManagementJob|Set-FsrmFileScreen|Set-FsrmFileScreenException|Set-FsrmFileScreenTemplate|Set-FsrmMgmtProperty|Set-FsrmQuota|Set-FsrmQuotaTemplate|Set-FsrmSetting|Set-FsrmStorageReport|Start-FsrmClassification|Start-FsrmFileManagementJob|Start-FsrmStorageReport|Stop-FsrmClassification|Stop-FsrmFileManagementJob|Stop-FsrmStorageReport|Update-FsrmAutoQuota|Update-FsrmClassificationPropertyDefinition|Update-FsrmQuota|Wait-FsrmClassification|Wait-FsrmFileManagementJob|Wait-FsrmStorageReport|" +
        "Backup-GPO|Copy-GPO|Get-GPInheritance|Get-GPO|Get-GPOReport|Get-GPPermission|Get-GPPrefRegistryValue|Get-GPRegistryValue|Get-GPResultantSetOfPolicy|Get-GPStarterGPO|Import-GPO|Invoke-GPUpdate|New-GPLink|New-GPO|New-GPStarterGPO|Remove-GPLink|Remove-GPO|Remove-GPPrefRegistryValue|Remove-GPRegistryValue|Rename-GPO|Restore-GPO|Set-GPInheritance|Set-GPLink|Set-GPPermission|Set-GPPrefRegistryValue|Set-GPRegistryValue|" +
        "Export-HwCertTestCollectionToXml|Import-HwCertTestCollectionFromXml|Merge-HwCertTestCollectionFromPackage|Merge-HwCertTestCollectionFromXml|New-HwCertProjectDefinitionFile|New-HwCertTestCollection|New-HwCertTestCollectionExcelReport|" +
        "Add-HgsAttestationCIPolicy|Add-HgsAttestationDumpPolicy|Add-HgsAttestationHostGroup|Add-HgsAttestationTpmHost|Add-HgsAttestationTpmPolicy|Disable-HgsAttestationPolicy|Enable-HgsAttestationPolicy|Get-HgsAttestationHostGroup|Get-HgsAttestationPolicy|Get-HgsAttestationSignerCertificate|Get-HgsAttestationTpmHost|Remove-HgsAttestationHostGroup|Remove-HgsAttestationPolicy|Remove-HgsAttestationTpmHost|" +
        "ConvertTo-HgsKeyProtector|Export-HgsGuardian|Get-HgsAttestationBaselinePolicy|Get-HgsClientConfiguration|Get-HgsGuardian|Grant-HgsKeyProtectorAccess|Import-HgsGuardian|New-HgsGuardian|New-HgsKeyProtector|Remove-HgsGuardian|Revoke-HgsKeyProtectorAccess|Set-HgsClientConfiguration|Test-HgsClientConfiguration|" +
        "Get-HgsTrace|Get-HgsTraceFileData|New-HgsTraceTarget|Test-HgsTraceTarget|" +
        "Add-HgsKeyProtectionAttestationSignerCertificate|Add-HgsKeyProtectionCertificate|Export-HgsKeyProtectionState|Get-HgsKeyProtectionAttestationSignerCertificate|Get-HgsKeyProtectionCertificate|Get-HgsKeyProtectionConfiguration|Import-HgsKeyProtectionState|Remove-HgsKeyProtectionAttestationSignerCertificate|Remove-HgsKeyProtectionCertificate|Set-HgsKeyProtectionAttestationSignerCertificatePolicy|Set-HgsKeyProtectionCertificate|Set-HgsKeyProtectionConfiguration|" +
        "Clear-HgsServer|Export-HgsServerState|Get-HgsServer|Import-HgsServerState|Initialize-HgsServer|Install-HgsServer|Set-HgsServer|Test-HgsServer|Uninstall-HgsServer|" +
        "Debug-SlbDatapath|Debug-VirtualMachineQueueOperation|Disable-MuxEchoResponder|Enable-MuxEchoResponder|Get-CustomerRoute|Get-NetworkControllerVipResource|Get-PACAMapping|Get-ProviderAddress|Get-VipHostMapping|Get-VMNetworkAdapterPortId|Get-VMSwitchExternalPortId|Test-DipHostReachability|Test-EncapOverheadSettings|Test-LogicalNetworkConnection|Test-LogicalNetworkSupportsJumboPacket|Test-VipReachability|Test-VirtualNetworkConnection|" +
        "Get-ComputeProcess|Stop-ComputeProcess|" +
        "Add-VMDvdDrive|Add-VMFibreChannelHba|Add-VMGpuPartitionAdapter|Add-VMGroupMember|Add-VMHardDiskDrive|Add-VMMigrationNetwork|Add-VMNetworkAdapter|Add-VMNetworkAdapterAcl|Add-VMNetworkAdapterExtendedAcl|Add-VmNetworkAdapterRoutingDomainMapping|Add-VMRemoteFx3dVideoAdapter|Add-VMScsiController|Add-VMStoragePath|Add-VMSwitch|Add-VMSwitchExtensionPortFeature|Add-VMSwitchExtensionSwitchFeature|Add-VMSwitchTeamMember|Checkpoint-VM|Compare-VM|Complete-VMFailover|Connect-VMNetworkAdapter|Connect-VMSan|Convert-VHD|Copy-VMFile|Debug-VM|Disable-VMConsoleSupport|Disable-VMEventing|Disable-VMIntegrationService|Disable-VMMigration|Disable-VMRemoteFXPhysicalVideoAdapter|Disable-VMResourceMetering|Disable-VMSwitchExtension|Disable-VMTPM|Disconnect-VMNetworkAdapter|Disconnect-VMSan|Dismount-VHD|Enable-VMConsoleSupport|Enable-VMEventing|Enable-VMIntegrationService|Enable-VMMigration|Enable-VMRemoteFXPhysicalVideoAdapter|Enable-VMReplication|Enable-VMResourceMetering|Enable-VMSwitchExtension|Enable-VMTPM|Export-VM|Export-VMSnapshot|Get-VHD|Get-VHDSet|Get-VHDSnapshot|Get-VM|Get-VMBios|Get-VMComPort|Get-VMConnectAccess|Get-VMDvdDrive|Get-VMFibreChannelHba|Get-VMFirmware|Get-VMFloppyDiskDrive|Get-VMGpuPartitionAdapter|Get-VMGroup|Get-VMHardDiskDrive|Get-VMHost|Get-VMHostCluster|Get-VMHostNumaNode|Get-VMHostNumaNodeStatus|Get-VMHostPartitionableGpu|Get-VMHostSupportedVersion|Get-VMIdeController|Get-VMIntegrationService|Get-VMKeyProtector|Get-VMMemory|Get-VMMigrationNetwork|Get-VMNetworkAdapter|Get-VMNetworkAdapterAcl|Get-VMNetworkAdapterExtendedAcl|Get-VMNetworkAdapterFailoverConfiguration|Get-VmNetworkAdapterIsolation|Get-VMNetworkAdapterRoutingDomainMapping|Get-VMNetworkAdapterTeamMapping|Get-VMNetworkAdapterVlan|Get-VMProcessor|Get-VMRemoteFx3dVideoAdapter|Get-VMRemoteFXPhysicalVideoAdapter|Get-VMReplication|Get-VMReplicationAuthorizationEntry|Get-VMReplicationServer|Get-VMResourcePool|Get-VMSan|Get-VMScsiController|Get-VMSecurity|Get-VMSnapshot|Get-VMStoragePath|Get-VMSwitch|Get-VMSwitchExtension|Get-VMSwitchExtensionPortData|Get-VMSwitchExtensionPortFeature|Get-VMSwitchExtensionSwitchData|Get-VMSwitchExtensionSwitchFeature|Get-VMSwitchTeam|Get-VMSystemSwitchExtension|Get-VMSystemSwitchExtensionPortFeature|Get-VMSystemSwitchExtensionSwitchFeature|Get-VMVideo|Grant-VMConnectAccess|Import-VM|Import-VMInitialReplication|Measure-VM|Measure-VMReplication|Measure-VMResourcePool|Merge-VHD|Mount-VHD|Move-VM|Move-VMStorage|New-VFD|New-VHD|New-VM|New-VMGroup|||New-VMReplicationAuthorizationEntry|New-VMResourcePool|New-VMSan|New-VMSwitch|Optimize-VHD|Optimize-VHDSet|Remove-VHDSnapshot|Remove-VM|Remove-VMDvdDrive|Remove-VMFibreChannelHba|Remove-VMGpuPartitionAdapter|Remove-VMGroup|Remove-VMGroupMember|Remove-VMHardDiskDrive|Remove-VMMigrationNetwork|Remove-VMNetworkAdapter|Remove-VMNetworkAdapterAcl|Remove-VMNetworkAdapterExtendedAcl|Remove-VMNetworkAdapterRoutingDomainMapping|Remove-VMNetworkAdapterTeamMapping|Remove-VMRemoteFx3dVideoAdapter|Remove-VMReplication|Remove-VMReplicationAuthorizationEntry|Remove-VMResourcePool|Remove-VMSan|Remove-VMSavedState|Remove-VMScsiController|Remove-VMSnapshot|Remove-VMStoragePath|Remove-VMSwitch|Remove-VMSwitchExtensionPortFeature|Remove-VMSwitchExtensionSwitchFeature|Remove-VMSwitchTeamMember|Rename-VM|Rename-VMGroup|Rename-VMNetworkAdapter|Rename-VMResourcePool|Rename-VMSan|Rename-VMSnapshot|Rename-VMSwitch|Repair-VM|Reset-VMReplicationStatistics|Reset-VMResourceMetering|Resize-VHD|Restart-VM|Restore-VMSnapshot|Resume-VM|Resume-VMReplication|Revoke-VMConnectAccess|Save-VM|Set-VHD|Set-VM|Set-VMBios|Set-VMComPort|Set-VMDvdDrive|Set-VMFibreChannelHba|Set-VMFirmware|Set-VMFloppyDiskDrive|Set-VMGpuPartitionAdapter|Set-VMHardDiskDrive|Set-VMHost|Set-VMHostCluster|Set-VMHostPartitionableGpu|Set-VMKeyProtector|Set-VMMemory|Set-VMMigrationNetwork|Set-VMNetworkAdapter|Set-VMNetworkAdapterFailoverConfiguration|Set-VmNetworkAdapterIsolation|Set-VmNetworkAdapterRoutingDomainMapping|Set-VMNetworkAdapterTeamMapping|Set-VMNetworkAdapterVlan|Set-VMProcessor|Set-VMRemoteFx3dVideoAdapter|Set-VMReplication|Set-VMReplicationAuthorizationEntry|Set-VMReplicationServer|Set-VMResourcePool|Set-VMSan|Set-VMSecurity|Set-VMSecurityPolicy|Set-VMSwitch|Set-VMSwitchExtensionPortFeature|Set-VMSwitchExtensionSwitchFeature|Set-VMSwitchTeam|Set-VMVideo|Start-VM|Start-VMFailover|Start-VMInitialReplication|Start-VMTrace|Stop-VM|Stop-VMFailover|Stop-VMInitialReplication|Stop-VMReplication|Stop-VMTrace|Suspend-VM|Suspend-VMReplication|Test-VHD|Test-VMNetworkAdapter|Test-VMReplicationConnection|Update-VMVersion|" +
        "Clear-IISCentralCertProvider|Clear-IISConfigCollection|Disable-IISCentralCertProvider|Disable-IISSharedConfig|Enable-IISCentralCertProvider|Enable-IISSharedConfig|Export-IISConfiguration|Get-IISAppPool|Get-IISCentralCertProvider|Get-IISConfigAttributeValue|Get-IISConfigCollection|Get-IISConfigCollectionElement|Get-IISConfigElement|Get-IISConfigSection|Get-IISServerManager|Get-IISSharedConfig|Get-IISSite|Get-IISSiteBinding|New-IISConfigCollectionElement|New-IISSite|New-IISSiteBinding|Remove-IISConfigAttribute|Remove-IISConfigCollectionElement|Remove-IISConfigElement|Remove-IISSite|Remove-IISSiteBinding|Reset-IISServerManager|Set-IISCentralCertProvider|Set-IISCentralCertProviderCredential|Set-IISConfigAttributeValue|Start-IISCommitDelay|Start-IISSite|Stop-IISCommitDelay|Stop-IISSite|" +
        "Copy-UserInternationalSettingsToSystem|Get-WinAcceptLanguageFromLanguageListOptOut|Get-WinCultureFromLanguageListOptOut|Get-WinDefaultInputMethodOverride|Get-WinHomeLocation|Get-WinLanguageBarOption|Get-WinSystemLocale|Get-WinUILanguageOverride|Get-WinUserLanguageList|New-WinUserLanguageList|Set-Culture|Set-WinAcceptLanguageFromLanguageListOptOut|Set-WinCultureFromLanguageListOptOut|Set-WinDefaultInputMethodOverride|Set-WinHomeLocation|Set-WinLanguageBarOption|Set-WinSystemLocale|Set-WinUILanguageOverride|Set-WinUserLanguageList|" +
        "Add-IpamAddress|Add-IpamAddressSpace|Add-IpamBlock|Add-IpamCustomField|Add-IpamCustomFieldAssociation|Add-IpamCustomValue|Add-IpamDiscoveryDomain|" +
        "Connect-IscsiTarget|Disconnect-IscsiTarget|Get-IscsiConnection|Get-IscsiSession|Get-IscsiTarget|Get-IscsiTargetPortal|New-IscsiTargetPortal|Register-IscsiSession|Remove-IscsiTargetPortal|Set-IscsiChapSecret|Unregister-IscsiSession|Update-IscsiTarget|Update-IscsiTargetPortal|" +
        "Add-IscsiVirtualDiskTargetMapping|Checkpoint-IscsiVirtualDisk|Convert-IscsiVirtualDisk|Dismount-IscsiVirtualDiskSnapshot|Export-IscsiTargetServerConfiguration|Export-IscsiVirtualDiskSnapshot|Get-IscsiServerTarget|Get-IscsiTargetServerSetting|Get-IscsiVirtualDisk|Get-IscsiVirtualDiskSnapshot|Import-IscsiTargetServerConfiguration|Import-IscsiVirtualDisk|Mount-IscsiVirtualDiskSnapshot|New-IscsiServerTarget|New-IscsiVirtualDisk|Remove-IscsiServerTarget|Remove-IscsiVirtualDisk|Remove-IscsiVirtualDiskSnapshot|Remove-IscsiVirtualDiskTargetMapping|Resize-IscsiVirtualDisk|Restore-IscsiVirtualDisk|Set-IscsiServerTarget|Set-IscsiTargetServerSetting|Set-IscsiVirtualDisk|Set-IscsiVirtualDiskSnapshot|Stop-IscsiVirtualDiskOperation|" +
        "Get-IseSnippet|Import-IseSnippet|New-IseSnippet|" +
        "Add-KdsRootKey|Clear-KdsCache|Get-KdsConfiguration|Get-KdsRootKey|Set-KdsConfiguration|Test-KdsRootKey|" +
        "Get-InstalledLanguage|Get-SystemPreferredUILanguage|Install-Language|Set-SystemPreferredUILanguage|Uninstall-Language|" +
        "Find-LapsADExtendedRights|Get-LapsAADPassword|Get-LapsADPassword|Get-LapsDiagnostics|Invoke-LapsPolicyProcessing|Reset-LapsPassword|Set-LapsADAuditing|Set-LapsADComputerSelfPermission|Set-LapsADPasswordExpirationTime|Set-LapsADReadPasswordPermission|Set-LapsADResetPasswordPermission|Update-LapsADSchema|" +
        "Disable-DiagnosticDataViewing|Enable-DiagnosticDataViewing|Get-DiagnosticData|Get-DiagnosticDataTypes|Get-DiagnosticDataViewingSetting|Get-DiagnosticStoreCapacity|Set-DiagnosticStoreCapacity|" +
        "Compress-Archive|Expand-Archive|" +
        "Export-Counter|Get-Counter|Get-WinEvent|Import-Counter|New-WinEvent|" +
        "Start-Transcript|Stop-Transcript|" +
        "Add-Computer|Add-Content|Checkpoint-Computer|Clear-Content|Clear-EventLog|Clear-Item|Clear-ItemProperty|Clear-RecycleBin|Complete-Transaction|Convert-Path|Copy-Item|Copy-ItemProperty|Debug-Process|Disable-ComputerRestore|Enable-ComputerRestore|Get-ChildItem|Get-Clipboard|Get-ComputerRestorePoint|Get-Content|Get-ControlPanelItem|Get-EventLog|Get-HotFix|Get-Item|Get-ItemProperty|Get-ItemPropertyValue|Get-Location|Get-Process|Get-PSDrive|Get-PSProvider|Get-Service|Get-Transaction|Get-WmiObject|Invoke-Item|Invoke-WmiMethod|Join-Path|Limit-EventLog|Move-Item|Move-ItemProperty|New-EventLog|New-Item|New-ItemProperty|New-PSDrive|New-Service|New-WebServiceProxy|Pop-Location|Push-Location|Register-WmiEvent|Remove-Computer|Remove-EventLog|Remove-Item|Remove-ItemProperty|Remove-PSDrive|Remove-WmiObject|Rename-Computer|Rename-Item|Rename-ItemProperty|Reset-ComputerMachinePassword|Resolve-Path|Restart-Computer|Restart-Service|Restore-Computer|Resume-Service|Set-Clipboard|Set-Content|Set-Item|Set-ItemProperty|Set-Location|Set-Service|Set-WmiInstance|Show-ControlPanelItem|Show-EventLog|Split-Path|Start-Process|Start-Service|Start-Transaction|Stop-Computer|Stop-Process|Stop-Service|Suspend-Service|Test-ComputerSecureChannel|Test-Connection|Test-Path|Undo-Transaction|Use-Transaction|Wait-Process|Write-EventLog|" +
        "Export-ODataEndpointProxy|" +
        "ConvertFrom-SecureString|ConvertTo-SecureString|Get-Acl|Get-AuthenticodeSignature|Get-CmsMessage|Get-Credential|Get-ExecutionPolicy|Get-PfxCertificate|Protect-CmsMessage|Set-Acl|Set-AuthenticodeSignature|Set-ExecutionPolicy|Unprotect-CmsMessage|" +
        "ConvertFrom-SddlString|Format-Hex|Get-FileHash|Import-PowerShellDataFile|New-Guid|New-TemporaryFile|Add-Member|Add-Type|Clear-Variable|Compare-Object|ConvertFrom-Csv|ConvertFrom-Json|ConvertFrom-String|ConvertFrom-StringData|Convert-String|ConvertTo-Csv|ConvertTo-Html|ConvertTo-Json|ConvertTo-Xml|Debug-Runspace|Disable-PSBreakpoint|Disable-RunspaceDebug|Enable-PSBreakpoint|Enable-RunspaceDebug|Export-Alias|Export-Clixml|Export-Csv|Export-FormatData|Export-PSSession|Format-Custom|Format-List|Format-Table|Format-Wide|Get-Alias|Get-Culture|Get-Date|Get-Event|Get-EventSubscriber|Get-FormatData|Get-Host|Get-Member|Get-PSBreakpoint|Get-PSCallStack|Get-Random|Get-Runspace|Get-RunspaceDebug|Get-TraceSource|Get-TypeData|Get-UICulture|Get-Unique|Get-Variable|Group-Object|Import-Alias|Import-Clixml|Import-Csv|Import-LocalizedData|Import-PSSession|Invoke-Expression|Invoke-RestMethod|Invoke-WebRequest|Measure-Command|Measure-Object|New-Alias|New-Event|New-Object|New-TimeSpan|New-Variable|Out-File|Out-GridView|Out-Printer|Out-String|Read-Host|Register-EngineEvent|Register-ObjectEvent|Remove-Event|Remove-PSBreakpoint|Remove-TypeData|Remove-Variable|Select-Object|Select-String|Select-Xml|Send-MailMessage|Set-Alias|Set-Date|Set-PSBreakpoint|Set-TraceSource|Set-Variable|Show-Command|Sort-Object|Start-Sleep|Tee-Object|Trace-Command|Unblock-File|Unregister-Event|Update-FormatData|Update-List|Update-TypeData|Wait-Debugger|Wait-Event|Write-Debug|Write-Error|Write-Host|Write-Information|Write-Output|Write-Progress|Write-Verbose|Write-Warning|" +
        "Connect-WSMan|Disable-WSManCredSSP|Disconnect-WSMan|Enable-WSManCredSSP|Get-WSManCredSSP|Get-WSManInstance|Invoke-WSManAction|New-WSManInstance|New-WSManSessionOption|Remove-WSManInstance|Set-WSManInstance|Set-WSManQuickConfig|Test-WSMan|" +
        "Debug-MMAppPrelaunch|Disable-MMAgent|Enable-MMAgent|Get-MMAgent|Set-MMAgent|" +
        "Clear-MSDSMSupportedHW|Disable-MSDSMAutomaticClaim|Enable-MSDSMAutomaticClaim|Get-MPIOAvailableHW|Get-MPIOSetting|Get-MSDSMAutomaticClaimSettings|Get-MSDSMGlobalDefaultLoadBalancePolicy|Get-MSDSMSupportedHW|New-MSDSMSupportedHW|Remove-MSDSMSupportedHW|Set-MPIOSetting|Set-MSDSMGlobalDefaultLoadBalancePolicy|Update-MPIOClaimedHW|" +
        "Add-DtcClusterTMMapping|Complete-DtcDiagnosticTransaction|Get-Dtc|Get-DtcAdvancedHostSetting|Get-DtcAdvancedSetting|Get-DtcClusterDefault|Get-DtcClusterTMMapping|Get-DtcDefault|Get-DtcLog|Get-DtcNetworkSetting|Get-DtcTransaction|Get-DtcTransactionsStatistics|Get-DtcTransactionsTraceSession|Get-DtcTransactionsTraceSetting|Install-Dtc|Join-DtcDiagnosticResourceManager|New-DtcDiagnosticTransaction|Receive-DtcDiagnosticTransaction|Remove-DtcClusterTMMapping|Reset-DtcLog|Send-DtcDiagnosticTransaction|Set-DtcAdvancedHostSetting|Set-DtcAdvancedSetting|Set-DtcClusterDefault|Set-DtcClusterTMMapping|Set-DtcDefault|Set-DtcLog|Set-DtcNetworkSetting|Set-DtcTransaction|Set-DtcTransactionsTraceSession|Set-DtcTransactionsTraceSetting|Start-Dtc|Start-DtcDiagnosticResourceManager|Start-DtcTransactionsTraceSession|Stop-Dtc|Stop-DtcDiagnosticResourceManager|Stop-DtcTransactionsTraceSession|Test-Dtc|Undo-DtcDiagnosticTransaction|Uninstall-Dtc|Write-DtcTransactionsTraceSession|" +
        "Clear-MSMQOutgoingQueue|Clear-MSMQQueue|Enable-MSMQCertificate|Get-MSMQCertificate|Get-MSMQOutgoingQueue|Get-MsmqQueue|Get-MsmqQueueACL|Get-MsmqQueueManager|Get-MsmqQueueManagerACL|Move-MsmqMessage|New-MsmqMessage|New-MsmqQueue|Receive-MsmqQueue|Remove-MsmqCertificate|Remove-MsmqQueue|Resume-MsmqOutgoingQueue|Send-MsmqQueue|Set-MsmqQueue|Set-MsmqQueueACL|Set-MsmqQueueManager|Set-MsmqQueueManagerACL|Suspend-MsmqOutgoingQueue|" +
        "Add-WmsSystem|Clear-WmsStation|Close-WmsApp|Close-WmsSession|Disable-WmsDiskProtection|Disable-WmsScheduledUpdate|Disable-WmsWebLimiting|Disconnect-WmsSession|Enable-WmsDiskProtection|Enable-WmsScheduledUpdate|Enable-WmsWebLimiting|Get-WmsAlert|Get-WmsApp|Get-WmsDiskProtection|Get-WmsScheduledUpdate|Get-WmsSession|Get-WmsStation|Get-WmsSystem|Get-WmsUser|Get-WmsVersion|Get-WmsWebLimiting|Hide-WmsIdentifier|Join-WmsStation|Lock-WmsSession|Lock-WmsUsbStorage|New-WmsUser|Open-WmsApp|Publish-WmsDesktop|Remove-WmsSystem|Remove-WmsUser|Restart-WmsSystem|Resume-WmsDiskProtection|Search-WmsSystem|Set-WmsScheduledUpdate|Set-WmsStation|Set-WmsSystem|Set-WmsUser|Set-WmsWebLimiting|Show-WmsDesktop|Show-WmsIdentifier|Split-WmsStation|Stop-WmsSystem|Suspend-WmsDiskProtection|Unlock-WmsSession|Unlock-WmsUsbStorage|Unpublish-WmsDesktop|Update-WmsStation|" +
        "Disable-WmsVirtualDesktopRole|Enable-WmsVirtualDesktopRole|Get-WmsVirtualDesktop|Import-WmsVirtualDesktop|New-WmsVirtualDesktop|New-WmsVirtualDesktopTemplate|Open-WmsVirtualDesktop|" +
        "Edit-NanoServerImage|Get-NanoServerPackage|New-NanoServerImage|" +
        "Disable-NetAdapter|Disable-NetAdapterBinding|Disable-NetAdapterChecksumOffload|Disable-NetAdapterEncapsulatedPacketTaskOffload|Disable-NetAdapterIPsecOffload|Disable-NetAdapterLso|Disable-NetAdapterPowerManagement|Disable-NetAdapterQos|Disable-NetAdapterRdma|Disable-NetAdapterRsc|Disable-NetAdapterRss|Disable-NetAdapterSriov|Disable-NetAdapterUso|Disable-NetAdapterVmq|Enable-NetAdapter|Enable-NetAdapterBinding|Enable-NetAdapterChecksumOffload|Enable-NetAdapterEncapsulatedPacketTaskOffload|Enable-NetAdapterIPsecOffload|Enable-NetAdapterLso|Enable-NetAdapterPowerManagement|Enable-NetAdapterQos|Enable-NetAdapterRdma|Enable-NetAdapterRsc|Enable-NetAdapterRss|Enable-NetAdapterSriov|Enable-NetAdapterUso|Enable-NetAdapterVmq|Get-NetAdapter|Get-NetAdapterAdvancedProperty|Get-NetAdapterBinding|Get-NetAdapterChecksumOffload|Get-NetAdapterDataPathConfiguration|Get-NetAdapterEncapsulatedPacketTaskOffload|Get-NetAdapterHardwareInfo|Get-NetAdapterIPsecOffload|Get-NetAdapterLso|Get-NetAdapterPowerManagement|Get-NetAdapterQos|Get-NetAdapterRdma|Get-NetAdapterRsc|Get-NetAdapterRss|Get-NetAdapterSriov|Get-NetAdapterSriovVf|Get-NetAdapterStatistics|Get-NetAdapterUso|Get-NetAdapterVmq|Get-NetAdapterVmqQueue|Get-NetAdapterVPort|New-NetAdapterAdvancedProperty|Remove-NetAdapterAdvancedProperty|Rename-NetAdapter|Reset-NetAdapterAdvancedProperty|Restart-NetAdapter|Set-NetAdapter|Set-NetAdapterAdvancedProperty|Set-NetAdapterBinding|Set-NetAdapterChecksumOffload|Set-NetAdapterDataPathConfiguration|Set-NetAdapterEncapsulatedPacketTaskOffload|Set-NetAdapterIPsecOffload|Set-NetAdapterLso|Set-NetAdapterPowerManagement|Set-NetAdapterQos|Set-NetAdapterRdma|Set-NetAdapterRsc|Set-NetAdapterRss|Set-NetAdapterSriov|Set-NetAdapterUso|Set-NetAdapterVmq|" +
        "Get-NetConnectionProfile|Set-NetConnectionProfile|" +
        "Add-NetEventNetworkAdapter|Add-NetEventPacketCaptureProvider|Add-NetEventProvider|Add-NetEventVFPProvider|Add-NetEventVmNetworkAdapter|Add-NetEventVmSwitch|Add-NetEventVmSwitchProvider|Add-NetEventWFPCaptureProvider|Get-NetEventNetworkAdapter|Get-NetEventPacketCaptureProvider|Get-NetEventProvider|Get-NetEventSession|Get-NetEventVFPProvider|Get-NetEventVmNetworkAdapter|Get-NetEventVmSwitch|Get-NetEventVmSwitchProvider|Get-NetEventWFPCaptureProvider|New-NetEventSession|Remove-NetEventNetworkAdapter|Remove-NetEventPacketCaptureProvider|Remove-NetEventProvider|Remove-NetEventSession|Remove-NetEventVFPProvider|Remove-NetEventVmNetworkAdapter|Remove-NetEventVmSwitch|Remove-NetEventVmSwitchProvider|Remove-NetEventWFPCaptureProvider|Set-NetEventPacketCaptureProvider|Set-NetEventProvider|Set-NetEventSession|Set-NetEventVFPProvider|Set-NetEventVmSwitchProvider|Set-NetEventWFPCaptureProvider|Start-NetEventSession|Stop-NetEventSession|" +
        "Add-NetLbfoTeamMember|Add-NetLbfoTeamNic|Get-NetLbfoTeam|Get-NetLbfoTeamMember|Get-NetLbfoTeamNic|New-NetLbfoTeam|Remove-NetLbfoTeam|Remove-NetLbfoTeamMember|Remove-NetLbfoTeamNic|Rename-NetLbfoTeam|Set-NetLbfoTeam|Set-NetLbfoTeamMember|Set-NetLbfoTeamNic|" +
        "Disable-NetLldpAgent|Enable-NetLldpAgent|Get-NetLldpAgent|" +
        "Add-NetNatExternalAddress|Add-NetNatStaticMapping|Get-NetNat|Get-NetNatExternalAddress|Get-NetNatGlobal|Get-NetNatSession|Get-NetNatStaticMapping|New-NetNat|Remove-NetNat|Remove-NetNatExternalAddress|Remove-NetNatStaticMapping|Set-NetNat|Set-NetNatGlobal|" +
        "Get-NetQosPolicy|New-NetQosPolicy|Remove-NetQosPolicy|Set-NetQosPolicy|" +
        "Copy-NetFirewallRule|Copy-NetIPsecMainModeCryptoSet|Copy-NetIPsecMainModeRule|Copy-NetIPsecPhase1AuthSet|Copy-NetIPsecPhase2AuthSet|Copy-NetIPsecQuickModeCryptoSet|Copy-NetIPsecRule|Disable-NetFirewallRule|Disable-NetIPsecMainModeRule|Disable-NetIPsecRule|Enable-NetFirewallRule|Enable-NetIPsecMainModeRule|Enable-NetIPsecRule|Find-NetIPsecRule|Get-DAPolicyChange|Get-NetFirewallAddressFilter|Get-NetFirewallApplicationFilter|Get-NetFirewallDynamicKeywordAddress|Get-NetFirewallInterfaceFilter|Get-NetFirewallInterfaceTypeFilter|Get-NetFirewallPortFilter|Get-NetFirewallProfile|Get-NetFirewallRule|Get-NetFirewallSecurityFilter|Get-NetFirewallServiceFilter|Get-NetFirewallSetting|Get-NetIPsecDospSetting|Get-NetIPsecMainModeCryptoSet|Get-NetIPsecMainModeRule|Get-NetIPsecMainModeSA|Get-NetIPsecPhase1AuthSet|Get-NetIPsecPhase2AuthSet|Get-NetIPsecQuickModeCryptoSet|Get-NetIPsecQuickModeSA|Get-NetIPsecRule|New-NetFirewallDynamicKeywordAddress|New-NetFirewallRule|New-NetIPsecAuthProposal|New-NetIPsecDospSetting|New-NetIPsecMainModeCryptoProposal|New-NetIPsecMainModeCryptoSet|New-NetIPsecMainModeRule|New-NetIPsecPhase1AuthSet|New-NetIPsecPhase2AuthSet|New-NetIPsecQuickModeCryptoProposal|New-NetIPsecQuickModeCryptoSet|New-NetIPsecRule|Open-NetGPO|Remove-NetFirewallDynamicKeywordAddress|Remove-NetFirewallRule|Remove-NetIPsecDospSetting|Remove-NetIPsecMainModeCryptoSet|Remove-NetIPsecMainModeRule|Remove-NetIPsecMainModeSA|Remove-NetIPsecPhase1AuthSet|Remove-NetIPsecPhase2AuthSet|Remove-NetIPsecQuickModeCryptoSet|Remove-NetIPsecQuickModeSA|Remove-NetIPsecRule|Rename-NetFirewallRule|Rename-NetIPsecMainModeCryptoSet|Rename-NetIPsecMainModeRule|Rename-NetIPsecPhase1AuthSet|Rename-NetIPsecPhase2AuthSet|Rename-NetIPsecQuickModeCryptoSet|Rename-NetIPsecRule|Save-NetGPO|Set-NetFirewallAddressFilter|Set-NetFirewallApplicationFilter|Set-NetFirewallInterfaceFilter|Set-NetFirewallInterfaceTypeFilter|Set-NetFirewallPortFilter|Set-NetFirewallProfile|Set-NetFirewallRule|Set-NetFirewallSecurityFilter|Set-NetFirewallServiceFilter|Set-NetFirewallSetting|Set-NetIPsecDospSetting|Set-NetIPsecMainModeCryptoSet|Set-NetIPsecMainModeRule|Set-NetIPsecPhase1AuthSet|Set-NetIPsecPhase2AuthSet|Set-NetIPsecQuickModeCryptoSet|Set-NetIPsecRule|Show-NetFirewallRule|Show-NetIPsecRule|Sync-NetIPsecRule|Update-NetFirewallDynamicKeywordAddress|Update-NetIPsecRule|" +
        "Add-NetSwitchTeamMember|Get-NetSwitchTeam|Get-NetSwitchTeamMember|New-NetSwitchTeam|Remove-NetSwitchTeam|Remove-NetSwitchTeamMember|Rename-NetSwitchTeam|" +
        "Find-NetRoute|Get-NetCompartment|Get-NetIPAddress|Get-NetIPConfiguration|Get-NetIPInterface|Get-NetIPv4Protocol|Get-NetIPv6Protocol|Get-NetNeighbor|Get-NetOffloadGlobalSetting|Get-NetPrefixPolicy|Get-NetRoute|Get-NetTCPConnection|Get-NetTCPSetting|Get-NetTransportFilter|Get-NetUDPEndpoint|Get-NetUDPSetting|New-NetIPAddress|New-NetNeighbor|New-NetRoute|New-NetTransportFilter|Remove-NetIPAddress|Remove-NetNeighbor|Remove-NetRoute|Remove-NetTransportFilter|Set-NetIPAddress|Set-NetIPInterface|Set-NetIPv4Protocol|Set-NetIPv6Protocol|Set-NetNeighbor|Set-NetOffloadGlobalSetting|Set-NetRoute|Set-NetTCPSetting|Set-NetUDPSetting|Test-NetConnection|" +
        "Get-NetVirtualizationCustomerRoute|Get-NetVirtualizationGlobal|Get-NetVirtualizationLookupRecord|Get-NetVirtualizationProviderAddress|Get-NetVirtualizationProviderRoute|New-NetVirtualizationCustomerRoute|New-NetVirtualizationLookupRecord|New-NetVirtualizationProviderAddress|New-NetVirtualizationProviderRoute|Remove-NetVirtualizationCustomerRoute|Remove-NetVirtualizationLookupRecord|Remove-NetVirtualizationProviderAddress|Remove-NetVirtualizationProviderRoute|Select-NetVirtualizationNextHop|Set-NetVirtualizationCustomerRoute|Set-NetVirtualizationGlobal|Set-NetVirtualizationLookupRecord|Set-NetVirtualizationProviderAddress|Set-NetVirtualizationProviderRoute|" +
        "Get-DAConnectionStatus|Get-NCSIPolicyConfiguration|Reset-NCSIPolicyConfiguration|Set-NCSIPolicyConfiguration|" +
        "Add-NetworkControllerNode|Clear-NetworkControllerNodeContent|Disable-NetworkControllerNode|Enable-NetworkControllerNode|Get-NetworkController|Get-NetworkControllerAccessControlList|Get-NetworkControllerAccessControlListRule|Get-NetworkControllerAuditingSettingsConfiguration|Get-NetworkControllerBackup|Get-NetworkControllerCluster|Get-NetworkControllerConnectivityCheck|Get-NetworkControllerConnectivityCheckResult|Get-NetworkControllerCredential|Get-NetworkControllerDiagnostic|Get-NetworkControllerDiscovery|Get-NetworkControllerFabricRoute|Get-NetworkControllerGateway|Get-NetworkControllerGatewayPool|Get-NetworkControllerIDnsServerConfiguration|Get-NetworkControllerInternalResourceInstances|Get-NetworkControllerIpPool|Get-NetworkControllerIpReservation|Get-NetworkControllerLoadBalancer|Get-NetworkControllerLoadBalancerBackendAddressPool|Get-NetworkControllerLoadBalancerConfiguration|Get-NetworkControllerLoadBalancerFrontendIpConfiguration|Get-NetworkControllerLoadBalancerInboundNatRule|Get-NetworkControllerLoadBalancerMux|Get-NetworkControllerLoadBalancerOutboundNatRule|Get-NetworkControllerLoadBalancerProbe|Get-NetworkControllerLoadBalancingRule|Get-NetworkControllerLogicalNetwork|Get-NetworkControllerLogicalSubnet|Get-NetworkControllerMacPool|Get-NetworkControllerNetworkInterface|Get-NetworkControllerNetworkInterfaceIpConfiguration|Get-NetworkControllerNode|Get-NetworkControllerPublicIpAddress|Get-NetworkControllerRestore|Get-NetworkControllerRoute|Get-NetworkControllerRouteTable|Get-NetworkControllerServer|Get-NetworkControllerServerInterface|Get-NetworkControllerServiceInsertion|Get-NetworkControllerState|Get-NetworkControllerStatistics|Get-NetworkControllerSubnetEgressReset|Get-NetworkControllerVirtualGateway|Get-NetworkControllerVirtualGatewayBgpPeer|Get-NetworkControllerVirtualGatewayBgpRouter|Get-NetworkControllerVirtualGatewayNetworkConnection|Get-NetworkControllerVirtualGatewayPolicyMap|Get-NetworkControllerVirtualNetwork|Get-NetworkControllerVirtualNetworkConfiguration|Get-NetworkControllerVirtualNetworkPeering|Get-NetworkControllerVirtualServer|Get-NetworkControllerVirtualSubnet|Get-NetworkControllerVirtualSwitchConfiguration|Install-NetworkController|Install-NetworkControllerCluster|Invoke-NetworkControllerConnectivityCheck|Invoke-NetworkControllerState|Invoke-NetworkControllerSubnetEgressReset|New-NetworkControllerAccessControlList|New-NetworkControllerAccessControlListRule|New-NetworkControllerBackup|New-NetworkControllerCredential|New-NetworkControllerFabricRoute|New-NetworkControllerGateway|New-NetworkControllerGatewayPool|New-NetworkControllerIDnsServerConfiguration|New-NetworkControllerIpPool|New-NetworkControllerIpReservation|New-NetworkControllerLoadBalancer|New-NetworkControllerLoadBalancerBackendAddressPool|New-NetworkControllerLoadBalancerConfiguration|New-NetworkControllerLoadBalancerFrontendIpConfiguration|New-NetworkControllerLoadBalancerInboundNatRule|New-NetworkControllerLoadBalancerMux|New-NetworkControllerLoadBalancerOutboundNatRule|New-NetworkControllerLoadBalancerProbe|New-NetworkControllerLoadBalancingRule|New-NetworkControllerLogicalNetwork|New-NetworkControllerLogicalSubnet|New-NetworkControllerMacPool|New-NetworkControllerNetworkInterface|New-NetworkControllerNetworkInterfaceIpConfiguration|New-NetworkControllerNodeObject|New-NetworkControllerPublicIpAddress|New-NetworkControllerRestore|New-NetworkControllerRoute|New-NetworkControllerRouteTable|New-NetworkControllerServer|New-NetworkControllerServerInterface|New-NetworkControllerServiceInsertion|New-NetworkControllerVirtualGateway|New-NetworkControllerVirtualGatewayBgpPeer|New-NetworkControllerVirtualGatewayBgpRouter|New-NetworkControllerVirtualGatewayNetworkConnection|New-NetworkControllerVirtualGatewayPolicyMap|New-NetworkControllerVirtualNetwork|New-NetworkControllerVirtualNetworkPeering|New-NetworkControllerVirtualServer|New-NetworkControllerVirtualSubnet|Remove-NetworkControllerAccessControlList|Remove-NetworkControllerAccessControlListRule|Remove-NetworkControllerBackup|Remove-NetworkControllerCredential|Remove-NetworkControllerFabricRoute|Remove-NetworkControllerGateway|Remove-NetworkControllerGatewayPool|Remove-NetworkControllerIpPool|Remove-NetworkControllerIpReservation|Remove-NetworkControllerLoadBalancer|Remove-NetworkControllerLoadBalancerBackendAddressPool|Remove-NetworkControllerLoadBalancerConfiguration|Remove-NetworkControllerLoadBalancerFrontendIpConfiguration|Remove-NetworkControllerLoadBalancerInboundNatRule|Remove-NetworkControllerLoadBalancerMux|Remove-NetworkControllerLoadBalancerOutboundNatRule|Remove-NetworkControllerLoadBalancerProbe|Remove-NetworkControllerLoadBalancingRule|Remove-NetworkControllerLogicalNetwork|Remove-NetworkControllerLogicalSubnet|Remove-NetworkControllerMacPool|Remove-NetworkControllerNetworkInterface|Remove-NetworkControllerNetworkInterfaceIpConfiguration|Remove-NetworkControllerNode|Remove-NetworkControllerPublicIpAddress|Remove-NetworkControllerRestore|Remove-NetworkControllerRoute|Remove-NetworkControllerRouteTable|Remove-NetworkControllerServer|Remove-NetworkControllerServerInterface|Remove-NetworkControllerServiceInsertion|Remove-NetworkControllerVirtualGateway|Remove-NetworkControllerVirtualGatewayBgpPeer|Remove-NetworkControllerVirtualGatewayBgpRouter|Remove-NetworkControllerVirtualGatewayNetworkConnection|Remove-NetworkControllerVirtualGatewayPolicyMap|Remove-NetworkControllerVirtualNetwork|Remove-NetworkControllerVirtualNetworkPeering|Remove-NetworkControllerVirtualServer|Remove-NetworkControllerVirtualSubnet|Repair-NetworkControllerCluster|Set-NetworkController|Set-NetworkControllerAuditingSettingsConfiguration|Set-NetworkControllerCluster|Set-NetworkControllerDiagnostic|Set-NetworkControllerNode|Set-NetworkControllerVirtualNetworkConfiguration|Set-NetworkControllerVirtualSwitchConfiguration|Uninstall-NetworkController|Uninstall-NetworkControllerCluster|Update-NetworkController|" +
        "Debug-NetworkController|Debug-NetworkControllerConfigurationState|Debug-ServiceFabricNodeStatus|Get-NetworkControllerDeploymentInfo|Get-NetworkControllerManagedDevices|Get-NetworkControllerReplica|" +
        "Add-NlbClusterNode|Add-NlbClusterNodeDip|Add-NlbClusterPortRule|Add-NlbClusterVip|Disable-NlbClusterPortRule|Enable-NlbClusterPortRule|Get-NlbCluster|Get-NlbClusterDriverInfo|Get-NlbClusterNode|Get-NlbClusterNodeDip|Get-NlbClusterNodeNetworkInterface|Get-NlbClusterPortRule|Get-NlbClusterVip|New-NlbCluster|New-NlbClusterIpv6Address|Remove-NlbCluster|Remove-NlbClusterNode|Remove-NlbClusterNodeDip|Remove-NlbClusterPortRule|Remove-NlbClusterVip|Resume-NlbCluster|Resume-NlbClusterNode|Set-NlbCluster|Set-NlbClusterNode|Set-NlbClusterNodeDip|Set-NlbClusterPortRule|Set-NlbClusterPortRuleNodeHandlingPriority|Set-NlbClusterPortRuleNodeWeight|Set-NlbClusterVip|Start-NlbCluster|Start-NlbClusterNode|Stop-NlbCluster|Stop-NlbClusterNode|Suspend-NlbCluster|Suspend-NlbClusterNode|" +
        "Disable-NetworkSwitchEthernetPort|Disable-NetworkSwitchFeature|Disable-NetworkSwitchVlan|Enable-NetworkSwitchEthernetPort|Enable-NetworkSwitchFeature|Enable-NetworkSwitchVlan|Get-NetworkSwitchEthernetPort|Get-NetworkSwitchFeature|Get-NetworkSwitchGlobalData|Get-NetworkSwitchVlan|New-NetworkSwitchVlan|Remove-NetworkSwitchEthernetPortIPAddress|Remove-NetworkSwitchVlan|Restore-NetworkSwitchConfiguration|Save-NetworkSwitchConfiguration|Set-NetworkSwitchEthernetPortIPAddress|Set-NetworkSwitchPortMode|Set-NetworkSwitchPortProperty|Set-NetworkSwitchVlanProperty|" +
        "Add-NetIPHttpsCertBinding|Disable-NetDnsTransitionConfiguration|Disable-NetIPHttpsProfile|Disable-NetNatTransitionConfiguration|Enable-NetDnsTransitionConfiguration|Enable-NetIPHttpsProfile|Enable-NetNatTransitionConfiguration|Get-Net6to4Configuration|Get-NetDnsTransitionConfiguration|Get-NetDnsTransitionMonitoring|Get-NetIPHttpsConfiguration|Get-NetIPHttpsState|Get-NetIsatapConfiguration|Get-NetNatTransitionConfiguration|Get-NetNatTransitionMonitoring|Get-NetTeredoConfiguration|Get-NetTeredoState|New-NetIPHttpsConfiguration|New-NetNatTransitionConfiguration|Remove-NetIPHttpsCertBinding|Remove-NetIPHttpsConfiguration|Remove-NetNatTransitionConfiguration|Rename-NetIPHttpsConfiguration|Reset-Net6to4Configuration|Reset-NetDnsTransitionConfiguration|Reset-NetIPHttpsConfiguration|Reset-NetIsatapConfiguration|Reset-NetTeredoConfiguration|Set-Net6to4Configuration|Set-NetDnsTransitionConfiguration|Set-NetIPHttpsConfiguration|Set-NetIsatapConfiguration|Set-NetNatTransitionConfiguration|Set-NetTeredoConfiguration|" +
        "Disconnect-NfsSession|Get-NfsClientConfiguration|Get-NfsClientgroup|Get-NfsClientLock|Get-NfsMappedIdentity|Get-NfsMappingStore|Get-NfsMountedClient|Get-NfsNetgroup|Get-NfsNetgroupStore|Get-NfsOpenFile|Get-NfsServerConfiguration|Get-NfsSession|Get-NfsShare|Get-NfsSharePermission|Get-NfsStatistics|Grant-NfsSharePermission|Install-NfsMappingStore|New-NfsClientgroup|New-NfsMappedIdentity|New-NfsNetgroup|New-NfsShare|Remove-NfsClientgroup|Remove-NfsMappedIdentity|Remove-NfsNetgroup|Remove-NfsShare|Rename-NfsClientgroup|Reset-NfsStatistics|Resolve-NfsMappedIdentity|Revoke-NfsClientLock|Revoke-NfsMountedClient|Revoke-NfsOpenFile|Revoke-NfsSharePermission|Set-NfsClientConfiguration|Set-NfsClientgroup|Set-NfsMappedIdentity|Set-NfsMappingStore|Set-NfsNetgroup|Set-NfsNetgroupStore|Set-NfsServerConfiguration|Set-NfsShare|Test-NfsMappedIdentity|Test-NfsMappingStore|" +
        "Export-NpsConfiguration|Get-NpsRadiusClient|Get-NpsSharedSecretTemplate|Import-NpsConfiguration|New-NpsRadiusClient|Remove-NpsRadiusClient|Set-NpsRadiusClient|" +
        "Find-Package|Find-PackageProvider|Get-Package|Get-PackageProvider|Get-PackageSource|Import-PackageProvider|Install-Package|Install-PackageProvider|Register-PackageSource|Save-Package|Set-PackageSource|Uninstall-Package|Unregister-PackageSource|" +
        "Clear-PcsvDeviceLog|Get-PcsvDevice|Get-PcsvDeviceLog|Restart-PcsvDevice|Set-PcsvDeviceBootConfiguration|Set-PcsvDeviceNetworkConfiguration|Set-PcsvDeviceUserPassword|Start-PcsvDevice|Stop-PcsvDevice|" +
        "Get-PmemDedicatedMemory|Get-PmemDisk|Get-PmemPhysicalDevice|Get-PmemUnusedRegion|Initialize-PmemPhysicalDevice|New-PmemDedicatedMemory|New-PmemDisk|Remove-PmemDedicatedMemory|Remove-PmemDisk|" +
        "AfterAll|AfterEach|Assert-MockCalled|Assert-VerifiableMocks|BeforeAll|BeforeEach|Context|Describe|Get-MockDynamicParameters|Get-TestDriveItem|In|InModuleScope|Invoke-Mock|Invoke-Pester|It|Mock|New-Fixture|Set-DynamicParameterVariables|Setup|Should|" +
        "Add-CertificateEnrollmentPolicyServer|Export-Certificate|Export-PfxCertificate|Get-Certificate|Get-CertificateAutoEnrollmentPolicy|Get-CertificateEnrollmentPolicyServer|Get-CertificateNotificationTask|Get-PfxData|Import-Certificate|Import-PfxCertificate|New-CertificateNotificationTask|New-SelfSignedCertificate|Remove-CertificateEnrollmentPolicyServer|Remove-CertificateNotificationTask|Set-CertificateAutoEnrollmentPolicy|Switch-Certificate|Test-Certificate|" +
        "Get-PlatformIdentifier|" +
        "Disable-PnpDevice|Enable-PnpDevice|Get-PnpDevice|Get-PnpDeviceProperty|" +
        "Find-DscResource|Find-Module|Find-Script|Get-InstalledModule|Get-InstalledScript|Get-PSRepository|Install-Module|Install-Script|New-ScriptFileInfo|Publish-Module|Publish-Script|Register-PSRepository|Save-Module|Save-Script|Set-PSRepository|Test-ScriptFileInfo|Uninstall-Module|Uninstall-Script|Unregister-PSRepository|Update-Module|Update-ModuleManifest|Update-Script|Update-ScriptFileInfo|" +
        "Add-Printer|Add-PrinterDriver|Add-PrinterPort|Get-PrintConfiguration|Get-Printer|Get-PrinterDriver|Get-PrinterPort|Get-PrinterProperty|Get-PrintJob|Read-PrinterNfcTag|Remove-Printer|Remove-PrinterDriver|Remove-PrinterPort|Remove-PrintJob|Rename-Printer|Restart-PrintJob|Resume-PrintJob|Set-PrintConfiguration|Set-Printer|Set-PrinterProperty|Suspend-PrintJob|Write-PrinterNfcTag|" +
        "ConvertTo-ProcessMitigationPolicy|Get-ProcessMitigation|Set-ProcessMitigation|" +
        "Export-ProvisioningPackage|Export-Trace|Get-ProvisioningPackage|Get-TrustedProvisioningCertificate|Install-ProvisioningPackage|Install-TrustedProvisioningCertificate|Uninstall-ProvisioningPackage|Uninstall-TrustedProvisioningCertificate|" +
        "Configuration|Disable-DscDebug|Enable-DscDebug|Get-DscConfiguration|Get-DscConfigurationStatus|Get-DscLocalConfigurationManager|Get-DscResource|New-DscChecksum|Remove-DscConfigurationDocument|Restore-DscConfiguration|Stop-DscConfiguration|Invoke-DscResource|Publish-DscConfiguration|Set-DscLocalConfigurationManager|Start-DscConfiguration|Test-DscConfiguration|Update-DscConfiguration|" +
        "Disable-PSTrace|Disable-PSWSManCombinedTrace|Disable-WSManTrace|Enable-PSTrace|Enable-PSWSManCombinedTrace|Enable-WSManTrace|Get-LogProperties|Set-LogProperties|Start-Trace|Stop-Trace|" +
        "PSConsoleHostReadline|Get-PSReadlineKeyHandler|Get-PSReadlineOption|Remove-PSReadlineKeyHandler|Set-PSReadlineKeyHandler|Set-PSReadlineOption|" +
        "Add-JobTrigger|Disable-JobTrigger|Disable-ScheduledJob|Enable-JobTrigger|Enable-ScheduledJob|Get-JobTrigger|Get-ScheduledJob|Get-ScheduledJobOption|New-JobTrigger|New-ScheduledJobOption|Register-ScheduledJob|Remove-JobTrigger|Set-JobTrigger|Set-ScheduledJob|Set-ScheduledJobOption|Unregister-ScheduledJob|" +
        "New-PSWorkflowSession|New-PSWorkflowExecutionOption|" +
        "Invoke-AsWorkflow|" +
        "Add-RDServer|Add-RDSessionHost|Add-RDVirtualDesktopToCollection|Disable-RDVirtualDesktopADMachineAccountReuse|Disconnect-RDUser|Enable-RDVirtualDesktopADMachineAccountReuse|Export-RDPersonalSessionDesktopAssignment|Export-RDPersonalVirtualDesktopAssignment|Get-RDAvailableApp|Get-RDCertificate|Get-RDConnectionBrokerHighAvailability|Get-RDDeploymentGatewayConfiguration|Get-RDFileTypeAssociation|Get-RDLicenseConfiguration|Get-RDPersonalSessionDesktopAssignment|Get-RDPersonalVirtualDesktopAssignment|Get-RDPersonalVirtualDesktopPatchSchedule|Get-RDRemoteApp|Get-RDRemoteDesktop|Get-RDServer|Get-RDSessionCollection|Get-RDSessionCollectionConfiguration|Get-RDSessionHost|Get-RDUserSession|Get-RDVirtualDesktop|Get-RDVirtualDesktopCollection|Get-RDVirtualDesktopCollectionConfiguration|Get-RDVirtualDesktopCollectionJobStatus|Get-RDVirtualDesktopConcurrency|Get-RDVirtualDesktopIdleCount|Get-RDVirtualDesktopTemplateExportPath|Get-RDWorkspace|Grant-RDOUAccess|Import-RDPersonalSessionDesktopAssignment|Import-RDPersonalVirtualDesktopAssignment|Invoke-RDUserLogoff|Move-RDVirtualDesktop|New-RDCertificate|New-RDPersonalVirtualDesktopPatchSchedule|New-RDRemoteApp|New-RDSessionCollection|New-RDSessionDeployment|New-RDVirtualDesktopCollection|New-RDVirtualDesktopDeployment|Remove-RDDatabaseConnectionString|Remove-RDPersonalSessionDesktopAssignment|Remove-RDPersonalVirtualDesktopAssignment|Remove-RDPersonalVirtualDesktopPatchSchedule|Remove-RDRemoteApp|Remove-RDServer|Remove-RDSessionCollection|Remove-RDSessionHost|Remove-RDVirtualDesktopCollection|Remove-RDVirtualDesktopFromCollection|Send-RDUserMessage|Set-RDActiveManagementServer|Set-RDCertificate|Set-RDClientAccessName|Set-RDConnectionBrokerHighAvailability|Set-RDDatabaseConnectionString|Set-RDDeploymentGatewayConfiguration|Set-RDFileTypeAssociation|Set-RDLicenseConfiguration|Set-RDPersonalSessionDesktopAssignment|Set-RDPersonalVirtualDesktopAssignment|Set-RDPersonalVirtualDesktopPatchSchedule|Set-RDRemoteApp|Set-RDRemoteDesktop|Set-RDSessionCollectionConfiguration|Set-RDSessionHost|Set-RDVirtualDesktopCollectionConfiguration|Set-RDVirtualDesktopConcurrency|Set-RDVirtualDesktopIdleCount|Set-RDVirtualDesktopTemplateExportPath|Set-RDWorkspace|Stop-RDVirtualDesktopCollectionJob|Test-RDOUAccess|Test-RDVirtualDesktopADMachineAccountReuse|Update-RDVirtualDesktopCollection|" +
        "Add-BgpCustomRoute|Add-BgpPeer|Add-BgpRouteAggregate|Add-BgpRouter|Add-BgpRoutingPolicy|Add-BgpRoutingPolicyForPeer|Add-DAAppServer|Add-DAClient|Add-DAClientDnsConfiguration|Add-DAEntryPoint|Add-DAMgmtServer|Add-RemoteAccessIpFilter|Add-RemoteAccessLoadBalancerNode|Add-RemoteAccessRadius|Add-VpnIPAddressRange|Add-VpnS2SInterface|Add-VpnSstpProxyRule|Clear-BgpRouteFlapDampening|Clear-RemoteAccessInboxAccountingStore|Clear-VpnS2SInterfaceStatistics|Connect-VpnS2SInterface|Disable-BgpRouteFlapDampening|Disable-DAMultiSite|Disable-DAOtpAuthentication|Disable-RemoteAccessRoutingDomain|Disconnect-VpnS2SInterface|Disconnect-VpnUser|Enable-BgpRouteFlapDampening|Enable-DAMultiSite|Enable-DAOtpAuthentication|Enable-RemoteAccessRoutingDomain|Get-BgpCustomRoute|Get-BgpPeer|Get-BgpRouteAggregate|Get-BgpRouteFlapDampening|Get-BgpRouteInformation|Get-BgpRouter|Get-BgpRoutingPolicy|Get-BgpStatistics|Get-DAAppServer|Get-DAClient|Get-DAClientDnsConfiguration|Get-DAEntryPoint|Get-DAEntryPointDC|Get-DAMgmtServer|Get-DAMultiSite|Get-DANetworkLocationServer|Get-DAOtpAuthentication|Get-DAServer|Get-RemoteAccess|Get-RemoteAccessAccounting|Get-RemoteAccessConfiguration|Get-RemoteAccessConnectionStatistics|Get-RemoteAccessConnectionStatisticsSummary|Get-RemoteAccessHealth|Get-RemoteAccessIpFilter|Get-RemoteAccessLoadBalancer|Get-RemoteAccessRadius|Get-RemoteAccessRoutingDomain|Get-RemoteAccessUserActivity|Get-RoutingProtocolPreference|Get-VpnAuthProtocol|Get-VpnS2SInterface|Get-VpnS2SInterfaceStatistics|Get-VpnServerConfiguration|Get-VpnSstpProxyRule|Install-RemoteAccess|New-VpnSstpProxyRule|New-VpnTrafficSelector|Remove-BgpCustomRoute|Remove-BgpPeer|Remove-BgpRouteAggregate|Remove-BgpRouter|Remove-BgpRoutingPolicy|Remove-BgpRoutingPolicyForPeer|Remove-DAAppServer|Remove-DAClient|Remove-DAClientDnsConfiguration|Remove-DAEntryPoint|Remove-DAMgmtServer|Remove-RemoteAccessIpFilter|Remove-RemoteAccessLoadBalancerNode|Remove-RemoteAccessRadius|Remove-VpnIPAddressRange|Remove-VpnS2SInterface|Remove-VpnSstpProxyRule|Set-BgpPeer|Set-BgpRouteAggregate|Set-BgpRouteFlapDampening|Set-BgpRouter|Set-BgpRoutingPolicy|Set-BgpRoutingPolicyForPeer|Set-DAAppServerConnection|Set-DAClient|Set-DAClientDnsConfiguration|Set-DAEntryPoint|Set-DAEntryPointDC|Set-DAMultiSite|Set-DANetworkLocationServer|Set-DAOtpAuthentication|Set-DAServer|Set-RemoteAccess|Set-RemoteAccessAccounting|Set-RemoteAccessConfiguration|Set-RemoteAccessInboxAccountingStore|Set-RemoteAccessIpFilter|Set-RemoteAccessLoadBalancer|Set-RemoteAccessRadius|Set-RemoteAccessRoutingDomain|Set-RoutingProtocolPreference|Set-VpnAuthProtocol|Set-VpnAuthType|Set-VpnIPAddressAssignment|Set-VpnS2SInterface|Set-VpnServerConfiguration|Set-VpnSstpProxyRule|Start-BgpPeer|Stop-BgpPeer|Uninstall-RemoteAccess|Update-DAMgmtServer|" +
        "Convert-License|" +
        "Disable-ScheduledTask|Enable-ScheduledTask|Export-ScheduledTask|Get-ClusteredScheduledTask|Get-ScheduledTask|Get-ScheduledTaskInfo|New-ScheduledTask|New-ScheduledTaskAction|New-ScheduledTaskPrincipal|New-ScheduledTaskSettingsSet|New-ScheduledTaskTrigger|Register-ClusteredScheduledTask|Register-ScheduledTask|Set-ClusteredScheduledTask|Set-ScheduledTask|Start-ScheduledTask|Stop-ScheduledTask|Unregister-ClusteredScheduledTask|Unregister-ScheduledTask|" +
        "Confirm-SecureBootUEFI|Format-SecureBootUEFI|Get-SecureBootPolicy|Get-SecureBootUEFI|Set-SecureBootUEFI|" +
        "Get-DisplayResolution|Set-DisplayResolution|" +
        "Disable-ServerManagerStandardUserRemoting|Enable-ServerManagerStandardUserRemoting|Get-WindowsFeature|Install-WindowsFeature|Uninstall-WindowsFeature|" +
        "Get-SMCounterSample|Get-SMPerformanceCollector|Get-SMServerBpaResult|Get-SMServerClusterName|Get-SMServerEvent|Get-SMServerFeature|Get-SMServerInventory|Get-SMServerService|Remove-SMServerPerformanceLog|Start-SMPerformanceCollector|Stop-SMPerformanceCollector|" +
        "Get-KeyProtectorFromShieldingDataFile|Get-ShieldedVMProvisioningStatus|Initialize-ShieldedVM|New-ShieldedVMSpecializationDataFile|Test-ShieldingDataApplicability|" +
        "Import-ShieldingDataFile|New-ShieldingDataFile|New-VolumeIDQualifier|Save-ShieldedVMRecoveryKey|Save-VolumeSignatureCatalog|Unprotect-ShieldedVMRecoveryKey|" +
        "Initialize-VMShieldingHelperVHD|Protect-TemplateDisk|" +
        "Block-SmbShareAccess|Close-SmbOpenFile|Close-SmbSession|Disable-SmbDelegation|Enable-SmbDelegation|Get-SmbBandwidthLimit|Get-SmbClientConfiguration|Get-SmbClientNetworkInterface|Get-SmbConnection|Get-SmbDelegation|Get-SmbGlobalMapping|Get-SmbMapping|Get-SmbMultichannelConnection|Get-SmbMultichannelConstraint|Get-SmbOpenFile|Get-SmbServerCertificateMapping|Get-SmbServerCertProps|Get-SmbServerConfiguration|Get-SmbServerNetworkInterface|Get-SmbSession|Get-SmbShare|Get-SmbShareAccess|Grant-SmbShareAccess|New-SmbGlobalMapping|New-SmbMapping|New-SmbMultichannelConstraint|New-SmbServerCertificateMapping|New-SmbShare|Remove-SmbBandwidthLimit|Remove-SmbComponent|Remove-SmbGlobalMapping|Remove-SmbMapping|Remove-SmbMultichannelConstraint|Remove-SmbServerCertificateMapping|Remove-SmbShare|Reset-SmbClientConfiguration|Reset-SmbServerConfiguration|Revoke-SmbShareAccess|Set-SmbBandwidthLimit|Set-SmbClientConfiguration|Set-SmbPathAcl|Set-SmbServerCertificateMapping|Set-SmbServerConfiguration|Set-SmbShare|Unblock-SmbShareAccess|Update-SmbMultichannelConnection|" +
        "Move-SmbClient|Get-SmbWitnessClient|Move-SmbWitnessClient|" +
        "Register-SmisProvider|Search-SmisProvider|Unregister-SmisProvider|" +
        "Get-SilComputer|Get-SilComputerIdentity|Get-SilData|Get-SilLogging|Get-SilSoftware|Get-SilUalAccess|Get-SilWindowsUpdate|Publish-SilData|Set-SilLogging|Start-SilLogging|Stop-SilLogging|" +
        "Get-StartApps|Export-StartLayout|Import-StartLayout|Export-StartLayoutEdgeAssets|" +
        "Add-InitiatorIdToMaskingSet|Add-PartitionAccessPath|Add-PhysicalDisk|Add-TargetPortToMaskingSet|Add-VirtualDiskToMaskingSet|Block-FileShareAccess|Clear-Disk|Clear-FileStorageTier|Connect-VirtualDisk|Debug-FileShare|Debug-StorageSubSystem|Debug-Volume|Disable-PhysicalDiskIdentification|Disable-StorageEnclosureIdentification|Disable-StorageHighAvailability|Disable-StorageMaintenanceMode|Disconnect-VirtualDisk|Dismount-DiskImage|Enable-PhysicalDiskIdentification|Enable-StorageEnclosureIdentification|Enable-StorageHighAvailability|Enable-StorageMaintenanceMode|Format-Volume|Get-DedupProperties|Get-Disk|||||Get-DiskImage|Get-DiskStorageNodeView|Get-FileIntegrity|Get-FileShare|Get-FileShareAccessControlEntry|Get-FileStorageTier|Get-InitiatorId|Get-InitiatorPort|Get-MaskingSet|Get-OffloadDataTransferSetting|Get-Partition|Get-PartitionSupportedSize|Get-PhysicalDisk|Get-PhysicalDiskStorageNodeView|Get-PhysicalExtent|Get-PhysicalExtentAssociation|Get-ResiliencySetting|Get-StorageAdvancedProperty|Get-StorageDiagnosticInfo|Get-StorageEnclosure|Get-StorageEnclosureStorageNodeView|Get-StorageEnclosureVendorData|Get-StorageFaultDomain|Get-StorageFileServer|Get-StorageFirmwareInformation|Get-StorageHealthAction|Get-StorageHealthReport|Get-StorageHealthSetting|Get-StorageJob|Get-StorageNode|Get-StoragePool|Get-StorageProvider|Get-StorageReliabilityCounter|Get-StorageSetting|Get-StorageSubSystem|Get-StorageTier|Get-StorageTierSupportedSize|Get-SupportedClusterSizes|Get-SupportedFileSystems|Get-TargetPort|Get-TargetPortal|Get-VirtualDisk|Get-VirtualDiskSupportedSize|Get-Volume|Get-VolumeCorruptionCount|Get-VolumeScrubPolicy|Grant-FileShareAccess|Hide-VirtualDisk|Initialize-Disk|Mount-DiskImage|New-FileShare|New-MaskingSet|New-Partition|New-StorageFileServer|New-StoragePool|New-StorageSubsystemVirtualDisk|New-StorageTier|New-VirtualDisk|New-VirtualDiskClone|New-VirtualDiskSnapshot|New-Volume|Optimize-StoragePool|Optimize-Volume|Register-StorageSubsystem|Remove-FileShare|Remove-InitiatorId|Remove-InitiatorIdFromMaskingSet|Remove-MaskingSet|Remove-Partition|Remove-PartitionAccessPath|Remove-PhysicalDisk|Remove-StorageFileServer|Remove-StorageHealthSetting|Remove-StoragePool|Remove-StorageTier|Remove-TargetPortFromMaskingSet|Remove-VirtualDisk|Remove-VirtualDiskFromMaskingSet|Rename-MaskingSet|Repair-FileIntegrity|Repair-VirtualDisk|Repair-Volume|Reset-PhysicalDisk|Reset-StorageReliabilityCounter|Resize-Partition|Resize-StorageTier|Resize-VirtualDisk|Revoke-FileShareAccess|Set-Disk|Set-FileIntegrity|Set-FileShare|Set-FileStorageTier|Set-InitiatorPort|Set-Partition|Set-PhysicalDisk|Set-ResiliencySetting|Set-StorageFileServer|Set-StorageHealthSetting|Set-StoragePool|Set-StorageProvider|Set-StorageSetting|Set-StorageSubSystem|Set-StorageTier|Set-VirtualDisk|Set-Volume|Set-VolumeScrubPolicy|Show-VirtualDisk|Start-StorageDiagnosticLog|Stop-StorageDiagnosticLog|Stop-StorageJob|Unblock-FileShareAccess|Unregister-StorageSubsystem|Update-Disk|Update-HostStorageCache|Update-StorageFirmware|Update-StoragePool|Update-StorageProviderCache|Write-VolumeCache|" +
        "Get-StorageQoSFlow|Get-StorageQosPolicy|Get-StorageQosPolicyStore|Get-StorageQosVolume|New-StorageQosPolicy|Remove-StorageQosPolicy|Set-StorageQosPolicy|Set-StorageQosPolicyStore|" +
        "Clear-SRMetadata|Dismount-SRDestination|Export-SRConfiguration|Get-SRAccess|Get-SRDelegation|Get-SRGroup|Get-SRNetworkConstraint|Get-SRPartnership|Grant-SRAccess|Grant-SRDelegation|Mount-SRDestination|New-SRGroup|New-SRPartnership|Remove-SRGroup|Remove-SRNetworkConstraint|Remove-SRPartnership|Revoke-SRAccess|Revoke-SRDelegation|Set-SRGroup|Set-SRNetworkConstraint|Set-SRPartnership|Suspend-SRGroup|Sync-SRGroup|Test-SRTopology|" +
        "Disable-SyncShare|Enable-SyncShare|Get-SyncServerSetting|Get-SyncShare|Get-SyncUserStatus|New-SyncShare|Remove-SyncShare|Repair-SyncShare|Set-SyncServerSetting|Set-SyncShare|" +
        "Add-InsightsCapability|Disable-InsightsCapability|Disable-InsightsCapabilitySchedule|Enable-InsightsCapability|Enable-InsightsCapabilitySchedule|Get-InsightsCapability|Get-InsightsCapabilityAction|Get-InsightsCapabilityResult|Get-InsightsCapabilitySchedule|Invoke-InsightsCapability|Remove-InsightsCapability|Remove-InsightsCapabilityAction|Set-InsightsCapabilityAction|Set-InsightsCapabilitySchedule|Update-InsightsCapability|" +
        "Disable-TlsCipherSuite|Disable-TlsEccCurve|Disable-TlsSessionTicketKey|Enable-TlsCipherSuite|Enable-TlsEccCurve|Enable-TlsSessionTicketKey|Export-TlsSessionTicketKey|Get-TlsCipherSuite|Get-TlsEccCurve|New-TlsSessionTicketKey|" +
        "Get-TroubleshootingPack|Invoke-TroubleshootingPack|" +
        "Clear-Tpm|ConvertTo-TpmOwnerAuth|Disable-TpmAutoProvisioning|Enable-TpmAutoProvisioning|Get-Tpm|Get-TpmEndorsementKeyInfo|Get-TpmSupportedFeature|Import-TpmOwnerAuth|Initialize-Tpm|Set-TpmOwnerAuth|Unblock-Tpm|" +
        "Clear-UevAppxPackage|Clear-UevConfiguration|Disable-Uev|Disable-UevAppxPackage|Disable-UevTemplate|Enable-Uev|Enable-UevAppxPackage|Enable-UevTemplate|Export-UevConfiguration|Export-UevPackage|Get-UevAppxPackage|Get-UevConfiguration|Get-UevStatus|Get-UevTemplate|Get-UevTemplateProgram|Import-UevConfiguration|Register-UevTemplate|Repair-UevTemplateIndex|Restore-UevBackup|Restore-UevUserSetting|Set-UevConfiguration|Set-UevTemplateProfile|Test-UevTemplate|Unregister-UevTemplate|Update-UevTemplate|" +
        "Add-WsusComputer|Add-WsusDynamicCategory|Approve-WsusUpdate|Deny-WsusUpdate|Get-WsusClassification|Get-WsusComputer|Get-WsusDynamicCategory|Get-WsusProduct|Get-WsusServer|Get-WsusUpdate|Invoke-WsusServerCleanup|Remove-WsusDynamicCategory|Set-WsusClassification|Set-WsusDynamicCategory|Set-WsusProduct|Set-WsusServerSynchronization|" +
        "Disable-Ual|Enable-Ual|Get-Ual|Get-UalDailyAccess|Get-UalDailyDeviceAccess|Get-UalDailyUserAccess|Get-UalDeviceAccess|Get-UalDns|Get-UalHyperV|Get-UalOverview|Get-UalServerDevice|Get-UalServerUser|Get-UalSystemId|Get-UalUserAccess|" +
        "Add-VamtProductKey|Export-VamtData|Find-VamtManagedMachine|Get-VamtConfirmationId|Get-VamtProduct|Get-VamtProductKey|Import-VamtData|Initialize-VamtData|Install-VamtConfirmationId|Install-VamtProductActivation|Install-VamtProductKey|Update-VamtProduct|" +
        "Add-VpnConnection|Add-VpnConnectionRoute|Add-VpnConnectionTriggerApplication|Add-VpnConnectionTriggerDnsConfiguration|Add-VpnConnectionTriggerTrustedNetwork|Get-VpnConnection|Get-VpnConnectionTrigger|New-EapConfiguration|New-VpnServerAddress|Remove-VpnConnection|Remove-VpnConnectionRoute|Remove-VpnConnectionTriggerApplication|Remove-VpnConnectionTriggerDnsConfiguration|Remove-VpnConnectionTriggerTrustedNetwork|Set-VpnConnection|Set-VpnConnectionIPsecConfiguration|Set-VpnConnectionProxy|Set-VpnConnectionTriggerDnsConfiguration|Set-VpnConnectionTriggerTrustedNetwork|" +
        "Add-WdsDriverPackage|Approve-WdsClient|Copy-WdsInstallImage|Deny-WdsClient|Disable-WdsBootImage|Disable-WdsDriverPackage|Disable-WdsInstallImage|Disconnect-WdsMulticastClient|Enable-WdsBootImage|Enable-WdsDriverPackage|Enable-WdsInstallImage|Export-WdsBootImage|Export-WdsInstallImage|Get-WdsBootImage|Get-WdsClient|Get-WdsDriverPackage|Get-WdsInstallImage|Get-WdsInstallImageGroup|Get-WdsMulticastClient|Import-WdsBootImage|Import-WdsDriverPackage|Import-WdsInstallImage|New-WdsClient|New-WdsInstallImageGroup|Remove-WdsBootImage|Remove-WdsClient|Remove-WdsDriverPackage|Remove-WdsInstallImage|Remove-WdsInstallImageGroup|Set-WdsBootImage|Set-WdsClient|Set-WdsInstallImage|Set-WdsInstallImageGroup|" +
        "Add-WebConfiguration|Add-WebConfigurationLock|Add-WebConfigurationProperty|Backup-WebConfiguration|Clear-WebCentralCertProvider|Clear-WebConfiguration|Clear-WebRequestTracingSetting|Clear-WebRequestTracingSettings|ConvertTo-WebApplication|Disable-WebCentralCertProvider|Disable-WebGlobalModule|Disable-WebRequestTracing|Enable-WebCentralCertProvider|Enable-WebGlobalModule|Enable-WebRequestTracing|Get-WebAppDomain|Get-WebApplication|Get-WebAppPoolState|Get-WebBinding|Get-WebCentralCertProvider|Get-WebConfigFile|Get-WebConfiguration|Get-WebConfigurationBackup|Get-WebConfigurationLocation|Get-WebConfigurationLock|Get-WebConfigurationProperty|Get-WebFilePath|Get-WebGlobalModule|Get-WebHandler|Get-WebItemState|Get-WebManagedModule|Get-WebRequest|Get-Website|Get-WebsiteState|Get-WebURL|Get-WebVirtualDirectory|New-WebApplication|New-WebAppPool|New-WebBinding|New-WebFtpSite|New-WebGlobalModule|New-WebHandler|New-WebManagedModule|New-Website|New-WebVirtualDirectory|Remove-WebApplication|Remove-WebAppPool|Remove-WebBinding|Remove-WebConfigurationBackup|Remove-WebConfigurationLocation|Remove-WebConfigurationLock|Remove-WebConfigurationProperty|Remove-WebGlobalModule|Remove-WebHandler|Remove-WebManagedModule|Remove-Website|Remove-WebVirtualDirectory|Rename-WebConfigurationLocation|Restart-WebAppPool|Restart-WebItem|Restore-WebConfiguration|Select-WebConfiguration|Set-WebBinding|Set-WebCentralCertProvider|Set-WebCentralCertProviderCredential|Set-WebConfiguration|Set-WebConfigurationProperty|Set-WebGlobalModule|Set-WebHandler|Set-WebManagedModule|Start-WebAppPool|Start-WebCommitDelay|Start-WebItem|Start-Website|Stop-WebAppPool|Stop-WebCommitDelay|Stop-WebItem|Stop-Website|" +
        "Add-WebApplicationProxyApplication|Get-WebApplicationProxyApplication|Get-WebApplicationProxyAvailableADFSRelyingParty|Get-WebApplicationProxyConfiguration|Get-WebApplicationProxyHealth|Get-WebApplicationProxySslCertificate|Install-WebApplicationProxy|Remove-WebApplicationProxyApplication|Set-WebApplicationProxyApplication|Set-WebApplicationProxyConfiguration|Set-WebApplicationProxySslCertificate|Update-WebApplicationProxyDeviceRegistration|" +
        "Get-WheaMemoryPolicy|Set-WheaMemoryPolicy|" +
        "Get-WindowsDeveloperLicense|Show-WindowsDeveloperLicenseRegistration|Unregister-WindowsDeveloperLicense|" +
        "Clear-WindowsDiagnosticData|" +
        "Disable-WindowsErrorReporting|Enable-WindowsErrorReporting|Get-WindowsErrorReporting|" +
        "Get-WindowsSearchSetting|Set-WindowsSearchSetting|" +
        "Add-WBBackupTarget|Add-WBBareMetalRecovery|Add-WBFileSpec|Add-WBSystemState|Add-WBVirtualMachine|Add-WBVolume|Backup-ACL|Get-WBBackupSet|Get-WBBackupTarget|Get-WBBackupVolumeBrowsePath|Get-WBBareMetalRecovery|Get-WBDisk|Get-WBFileSpec|Get-WBJob|Get-WBPerformanceConfiguration|Get-WBPolicy|Get-WBSchedule|Get-WBSummary|Get-WBSystemState|Get-WBVirtualMachine|Get-WBVolume|Get-WBVssBackupOption|New-WBBackupTarget|New-WBFileSpec|New-WBPolicy|Remove-WBBackupSet|Remove-WBBackupTarget|Remove-WBBareMetalRecovery|Remove-WBCatalog|Remove-WBFileSpec|Remove-WBPolicy|Remove-WBSystemState|Remove-WBVirtualMachine|Remove-WBVolume|Restore-ACL|Restore-WBCatalog|Resume-WBBackup|Resume-WBVolumeRecovery|Set-WBPerformanceConfiguration|Set-WBPolicy|Set-WBSchedule|Set-WBVssBackupOption|Start-WBApplicationRecovery|Start-WBBackup|Start-WBFileRecovery|Start-WBHyperVRecovery|Start-WBSystemStateRecovery|Start-WBVolumeRecovery|Stop-WBJob|" +
        "Get-WindowsUpdateLog");
    var keywordMapper = this.createKeywordMapper({
        "support.function": builtinFunctions,
        "keyword": keywords
    }, "identifier");
    var binaryOperatorsRe = (
    "eq|ne|gt|lt|le|ge|like|notlike|match|notmatch|contains|notcontains|in|notin|band|bor|bxor|bnot|" +
        "ceq|cne|cgt|clt|cle|cge|clike|cnotlike|cmatch|cnotmatch|ccontains|cnotcontains|cin|cnotin|" +
        "ieq|ine|igt|ilt|ile|ige|ilike|inotlike|imatch|inotmatch|icontains|inotcontains|iin|inotin|" +
        "and|or|xor|not|" +
        "split|join|replace|f|" +
        "csplit|creplace|" +
        "isplit|ireplace|" +
        "is|isnot|as|" +
        "shl|shr");
    this.$rules = {
        "start": [
            {
                token: "comment",
                regex: "#.*$"
            }, {
                token: "comment.start",
                regex: "<#",
                next: "comment"
            }, {
                token: "string",
                regex: /@'$/,
                push: [
                    {
                        token: "string",
                        regex: /^'@/,
                        next: "pop"
                    },
                    {
                        defaultToken: "string"
                    }
                ]
            }, {
                token: "string",
                regex: /@"$/,
                push: [
                    {
                        token: "string",
                        regex: /^"@/,
                        next: "pop"
                    },
                    { include: "expressions" },
                    { include: "expandable-strings" },
                    {
                        defaultToken: "string"
                    }
                ]
            },
            { include: "strings" },
            { include: "variables" },
            { include: "statements" },
            { include: "expressions" },
            {
                token: "lparen",
                regex: "[[({]"
            }, {
                token: "rparen",
                regex: "[\\])}]"
            },
            {
                token: "text",
                regex: "\\s+"
            }
        ],
        "comment": [
            {
                token: "comment.end",
                regex: "#>",
                next: "start"
            }, {
                token: "doc.comment.tag",
                regex: "^\\.\\w+"
            }, {
                defaultToken: "comment"
            }
        ],
        "expandable-strings": [
            {
                token: "constant.language.escape",
                regex: /`./
            },
            { include: "variables" }
        ],
        "variables": [
            {
                token: "variable.instance",
                regex: "[$]" + identifierRe + "\\b"
            },
            {
                token: "variable.braced",
                regex: /\$\{/,
                push: [
                    {
                        token: "variable.braced",
                        regex: /\}/,
                        next: "pop"
                    },
                    {
                        token: "constant.language.escape",
                        regex: /`./
                    },
                    { defaultToken: "variable.braced" }
                ]
            }
        ],
        "statements": [
            {
                token: "punctuation",
                regex: ";"
            },
            {
                token: "keyword.operator",
                regex: "\\-(?:" + binaryOperatorsRe + ")"
            }, {
                token: "keyword.operator",
                regex: "&|\\+|\\-|\\*|\\/|\\%|\\=|\\>|\\&|\\!|\\|"
            },
            { include: "constants" },
            {
                token: keywordMapper,
                regex: "[a-zA-Z_$][a-zA-Z0-9_$\\-]*\\b"
            }
        ],
        "constants": [
            {
                token: "constant.numeric",
                regex: "0[xX][0-9a-fA-F]+\\b"
            }, {
                token: "constant.numeric",
                regex: "[+-]?\\d+(?:(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)?\\b"
            }, {
                token: "constant.language.boolean",
                regex: "[$](?:[Tt]rue|[Ff]alse)\\b"
            }, {
                token: "constant.language",
                regex: "[$][Nn]ull\\b"
            }
        ],
        "strings": [
            {
                token: "string",
                regex: "['][^']*[']"
            },
            {
                token: "string",
                regex: /"/,
                push: [
                    {
                        token: "string",
                        regex: /"|$/,
                        next: "pop"
                    },
                    { include: "expressions" },
                    { include: "expandable-strings" },
                    {
                        defaultToken: "string"
                    }
                ]
            }
        ],
        "expressions": [
            {
                token: "keyword.operator",
                regex: /[$@]\(/,
                push: [
                    {
                        token: "keyword.operator",
                        regex: /\)/,
                        next: "pop"
                    },
                    { include: "parens-block" },
                    { include: "expressions" },
                    { include: "strings" },
                    { include: "variables" },
                    { include: "statements" }
                ]
            },
            {
                token: "keyword.operator",
                regex: /@\{/,
                push: [
                    {
                        token: "keyword.operator",
                        regex: /\}/,
                        next: "pop"
                    },
                    { include: "parens-block" },
                    { include: "strings" },
                    { include: "variables" },
                    { include: "statements" }
                ]
            }
        ],
        "parens-block": [
            {
                token: "paren.lparen",
                regex: /\(/,
                push: [
                    {
                        token: "paren.rparen",
                        regex: /\)/,
                        next: "pop"
                    },
                    { include: "parens-block" },
                    { include: "strings" },
                    { include: "variables" },
                    { include: "statements" }
                ]
            }
        ]
    };
    this.normalizeRules();
};
oop.inherits(PowershellHighlightRules, TextHighlightRules);
exports.PowershellHighlightRules = PowershellHighlightRules;

});

define("ace/mode/matching_brace_outdent",["require","exports","module","ace/range"], function(require, exports, module){"use strict";
var Range = require("../range").Range;
var MatchingBraceOutdent = function () { };
(function () {
    this.checkOutdent = function (line, input) {
        if (!/^\s+$/.test(line))
            return false;
        return /^\s*\}/.test(input);
    };
    this.autoOutdent = function (doc, row) {
        var line = doc.getLine(row);
        var match = line.match(/^(\s*\})/);
        if (!match)
            return 0;
        var column = match[1].length;
        var openBracePos = doc.findMatchingBracket({ row: row, column: column });
        if (!openBracePos || openBracePos.row == row)
            return 0;
        var indent = this.$getIndent(doc.getLine(openBracePos.row));
        doc.replace(new Range(row, 0, row, column - 1), indent);
    };
    this.$getIndent = function (line) {
        return line.match(/^\s*/)[0];
    };
}).call(MatchingBraceOutdent.prototype);
exports.MatchingBraceOutdent = MatchingBraceOutdent;

});

define("ace/mode/folding/cstyle",["require","exports","module","ace/lib/oop","ace/range","ace/mode/folding/fold_mode"], function(require, exports, module){"use strict";
var oop = require("../../lib/oop");
var Range = require("../../range").Range;
var BaseFoldMode = require("./fold_mode").FoldMode;
var FoldMode = exports.FoldMode = function (commentRegex) {
    if (commentRegex) {
        this.foldingStartMarker = new RegExp(this.foldingStartMarker.source.replace(/\|[^|]*?$/, "|" + commentRegex.start));
        this.foldingStopMarker = new RegExp(this.foldingStopMarker.source.replace(/\|[^|]*?$/, "|" + commentRegex.end));
    }
};
oop.inherits(FoldMode, BaseFoldMode);
(function () {
    this.foldingStartMarker = /([\{\[\(])[^\}\]\)]*$|^\s*(\/\*)/;
    this.foldingStopMarker = /^[^\[\{\(]*([\}\]\)])|^[\s\*]*(\*\/)/;
    this.singleLineBlockCommentRe = /^\s*(\/\*).*\*\/\s*$/;
    this.tripleStarBlockCommentRe = /^\s*(\/\*\*\*).*\*\/\s*$/;
    this.startRegionRe = /^\s*(\/\*|\/\/)#?region\b/;
    this._getFoldWidgetBase = this.getFoldWidget;
    this.getFoldWidget = function (session, foldStyle, row) {
        var line = session.getLine(row);
        if (this.singleLineBlockCommentRe.test(line)) {
            if (!this.startRegionRe.test(line) && !this.tripleStarBlockCommentRe.test(line))
                return "";
        }
        var fw = this._getFoldWidgetBase(session, foldStyle, row);
        if (!fw && this.startRegionRe.test(line))
            return "start"; // lineCommentRegionStart
        return fw;
    };
    this.getFoldWidgetRange = function (session, foldStyle, row, forceMultiline) {
        var line = session.getLine(row);
        if (this.startRegionRe.test(line))
            return this.getCommentRegionBlock(session, line, row);
        var match = line.match(this.foldingStartMarker);
        if (match) {
            var i = match.index;
            if (match[1])
                return this.openingBracketBlock(session, match[1], row, i);
            var range = session.getCommentFoldRange(row, i + match[0].length, 1);
            if (range && !range.isMultiLine()) {
                if (forceMultiline) {
                    range = this.getSectionRange(session, row);
                }
                else if (foldStyle != "all")
                    range = null;
            }
            return range;
        }
        if (foldStyle === "markbegin")
            return;
        var match = line.match(this.foldingStopMarker);
        if (match) {
            var i = match.index + match[0].length;
            if (match[1])
                return this.closingBracketBlock(session, match[1], row, i);
            return session.getCommentFoldRange(row, i, -1);
        }
    };
    this.getSectionRange = function (session, row) {
        var line = session.getLine(row);
        var startIndent = line.search(/\S/);
        var startRow = row;
        var startColumn = line.length;
        row = row + 1;
        var endRow = row;
        var maxRow = session.getLength();
        while (++row < maxRow) {
            line = session.getLine(row);
            var indent = line.search(/\S/);
            if (indent === -1)
                continue;
            if (startIndent > indent)
                break;
            var subRange = this.getFoldWidgetRange(session, "all", row);
            if (subRange) {
                if (subRange.start.row <= startRow) {
                    break;
                }
                else if (subRange.isMultiLine()) {
                    row = subRange.end.row;
                }
                else if (startIndent == indent) {
                    break;
                }
            }
            endRow = row;
        }
        return new Range(startRow, startColumn, endRow, session.getLine(endRow).length);
    };
    this.getCommentRegionBlock = function (session, line, row) {
        var startColumn = line.search(/\s*$/);
        var maxRow = session.getLength();
        var startRow = row;
        var re = /^\s*(?:\/\*|\/\/|--)#?(end)?region\b/;
        var depth = 1;
        while (++row < maxRow) {
            line = session.getLine(row);
            var m = re.exec(line);
            if (!m)
                continue;
            if (m[1])
                depth--;
            else
                depth++;
            if (!depth)
                break;
        }
        var endRow = row;
        if (endRow > startRow) {
            return new Range(startRow, startColumn, endRow, line.length);
        }
    };
}).call(FoldMode.prototype);

});

define("ace/mode/powershell",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/powershell_highlight_rules","ace/mode/matching_brace_outdent","ace/mode/folding/cstyle"], function(require, exports, module){"use strict";
var oop = require("../lib/oop");
var TextMode = require("./text").Mode;
var PowershellHighlightRules = require("./powershell_highlight_rules").PowershellHighlightRules;
var MatchingBraceOutdent = require("./matching_brace_outdent").MatchingBraceOutdent;
var CStyleFoldMode = require("./folding/cstyle").FoldMode;
var Mode = function () {
    this.HighlightRules = PowershellHighlightRules;
    this.$outdent = new MatchingBraceOutdent();
    this.$behaviour = this.$defaultBehaviour;
    this.foldingRules = new CStyleFoldMode({ start: "^\\s*(<#)", end: "^[#\\s]>\\s*$" });
};
oop.inherits(Mode, TextMode);
(function () {
    this.lineCommentStart = "#";
    this.blockComment = { start: "<#", end: "#>" };
    this.getNextLineIndent = function (state, line, tab) {
        var indent = this.$getIndent(line);
        var tokenizedLine = this.getTokenizer().getLineTokens(line, state);
        var tokens = tokenizedLine.tokens;
        if (tokens.length && tokens[tokens.length - 1].type == "comment") {
            return indent;
        }
        if (state == "start") {
            var match = line.match(/^.*[\{\(\[]\s*$/);
            if (match) {
                indent += tab;
            }
        }
        return indent;
    };
    this.checkOutdent = function (state, line, input) {
        return this.$outdent.checkOutdent(line, input);
    };
    this.autoOutdent = function (state, doc, row) {
        this.$outdent.autoOutdent(doc, row);
    };
    this.createWorker = function (session) {
        return null;
    };
    this.$id = "ace/mode/powershell";
}).call(Mode.prototype);
exports.Mode = Mode;

});                (function() {
                    window.require(["ace/mode/powershell"], function(m) {
                        if (typeof module == "object" && typeof exports == "object" && module) {
                            module.exports = m;
                        }
                    });
                })();
            