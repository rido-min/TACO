/// <reference path="../../typings/node.d.ts" />
"use strict";

enum TacoErrorCode {
    CommandBuildInvalidPlatformLocation,
    CommandBuildTacoSettingsNotFound,
    CommandCreateNotBothCliAndKit,
    CommandCreateNotBothTemplateAndCli,
    CommandCreateNotTemplateIfCustomWww,
    CommandCreateOnlyLocalCustomWww,
    CommandCreateTacoJsonFileCreationError,
    CommandCreateTacoJsonFileWriteError,
    CommandCreateTemplatesUnavailable,
    CommandNotBothDeviceEmulate,
    CommandNotBothLocalRemote,
    CommandRemotePlatformNotKnown,
    CommandSetupCantFindRemoteMount,
    CommandSetupConnectionRefused,
    CommandSetupNotfound,
    CommandSetupRemoteInvalidPin,
    CommandSetupRemoteInvalidPort,
    CommandSetupRemoteRejectedPin,
    CommandSetupTimedout,
    CordovaCommandFailed,
    CordovaCommandFailedWithError,
    ErrorDownloadingRemoteBuild,
    ErrorHttpGet,
    ErrorUploadingRemoteBuild,
    FailedCertificateLoad,
    FailedCertificatePathChmod,
    FailedCertificateSave,
    FailedCertificateSaveWithErrorCode,
    FailedPatchCreation,
    FailedUploadingRemoteBuild,
    GetCertificateFailed,
    HttpGetFailed,
    InvalidBuildSubmission400,
    InvalidRemoteBuild,
    InvalidRemoteBuildClientCert,
    InvalidRemoteBuildUrl,
    NoCertificateFound,
    NoRemoteBuildIdFound,
    RemoteBuildError,
    RemoteBuildHostNotFound,
    RemoteBuildNoConnection,
    RemoteBuildNonSslConnectionReset,
    RemoteBuildSslConnectionReset,
    RemoteBuildStatusPollFailed,
    RemoteBuildUnsuccessful,
    UnsupportedPlatform,
}

export = TacoErrorCode;
