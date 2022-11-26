<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit1de77c7a40ace6edee5ccbff5a8149a3
{
    public static $prefixLengthsPsr4 = array (
        'D' => 
        array (
            'DrewM\\MailChimp\\' => 16,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'DrewM\\MailChimp\\' => 
        array (
            0 => __DIR__ . '/..' . '/drewm/mailchimp-api/src',
        ),
    );

    public static $classMap = array (
        'CS_REST_Administrators' => __DIR__ . '/..' . '/campaignmonitor/createsend-php/csrest_administrators.php',
        'CS_REST_Campaigns' => __DIR__ . '/..' . '/campaignmonitor/createsend-php/csrest_campaigns.php',
        'CS_REST_Clients' => __DIR__ . '/..' . '/campaignmonitor/createsend-php/csrest_clients.php',
        'CS_REST_Events' => __DIR__ . '/..' . '/campaignmonitor/createsend-php/csrest_events.php',
        'CS_REST_General' => __DIR__ . '/..' . '/campaignmonitor/createsend-php/csrest_general.php',
        'CS_REST_JourneyEmails' => __DIR__ . '/..' . '/campaignmonitor/createsend-php/csrest_journey_emails.php',
        'CS_REST_Journeys' => __DIR__ . '/..' . '/campaignmonitor/createsend-php/csrest_journeys.php',
        'CS_REST_Lists' => __DIR__ . '/..' . '/campaignmonitor/createsend-php/csrest_lists.php',
        'CS_REST_People' => __DIR__ . '/..' . '/campaignmonitor/createsend-php/csrest_people.php',
        'CS_REST_Segments' => __DIR__ . '/..' . '/campaignmonitor/createsend-php/csrest_segments.php',
        'CS_REST_Subscribers' => __DIR__ . '/..' . '/campaignmonitor/createsend-php/csrest_subscribers.php',
        'CS_REST_Templates' => __DIR__ . '/..' . '/campaignmonitor/createsend-php/csrest_templates.php',
        'CS_REST_Transactional_ClassicEmail' => __DIR__ . '/..' . '/campaignmonitor/createsend-php/csrest_transactional_classicemail.php',
        'CS_REST_Transactional_SmartEmail' => __DIR__ . '/..' . '/campaignmonitor/createsend-php/csrest_transactional_smartemail.php',
        'CS_REST_Transactional_Timeline' => __DIR__ . '/..' . '/campaignmonitor/createsend-php/csrest_transactional_timeline.php',
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit1de77c7a40ace6edee5ccbff5a8149a3::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit1de77c7a40ace6edee5ccbff5a8149a3::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInit1de77c7a40ace6edee5ccbff5a8149a3::$classMap;

        }, null, ClassLoader::class);
    }
}
