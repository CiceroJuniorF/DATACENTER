package br.com.datacenter.repositories;

import java.sql.SQLException;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import br.com.datacenter.entities.Client;

@Repository
public interface AdminRepository extends JpaRepository<Client,Integer> {
	//Inicio Service
	@Query(value= "select * from dbo.fn_getServiceSearch(:PName,:PStatus)", nativeQuery=true)
	public List<Object[]> searchService(@Param("PName")String name,@Param("PStatus")Integer status) throws SQLException;
	
	@Query(value= "select * from dbo.fn_getService(:PIdService);", nativeQuery=true)
	public List<Object[]> serviceById(@Param("PIdService")Integer idService);
	
	@Query(value= "select * from dbo.fn_language();", nativeQuery=true)
	public List<Object[]> listLanguage() throws SQLException;
	
	@Query(value= "select * from dbo.fn_serviceItemType ()", nativeQuery=true)
	public List<Object[]> listServiceItenType() throws SQLException;
	
	@Query(value= "select * from dbo.fn_getdatacenterForService(:PIdService)", nativeQuery=true)
	public List<Object[]> listDataCenter(@Param("PIdService")Integer idService) throws SQLException;
	
	@Query(value= "select * from dbo.fn_groupTypeByService(:PIdService)", nativeQuery=true)
	public List<Object[]> listGroup(@Param("PIdService")Integer idService) throws SQLException;
	
	@Query(value= "declare @id_service tinyint exec SaveService "
			+ ":PId, "
			+ ":PName, "
			+ ":PDescription, "
			+ ":PStatus, "
			+ ":PLanguage, "
			+ ":PArea, "
			+ ":PCharging, " 
			+ ":PField, "
			+ ":PItens, "
			+ ":PDataCenter,"
			+ ":PGroup,"
			+ "@id_service out select @id_service ", 
			nativeQuery=true)
	public Byte saveService(@Param("PId")Integer id,
			@Param("PName")String name,
			@Param("PDescription")String description,
			@Param("PStatus")Integer status,
			@Param("PLanguage")Integer language,
			@Param("PArea")Integer area,
			@Param("PCharging")Integer charging,
			@Param("PField")String fields,
			@Param("PItens")String Itens,
			@Param("PDataCenter")String dataCenter,
			@Param("PGroup")String group)throws SQLException; 
	
	@Query(value="declare @message varchar(100)\n "
			+ "declare @result tinyint\n"
			+ "exec  DeleteService :PId, @result  output, @message  output\n "
			+ "select @message\n"
			+ "select @result;", 
			nativeQuery=true)
	public String deleteService(@Param("PId")Integer id)throws SQLException;
	
	@Query(value="declare @message varchar(100)\n "
			+ "declare @result tinyint\n"
			+ "exec  DeleteServiceItem :PId, @result  output, @message  output\n "
			+ "select @message\n"
			+ "select @result;", 
			nativeQuery=true)
	public String deleteServiceItem(@Param("PId")Integer id)throws SQLException;
	
	@Query(value="declare @message varchar(100)\n "
			+ "declare @result tinyint\n"
			+ "exec  DeleteServiceField :PId, @result  output, @message  output\n "
			+ "select @message\n"
			+ "select @result;", 
			nativeQuery=true)
	public String deleteField(@Param("PId")Integer id)throws SQLException;
	
	
	
	//Inicio Client
	@Query(value= "select * from dbo.fn_getClientSearch(:PName,:PStatus)", nativeQuery=true)
	public List<Object[]> searchClient(@Param("PName")String name,@Param("PStatus")Integer status) throws SQLException;
	
	@Query(value= "select * from dbo.fn_getUserType();", nativeQuery=true)
	public List<Object[]> listUserType() throws SQLException;
	
	@Query(value= "select * from dbo.fn_serviceItemAll(:PIdService);", nativeQuery=true)
	public List<Object[]> serviceItemByService(@Param("PIdService")Integer idService);
	
	@Query(value="declare @id_client tinyint exec SaveClient "+ 
		":PId, "+
		":PName, "+
		":PDocument, "+
		":PStatus, "+
		":PBanda, "+
		":PLanguage_id, "+
		":PSettingsVlan, "+ 
		":PSettingsIp, " +
		":PClientGroup, " +
		":PUserInfo, " +
	"@id_client out "+
	"select @id_client; ",nativeQuery=true)
	public Byte saveClient(
			@Param("PId") Integer id,
			@Param("PName")String name,
			@Param("PDocument")String document,
			@Param("PStatus")Byte status,
			@Param("PBanda")String banda,
			@Param("PLanguage_id")Integer language,
			@Param("PSettingsVlan")String vlan, 
			@Param("PSettingsIp")String ip,
			@Param("PClientGroup")String goup,
			@Param("PUserInfo")String user
			);
	@Query(value="select * from dbo.fn_getClientSettingsVlan(:PIdService)",nativeQuery=true)
	public List<Object[]> getVlan(@Param("PIdService")Integer id)throws SQLException;
	
	@Query(value="select * from dbo.fn_getClientSettingsIp(:PIdService)",nativeQuery=true)
	public List<Object[]> getIp(@Param("PIdService")Integer id)throws SQLException;
	
	@Query(value="select * from dbo.fn_getUserInfo(:PIdService)",nativeQuery=true)
	public List<Object[]> getUserInfo(@Param("PIdService")Integer id)throws SQLException;
	
	@Query(value="select * from dbo.fn_getClientGroup(:PIdService)",nativeQuery=true)
	public List<Object[]> getClientGroup(@Param("PIdService")Integer idService)throws SQLException;
	
	
	@Query(value="select * from dbo.fn_getClientById (:PIdService)",nativeQuery=true)
	public List<Object[]> getClient(@Param("PIdService")Integer idService)throws SQLException;
	
	@Query(value="declare @message varchar(100)\n "
			+ "declare @result tinyint\n"
			+ "exec  DeleteUserInfo :PId, @result  output, @message  output\n "
			+ "select @message\n"
			+ "select @result;", 
			nativeQuery=true)
	public String deleteUserInfo(@Param("PId")Integer id)throws SQLException;
	
	
	//Inicio DataCenter
	
	@Query(value="select * from dbo.fn_getDataCenterSearch(:PSearch);",nativeQuery=true)
	public List<Object[]> getDataCenterSearch(@Param("PSearch")String search)throws SQLException;
	
	@Query(value="declare @id_dataCenter int exec SaveDataCenter "
			+ ":PId, "
			+ ":PName, "
			+ ":PDescription, "
			+ "@id_dataCenter output "
			+ "select @id_dataCenter",
			nativeQuery=true
			)
	public Integer saveDataCenter(@Param("PId")Integer id,
			@Param("PName")String name,
			@Param("PDescription")String description)throws SQLException;
	
	@Query(value="declare @message varchar(100)\n "
			+ "declare @result tinyint\n"
			+ "exec  DeleteClient :PId, @result  output, @message  output\n "
			+ "select @message\n"
			+ "select @result;", 
			nativeQuery=true)
	public String deleteClient(@Param("PId")Integer id)throws SQLException;
	
	//Inicio ClientService
	@Query(value="select * from dbo.fn_getClientServiceControl(:PClientName, :PServiceName, :POption);",nativeQuery=true)
	public List<Object[]> clientServiceSearch(
			@Param("PClientName") String clientName,
			@Param("PServiceName") String serviceName,
			@Param("POption") Integer option
			)throws SQLException;
	
	@Query(value="declare @message varchar(100)\n "
			+ "declare @result tinyint\n"
			+ "exec  ApprovalClientService :PIdClient,:PIdUser, @result  output, @message  output\n "
			+ "select @message\n"
			+ "select @result;", 
			nativeQuery=true)
	public String aprovalClientService(@Param("PIdClient")Integer idClient, @Param("PIdUser")Integer idUser)throws SQLException;
	
	@Query(value="declare @message varchar(100)\n "
			+ "declare @result tinyint\n"
			+ "exec  ApprovalCancelClientService :PIdClient,:PIdUser, @result  output, @message  output\n "
			+ "select @message\n"
			+ "select @result;", 
			nativeQuery=true)
	public String cancelClientService(@Param("PIdClient")Integer idClient, @Param("PIdUser")Integer idUser)throws SQLException;
}

	
	