

const source   = document.getElementById("implementations_template").innerHTML;
const template = Handlebars.compile(source);

scim_v1_implementations.implementations = scim_v1_implementations.implementations.sort((a,b) => a.project_name.toUpperCase() > b.project_name.toUpperCase());
scim_v2_implementations.implementations = scim_v2_implementations.implementations.sort((a,b) => a.project_name.toUpperCase() > b.project_name.toUpperCase());

const scim_v1_implementations_html = template(scim_v1_implementations);
const scim_v2_implementations_html = template(scim_v2_implementations);

document.getElementById("scim_v1_implementations").innerHTML = scim_v1_implementations_html;
document.getElementById("scim_v2_implementations").innerHTML = scim_v2_implementations_html;
