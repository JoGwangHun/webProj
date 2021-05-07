package ajax;

import java.io.IOException;
import java.util.Enumeration;

import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.oreilly.servlet.MultipartRequest;
import com.oreilly.servlet.multipart.DefaultFileRenamePolicy;


@WebServlet("/jquery/uploadServlet")
public class UploadServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       

    public UploadServlet() {
        super();

    }
    
    
    @Override
    public void init() throws ServletException {
    	System.out.println("init call()");
    	
    
    }
    
    
    
//    @Override
//    protected void service(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
//		System.out.println("service call()");
//		Enumeration<String> enumer = request.getHeaderNames();
//		while(enumer.hasMoreElements()) {
//			String key= enumer.nextElement();
//			String val= request.getHeader(key);
//			System.out.println(key+ ":" + val);
//		}
//    }
    
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
			System.out.println("doGet call()");
	}


	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		response.setCharacterEncoding("UTF-8");
		
		System.out.println("doPost call()");
		String path="c:/tmp";
		
		ServletContext sc= this.getServletContext();
		path= sc.getRealPath("upload");


		MultipartRequest multi = new MultipartRequest(request,  //요청정보
														"C:/tmp", //저장위치
														5*1024*1024, //용량
														"UTF-8", //인코딩
														new DefaultFileRenamePolicy());
		
		Enumeration en =multi.getFileNames();
		while(en.hasMoreElements()) {
			String name = (String)en.nextElement();
			String fileName = multi.getFilesystemName(name);
			System.out.println("name:"+name+", fileName :"+ fileName);
		}
	}

}
