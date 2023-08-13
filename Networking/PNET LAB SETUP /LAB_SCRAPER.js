class lab {
    constructor(lab_id, lab_name, lab_version, lab_version_id) {
        this.lab_id = lab_id;
        this.lab_name = lab_name;
        this.lab_version = lab_version;
        this.lab_version_id = lab_version_id;
        this.status = "not downloaded";
    }
}


const baseURL = "http://192.168.79.131/";




let labs = []
let X_XSRF_TOKEN = document.cookie.match(/XSRF-TOKEN=(.*?)(?:;|$)/)[1];


const get_all_lab_ids = async ()=>{
    return  await fetch("https://user.pnetlab.com/store/labs/list", {
        "credentials": "include",
        "headers": {
            "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:109.0) Gecko/20100101 Firefox/116.0",
            "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
            "Accept-Language": "en-US,en;q=0.5",
            "Upgrade-Insecure-Requests": "1",
            "Sec-Fetch-Dest": "document",
            "Sec-Fetch-Mode": "navigate",
            "Sec-Fetch-Site": "same-origin",
            "Pragma": "no-cache",
            "Cache-Control": "no-cache"
        },
        "method": "GET",
        "mode": "cors"
    })
    .then(response =>  
            {
         let ids = []
        let response_text =  response.text().then((response_text) => {
        let parser = new DOMParser();
        let htmlDoc = parser.parseFromString(response_text, 'text/html');
        for (let i = 0; i < htmlDoc.links.length; i++) {
            let id = htmlDoc.links[i].innerText.split('id=')[1];
            ids.push(id);
        } 
        return ids;
    });
    return response_text;
    })

    .catch(error => console.log(error));

}




const readLabVersion = async (lab_id, X_XSRF_TOKEN) => { 
let lab_versions =  await fetch("http://192.168.79.131/store/public/user/versions/readGetDepend", {
    "credentials": "include",
    "headers": {
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:109.0) Gecko/20100101 Firefox/116.0",
        "Accept": "application/json, text/plain, */*",
        "Accept-Language": "en-US,en;q=0.5",
        "Content-Type": "application/json;charset=utf-8",
        "X-XSRF-TOKEN":  X_XSRF_TOKEN
    },
    "body": `{"lab_id":\"${lab_id}\"}`,
    "method": "POST",
    "mode": "cors"
}).then(response => response.json())
.catch(error => console.log(error));
return lab_versions;
}










/**
 * Assigning the lab ids to the labs array
 */
labs = await get_all_lab_ids();


const get_lab_Names = async (lab_id, X_XSRF_TOKEN) => {
    let lab_names = await fetch("


const downloadLab = async (version_id, lab_name, X_XSRF_TOKEN) => {
    let download_lab = await fetch("http://192.168.79.131/store/public/user/versions/download", {
        "credentials": "include",
        "headers": {
            "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:109.0) Gecko/20100101 Firefox/116.0",
            "Accept": "application/json, text/plain, */*",
            "Accept-Language": "en-US,en;q=0.5",
            "Content-Type": "application/json;charset=utf-8",
            "X-XSRF-TOKEN": "eyJpdiI6IkZEOE1GU1lrSXVsQ1wvTzJVNUR5cnhnPT0iLCJ2YWx1ZSI6IlUzSUk3cmRvekxpQkd3U2p2WVU0eUtldzUzUVFOSEhuR1N2cUQ5VlFUQzY2REZ0eFwvcHlPN0JndGpxcVIxXC9zYiIsIm1hYyI6Ijg4ZTYyOGU1NjdjOTBkMzRkN2EzZjE5MGJlYWZlM2U1YjNiOTdmNTQ0OGZlMmRiNmU4M2E1YzczNWFiN2RjZjkifQ=="
        },
        "body": `{"version_id":\"${version_id}\", "lab_name":\"${lab_name}\"}`,
        "method": "POST",
        "mode": "cors"
    });

    let download_lab_json = await download_lab.json();
    console.log(download_lab_json);
    return download_lab_json;
}

downloadLab(16090780595073, "Juniper-InterAS-OptionB", X_XSRF_TOKEN).then((download_lab_json) => {
    console.log(download_lab_json);
}
);
