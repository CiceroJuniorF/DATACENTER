/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package br.com.datacenter.entities;

import java.io.Serializable;
import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.Table;
import javax.xml.bind.annotation.XmlRootElement;

/**
 *
 * @author dev
 */
@Entity
@Table(name = "datacenterservice")
@XmlRootElement
@NamedQueries({
    @NamedQuery(name = "Datacenterservice.findAll", query = "SELECT d FROM Datacenterservice d")
    , @NamedQuery(name = "Datacenterservice.findById", query = "SELECT d FROM Datacenterservice d WHERE d.id = :id")})
public class Datacenterservice implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @Basic(optional = false)
    @Column(name = "id")
    private Integer id;
    @JoinColumn(name = "datacenter_id", referencedColumnName = "id")
    @ManyToOne(optional = false)
    private Datacenter datacenterId;
    @JoinColumn(name = "service_id", referencedColumnName = "id")
    @ManyToOne(optional = false)
    private Service serviceId;

    public Datacenterservice() {
    }

    public Datacenterservice(Integer id) {
        this.id = id;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Datacenter getDatacenterId() {
        return datacenterId;
    }

    public void setDatacenterId(Datacenter datacenterId) {
        this.datacenterId = datacenterId;
    }

    public Service getServiceId() {
        return serviceId;
    }

    public void setServiceId(Service serviceId) {
        this.serviceId = serviceId;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (id != null ? id.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof Datacenterservice)) {
            return false;
        }
        Datacenterservice other = (Datacenterservice) object;
        if ((this.id == null && other.id != null) || (this.id != null && !this.id.equals(other.id))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "br.com.datacenter.entities.Datacenterservice[ id=" + id + " ]";
    }
    
}
