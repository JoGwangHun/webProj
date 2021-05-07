package plugin;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import common.EmpDAO;
import common.ScheduleVO;

@WebServlet("/scheduleServlet2")
public class ScheduleServlet2 extends HttpServlet {
	private static final long serialVersionUID = 1L;
       

    public ScheduleServlet2() {
        super();

    }

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

	}


	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		EmpDAO dao=new EmpDAO();
		
		ScheduleVO vo = new ScheduleVO();
		dao.deleteSchedule(vo);
		
	}

}
