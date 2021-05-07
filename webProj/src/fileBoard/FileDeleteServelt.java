package fileBoard;

import java.io.IOException;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import common.DBCon;


@WebServlet("/fileDeleteServelt")
public class FileDeleteServelt extends HttpServlet {
	private static final long serialVersionUID = 1L;

    public FileDeleteServelt() {
        super();

    }

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
			
		String num= request.getParameter("num");
		int delNum=Integer.parseInt(num);
		
		
		Connection conn= DBCon.getConnect();
		PreparedStatement psmt=null;
		String sql="delete from file_board where num=?";
		
		try {
			psmt= conn.prepareStatement(sql);
			psmt.setInt(1, delNum);
			int r=psmt.executeUpdate();
			System.out.println(r + "건 삭제");
		} catch (SQLException e) {
			e.printStackTrace();
		}finally {
			if(psmt!=null) {
				try {
					psmt.close();
				} catch (SQLException e) {
					e.printStackTrace();
				}
			}
			if(conn!=null) {
				try {
					conn.close();
				} catch (SQLException e) {
					e.printStackTrace();
				}
			}
		}
	}
		
	


	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
	

	}

}
