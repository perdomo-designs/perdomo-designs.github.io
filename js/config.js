'use strict';

let CONFIG = {};

// TODO: UPDATE copy below
// TODO: UPDATE title tags in ALL PAGES

// Artist id:
CONFIG.uid = '4zzJjUMooFa9boMCG1olQdwzc3s1';
CONFIG.baseUrl = 'https://us-central1-art-auction-2ef27.cloudfunctions.net';
CONFIG.subdomain = ''; // '/github_username'

CONFIG.copy = {
    artistName: 'CarlaPerdomoDesigns',
    artistFname: 'Carla ',
    artistCategories: 'Tattoos | Comic Art | Portraiture',
    artistHeadline: 'Toronto based visual artist',
    artistAboutBlurb: `An artist from birth, Carla has been making friends with crayons, paint brushes and canvases. After a stint at Art school, she moved to Toronto to pursue her dream of becoming a full time illustrationist and tattoo artist.`,
}
CONFIG.socialMedia = {
    ig: 'https://www.instagram.com/carlaperdomodesigns/',
    // fb: 'http://facebook.com/Josh',
    twitter: 'https://twitter.com/Perdomodesigns',
}






// FUNCITONS
CONFIG.copy._updateHomepageCopy = function() {
    CONFIG.copy.artistFname ? 
        $('.j_fname').text('About ' + CONFIG.copy.artistFname): null;
    CONFIG.copy.artistCategories ? 
        $('.j_artistCategories').text(CONFIG.copy.artistCategories): null;
    CONFIG.copy.artistHeadline ? 
        $('.j_artistHeadline').text(CONFIG.copy.artistHeadline): null;
    CONFIG.copy.artistAboutBlurb ? 
        $('.j_artistAboutBlurb').html(CONFIG.copy.artistAboutBlurb): null;
}



CONFIG.copy._headerFooterComponents = function() {
    CONFIG.copy.artistName ? 
        updateTitleTag() : null;
    CONFIG.copy.artistName ? 
        $('.j_artistName').text(CONFIG.copy.artistName): null;
    CONFIG.copy.artistName ? 
        $('.j_footerCopyright').text(CONFIG.copy.artistName + ' | Copyright 2018.'): null;
    CONFIG.socialMedia.ig ?
        $('.j_igUrl').attr('href', CONFIG.socialMedia.ig) : $('.j_igUrl').hide();   
    CONFIG.socialMedia.fb ?
        $('.j_fbUrl').attr('href', CONFIG.socialMedia.fb) : $('.j_fbUrl').hide();   
    CONFIG.socialMedia.twitter ?
        $('.j_twitterUrl').attr('href', CONFIG.socialMedia.twitter) : $('.j_twitterUrl').hide();   
}

var updateTitleTag = function() {
    console.log('title')
    document.title = CONFIG.copy.artistName + " | Toronto Based Artist";
}