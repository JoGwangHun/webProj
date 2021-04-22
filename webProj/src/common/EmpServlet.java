package common;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/empList.do")
public class EmpServlet extends HttpServlet{ 
	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {

		PrintWriter out = resp.getWriter();
		
		String dept = req.getParameter("dept");
		
		EmpDAO dao= new EmpDAO();
		
		
		List<Employee> list = null;
		
		if(dept == null) {
			list = dao.getEmpList();
		}else {
			list = dao.getEmpByDept(dept);
		}
		
		
		String jsonData="[";
		//[{"empId":"?","fName":"?", "lName":"?"}, ...]
		int cnt = 0;
		for(Employee emp : list) {
			jsonData += "{\"empId\":\""+emp.getEmployeeId()
						+"\",\"fName\":\""+emp.getFirstName()
						+"\",\"lName\":\""+emp.getLastName()
						+"\",\"email\":\""+emp.getEmail()
						+"\",\"salary\":\""+emp.getSalary()
						+"\",\"hireDate\":\""+emp.getHireDate()
						+"\",\"jobId\":\""+emp.getJobId()
						+"\"}";
		
			if(++cnt == list.size()) {
				continue;
				
			}
			jsonData+=",";
		}
		jsonData +="]";
		
		out.print(jsonData);
	}
	
	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
	
		
	  String FirstName=req.getParameter("first_name");
	  String lastName = req.getParameter("last_name");
	  String email = req.getParameter("email");
	  int salary =Integer.parseInt(req.getParameter("salary"));
	  String hireDate = req.getParameter("hire_date");
	  String jobId = req.getParameter("job_id");
	  
	  
	  Employee emp= new Employee();
	  emp.setFirstName(FirstName);
	  emp.setLastName(lastName);
	  emp.setEmail(email);
	  emp.setSalary(salary);
	  emp.setHireDate(hireDate);
	  emp.setJobId(jobId);
	  
	  
	  EmpDAO dao = new EmpDAO();
	  Employee empl = dao.insertEmpBySeq(emp);
	  //{"eid":?" , fName":"?"....}
	  PrintWriter out= resp.getWriter();
	  out.print("{\"employee_id\":\""+empl.getEmployeeId()+"\","//
			  +"\"first_name\":\""+empl.getFirstName()+"\","
			  +"\"last_name\":\""+empl.getLastName()+"\",	"//
			  +"\"email\":\""+empl.getEmail()+"\","		//
			  +"\"salary\":\""+empl.getSalary()+"\","
			  +"\"hire_date\":\""+empl.getHireDate()+"\","	//
			  +"\"job_id\":\""+empl.getJobId()+"\""//	  			  
			  +"}");
			  
	  
	  }
	}

