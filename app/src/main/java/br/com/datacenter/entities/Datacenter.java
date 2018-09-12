/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package br.com.datacenter.entities;

import java.io.Serializable;
import java.util.Collection;
import javax.persistence.Basic;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlTransient;

/**
 *
 * @author dev
 */
@Entity
@Table(name = "datacenter")
@XmlRootElement
@NamedQueries({
    @NamedQuery(name = "Datacenter.findAll", query = "SELECT d FROM Datacenter d")
    , @NamedQuery(name = "Datacenter.findById", query = "SELECT d FROM Datacenter d WHERE d.id = :id")
    , @NamedQuery(name = "Datacenter.findByName", query = "SELECT d FROM Datacenter d WHERE d.name = :name")
    , @NamedQuery(name = "Datacenter.findByDescription", query = "SELECT d FROM Datacenter d WHERE d.description = :description")})
public class Datacenter implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @Basic(optional = false)
    @Column(name = "id")
    private Integer id;
    @Basic(optional = false)
    @Column(name = "name")
    private String name;
    @Column(name = "description")
    private String description;
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "datacenterId")
    private Collection<Datacenterservice> datacenterserviceCollection;

    public Datacenter() {
    }

    public Datacenter(Integer id) {
        this.id = id;
    }

    public Datacenter(Integer id, String name) {
        this.id = id;
        this.name = name;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    @XmlTransient
    public Collection<Datacenterservice> getDatacenterserviceCollection() {
        return datacenterserviceCollection;
    }

    public void setDatacenterserviceCollection(Collection<Datacenterservice> datacenterserviceCollection) {
        this.datacenterserviceCollection = datacenterserviceCollection;
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
        if (!(object instanceof Datacenter)) {
            return false;
        }
        Datacenter other = (Datacenter) object;
        if ((this.id == null && other.id != null) || (this.id != null && !this.id.equals(other.id))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "br.com.datacenter.entities.Datacenter[ id=" + id + " ]";
    }
    
}
