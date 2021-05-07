package ajax;

import java.io.IOException;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import common.DBCon;

/**
 * Servlet implementation class MemberServlet
 */
@WebServlet("/jquery/memberServlet.do")
public class MemberServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public MemberServlet() {
        super();
    
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		//조회작업
		response.setContentType("text/html;charset=UTF-8");
		
		Connection conn= DBCon.getConnect();
		PreparedStatement psmt=null;
		ResultSet rs=null;
		String sql="select member_id, member_name, member_age from member";
		String json ="[";
		 try {
			psmt=conn.prepareStatement(sql,
					ResultSet.TYPE_SCROLL_INSENSITIVE,
					ResultSet.CONCUR_UPDATABLE);
			
			rs=psmt.executeQuery();
			while(rs.next()) {
				String memId= rs.getString(1);
				String memName=rs.getString(2);
				int memAge=rs.getInt(3);
				
				json+="{ \"id\":\"" +memId+
						"\" , \"name\":\"" +memName+ 
						"\" , \"age\": " +memAge+ " }";
				if(!rs.isLast())
				json+=",";
				
			}
		} catch (SQLException e) {
		
			e.printStackTrace();
		}finally {
			if(rs!=null) {
				try {
					rs.close();
				} catch (SQLException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
			}
			if(psmt!=null) {
				try {
					psmt.close();
				} catch (SQLException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
			}
			if(conn!=null) {
				try {
					conn.close();
				} catch (SQLException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
			}
		}
		 json+="]";
		//조회 sql 을 작성
		
		//조회 결과를 json 형식으로 작성
		
		//결과를 response.getwriter().print()로 출력.
	
		 response.getWriter().print(json);
		 
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		//입력작업
		String p1 = request.getParameter("m_id");
		String p2 = request.getParameter("m_name");
		String p3 = request.getParameter("m_age");
		
		Connection conn= DBCon.getConnect();
		String sql="insert into member values(?,?,?)";
		PreparedStatement psmt = null;
		try {
			psmt= conn.prepareStatement(sql);
			psmt.setString(1, p1);
			psmt.setString(2, p2);
			psmt.setString(3, p3);
			int r= psmt.executeUpdate();
			System.out.println(r + "건 입력");
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}finally {	
			if(psmt!=null) {
				try {
					psmt.close();
				} catch (SQLException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
			}
		}if(conn!=null) {
			try {
				conn.close();
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}		
		//	{
		 String json="{\"id\":"+p1+",\"name\":\""+p2+ "\", \"age\":" +p3+ "}";
		response.getWriter().print(json);

	}

}
