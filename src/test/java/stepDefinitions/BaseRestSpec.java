package stepDefinitions;
import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.restassured.http.ContentType;
import io.restassured.path.json.JsonPath;
import io.restassured.response.Response;
import org.testng.Assert;
import org.testng.annotations.Test;

import java.util.HashMap;
import java.util.List;
import static io.restassured.RestAssured.given;


public class BaseRestSpec {

    public HashMap map = new HashMap();

    //public String url = "http://localhost:3000";
    public static String url = "https://reqres.in";
    public static Response response;

    @Test
    @Given("^I send post request (.*) with parameters$")
    public void IPostRequest(String path, DataTable table){
        List<List<String>> params = table.raw();

        for (int i=0; i<params.size(); i++){
            map.put(params.get(i).get(0),params.get(i).get(1));
        }

        BaseRestSpec.response = given()
                .contentType(ContentType.JSON)
                .body(map)
                .when()
                .post(BaseRestSpec.url+path)
                .then()
                .extract().response();

        System.out.println(BaseRestSpec.response.asString());
        System.out.println("----------------------");
    }

    @Test
    @Given("^I send get request (.*)$")
    public void IGetRequest(String path){

        BaseRestSpec.response = given()
                .contentType(ContentType.JSON)
                .when()
                .get(BaseRestSpec.url+path)
                .then()
                .extract().response();

        System.out.println(BaseRestSpec.response.asString());
        System.out.println("----------------------");
    }

    @Test
    @When("^I should see status code (.*)$")
    public void ishouldSeeStatusCode(int statusCode){
        Assert.assertEquals(response.statusCode(),statusCode,"Status code istenildiği gibi değil!");
    }

    @Test
    @Then("^I should see following parameters$")
    public void iShouldSeeFollowingParameters(DataTable dataTable){
        String json = BaseRestSpec.response.asString();
        JsonPath jp = new JsonPath(json);
        List<List<String>> params = dataTable.raw();
        for (int i=0; i<params.size(); i++){
//            System.out.println(params.get(i).get(1));
//            System.out.println(jp.get(params.get(i).get(0)));
            if(params.get(i).get(1).equalsIgnoreCase("not null")){
                Assert.assertNotEquals(params.get(i).get(1).equalsIgnoreCase(null),"hata!");
            }else{
                Assert.assertEquals(params.get(i).get(1),jp.get(params.get(i).get(0)),"hata!");
            }
//            System.out.println(jp.get("id"));
//            System.out.println(jp.get("data.name"));
        }
    }





















//    public static RequestSpecification Request;
//
//    public BaseRestSpec() {
//        //Arrange
//        RequestSpecBuilder builder = new RequestSpecBuilder();
//        builder.setBaseUri("http://localhost:3000/posts/");
//        builder.setContentType(ContentType.JSON);
//        RequestSpecification requestSpec = builder.build();
//        Request = RestAssured.given().spec(requestSpec);
//    }
//
//
//    @Test
//    @Given("I send post for create new user")
//    public void createNewEmployee(){
//        Employees employees = new Employees();
//        ArrayList list = new ArrayList();
//        Random random = new Random();
//        list.add("project 11");
//        list.add("project 22");
//        employees.setFirstname("Mertcan 11");
//        employees.setLastname("Yüksekkaya 11");
//        employees.setMail("mertcan@mertcan.com");
//        employees.setProjects(list);
//        employees.setId(random.nextInt(9999));
//
//        Request.body(employees).post();
//    }
//
//
//
//    @Test
//    public static void GetOpsWithPathParameter(String url, Map<String, String> pathParams) {
//        //Act
//        Request.pathParams(pathParams);
//        try {
//            Request.get(new URI(url));
//        } catch (URISyntaxException e) {
//            e.printStackTrace();
//        }
//    }



//    public String url = "http://localhost:3000";



//    @Test
//    @Given("^I send post request with parameters$")
//    public void createNewEmployee(DataTable table){
//        Employees employees = new Employees();
//        Random random = new Random();
//        ArrayList list = new ArrayList();
//        List<List<String>> params = table.raw();
//        String[] projectSplit = params.get(4).get(1).split(",");
//        for (int i=0; i<projectSplit.length; i++){
//            list.add(projectSplit[i]);
//        }
//
//        employees.setFirstname(params.get(0).get(1));
//        employees.setLastname(params.get(1).get(1));
//        employees.setMail(params.get(2).get(1));
//        employees.setProjects(list);
//        employees.setId(random.nextInt(9999));
//
//        Response response = given()
//                .contentType(ContentType.JSON)
//                .body(employees)
//        .when()
//                .post(url+"/posts")
//        .then()
//                .statusCode(201)
//        .log().headers().extract().response();
//
//        String a = response.getBody().asString();
//        System.out.println(a);
//    }

//    @Test
//    public void getEmployees(){
//        Employees[] employees = get(url).as(Employees[].class);
//        for (int i=0; i<employees.length; i++){
//            System.out.println(employees[i].getId());
//            System.out.println(employees[i].getFirstname());
//            System.out.println(employees[i].getLastname());
//            System.out.println(employees[i].getMail());
//            System.out.println(employees[i].getProjects());
//            System.out.println("-------------------------");
//            Assert.assertEquals(employees[0].getId().toString(),"9606");
//        }
//
////            System.out.println(employees.getId());
////            System.out.println(employees.getFirstname());
////            System.out.println(employees.getLastname());
////            System.out.println(employees.getMail());
////            System.out.println(employees.getProjects());
//        }
//
//    @Test
//    @Given("^I perform GET operation with id (.*)$")
//    public void getOneEmployee(int id, DataTable dataTable){
//            Employees employees = get(url+id).as(Employees.class);
//            List<List<String>> data = dataTable.raw();
//            Assert.assertEquals(Integer.parseInt(String.valueOf(employees.getId())),id);
//            Assert.assertEquals(employees.getFirstname(),data.get(0).get(1));
//            Assert.assertEquals(employees.getLastname(),data.get(1).get(1));
//            Assert.assertEquals(employees.getMail(),data.get(2).get(1));
//            Assert.assertEquals(employees.getProjects(),data.get(3).get(1));
////            System.out.println(employees.getId());
////            System.out.println(employees.getFirstname());
////            System.out.println(employees.getLastname());
////            System.out.println(employees.getMail());
////            System.out.println(employees.getProjects());
//            System.out.println("-------------------------");
//            Assert.assertEquals(Integer.parseInt(String.valueOf(employees.getId())),  id, "Servisten gelen id ile parametre olarak girilen id birbirini tutmuyor!");
//    }

}
