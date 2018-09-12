package br.com.datacenter.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import br.com.datacenter.entities.Client;

@Repository
public interface ClientRepository extends JpaRepository<Client,Integer>{
	
	//Login
	@Query(value= "SELECT * FROM dbo.fn_getLogin(:PEmail,:PPassword)", nativeQuery=true)
	public List<Object[]> loginClient(@Param("PEmail")String email,@Param("PPassword")String password);
	
	//Products do Client
	@Query(value= "SELECT * FROM dbo.fn_myProducts(:PIdClient)", nativeQuery=true)
	public List<Object[]> clientPorducts(@Param("PIdClient")Integer idCliente);
	
	//Areas do Client
	@Query(value= "SELECT * FROM dbo.fn_Area()", nativeQuery=true)
	public List<Object[]> clientAreas();
	
	//Services por Area
	@Query(value= "select * from dbo.fn_serviceByArea (:PIdArea);", nativeQuery=true)
	public List<Object[]> clientServiceByArea(@Param("PIdArea")Integer idArea);
	
	@Query(value= "select * from dbo.fn_datacenter(:PIdService);", nativeQuery=true)
	public List<Object[]> clientDataCenterByService(@Param("PIdService")Integer idService);
	
	@Query(value= "select * from dbo.fn_getdatacenter(:PIdDataCenter);", nativeQuery=true)
	public List<Object[]> clientDataCenter(@Param("PIdDataCenter")Integer idDataCenter);
	
	@Query(value= "select * from dbo.fn_serviceItem(:PIdService);", nativeQuery=true)
	public List<Object[]> clientServiceItemByService(@Param("PIdService")Integer idService);
	
	@Query(value= "select * from dbo.fn_serviceField (:PIdService);", nativeQuery=true)
	public List<Object[]> clientFieldsByService(@Param("PIdService")Integer idService);
	
	@Query(value ="declare @result tinyint exec saveInvoice :PIdUser,:PIdClient,:PIdDataCenter,:PIdService, :PFields, :PIdServicesChekeds,@result out"+
			" select @result", nativeQuery =true)
	public Byte saveClientService(@Param("PIdUser")Integer idUser,@Param("PIdClient")Integer idClient, 
			@Param("PIdDataCenter")Integer idDataCenter,
			@Param("PIdService")Integer idService, 
			@Param("PFields")String fields, 
			@Param("PIdServicesChekeds")String serviceChekeds);
	
	//Services por Area e Client
	@Query(value= "select * from dbo.fn_serviceByClient(:PIdArea,:PIdClientService);", nativeQuery=true)
	public List<Object[]> serviceByClient(@Param("PIdArea")Integer idArea,@Param("PIdClientService")Integer idClientService );
	
	@Query(value= "select * from dbo.fn_serviceItemByClient(:PIdClientService);", nativeQuery=true)
	public List<Object[]> serviceByClientService(@Param("PIdClientService")Integer idClientService);
	
	@Query(value= "select * from dbo.fn_serviceFieldByClient(:PIdClientService);", nativeQuery=true)
	public List<Object[]> fieldByClientService(@Param("PIdClientService")Integer idClientService);
	
}
